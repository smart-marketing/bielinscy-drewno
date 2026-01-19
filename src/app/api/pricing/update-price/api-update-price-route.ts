import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import fs from 'fs/promises';
import path from 'path';

const PRICING_FILE = path.join(process.cwd(), 'src', 'data', 'pricing.json');
const BACKUP_DIR = path.join(process.cwd(), 'src', 'data', 'pricing-backup');

async function createBackup(data: any) {
  try {
    await fs.access(BACKUP_DIR);
  } catch {
    await fs.mkdir(BACKUP_DIR, { recursive: true });
  }
  
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const backupFile = path.join(BACKUP_DIR, `pricing-${timestamp}.json`);
  await fs.writeFile(backupFile, JSON.stringify(data, null, 2));
}

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

    const { productId, sizeId, updates } = await request.json();

    if (!productId || !sizeId || !updates) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Read current data
    const currentData = JSON.parse(await fs.readFile(PRICING_FILE, 'utf-8'));

    // Create backup
    await createBackup(currentData);

    // Find and update the specific size
    const productIndex = currentData.products.findIndex((p: any) => p.id === productId);
    
    if (productIndex === -1) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    const sizeIndex = currentData.products[productIndex].sizes.findIndex(
      (s: any) => s.id === sizeId
    );

    if (sizeIndex === -1) {
      return NextResponse.json(
        { error: 'Size not found' },
        { status: 404 }
      );
    }

    // Update the size
    currentData.products[productIndex].sizes[sizeIndex] = {
      ...currentData.products[productIndex].sizes[sizeIndex],
      ...updates,
    };

    // Update metadata
    currentData.lastUpdate = new Date().toISOString();
    currentData.updatedBy = user.username;

    // Write to file
    await fs.writeFile(PRICING_FILE, JSON.stringify(currentData, null, 2));

    return NextResponse.json({
      success: true,
      data: currentData.products[productIndex].sizes[sizeIndex],
    });
  } catch (error) {
    console.error('Error updating price:', error);
    return NextResponse.json(
      { error: 'Failed to update price' },
      { status: 500 }
    );
  }
}
