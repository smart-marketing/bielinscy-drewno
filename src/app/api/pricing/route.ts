import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import fs from 'fs/promises';
import path from 'path';

const PRICING_FILE = path.join(process.cwd(), 'src', 'data', 'pricing.json');
const BACKUP_DIR = path.join(process.cwd(), 'src', 'data', 'pricing-backup');

async function ensureBackupDir() {
  try {
    await fs.access(BACKUP_DIR);
  } catch {
    await fs.mkdir(BACKUP_DIR, { recursive: true });
  }
}

async function createBackup(data: any) {
  await ensureBackupDir();
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const backupFile = path.join(BACKUP_DIR, `pricing-${timestamp}.json`);
  await fs.writeFile(backupFile, JSON.stringify(data, null, 2));
  
  // Keep only last 30 backups
  const files = await fs.readdir(BACKUP_DIR);
  if (files.length > 30) {
    const sortedFiles = files.sort().slice(0, files.length - 30);
    for (const file of sortedFiles) {
      await fs.unlink(path.join(BACKUP_DIR, file));
    }
  }
}

// GET - Public endpoint to fetch pricing
export async function GET() {
  try {
    const data = await fs.readFile(PRICING_FILE, 'utf-8');
    const pricing = JSON.parse(data);
    
    return NextResponse.json(pricing);
  } catch (error) {
    console.error('Error reading pricing:', error);
    return NextResponse.json(
      { error: 'Failed to load pricing data' },
      { status: 500 }
    );
  }
}

// POST - Admin only endpoint to update pricing
export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const user = await getSession();
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const updates = await request.json();

    // Read current data
    const currentData = JSON.parse(await fs.readFile(PRICING_FILE, 'utf-8'));

    // Create backup before updating
    await createBackup(currentData);

    // Update data
    const updatedData = {
      ...currentData,
      ...updates,
      lastUpdate: new Date().toISOString(),
      updatedBy: user.username,
    };

    // Write updated data
    await fs.writeFile(PRICING_FILE, JSON.stringify(updatedData, null, 2));

    return NextResponse.json({ 
      success: true, 
      data: updatedData 
    });
  } catch (error) {
    console.error('Error updating pricing:', error);
    return NextResponse.json(
      { error: 'Failed to update pricing' },
      { status: 500 }
    );
  }
}
