import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'src/data/pricing.json');
const BACKUP_DIR = path.join(process.cwd(), 'src/data/backups');

// Ensure backup directory exists
async function ensureBackupDir() {
  try {
    await fs.mkdir(BACKUP_DIR, { recursive: true });
  } catch (error) {
    // Directory already exists
  }
}

// Create backup before saving
async function createBackup() {
  try {
    await ensureBackupDir();
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupFile = path.join(BACKUP_DIR, `pricing-${timestamp}.json`);
    await fs.writeFile(backupFile, data);
    
    // Keep only last 30 backups
    const files = await fs.readdir(BACKUP_DIR);
    const backupFiles = files
      .filter(f => f.startsWith('pricing-'))
      .sort()
      .reverse();
    
    if (backupFiles.length > 30) {
      for (const file of backupFiles.slice(30)) {
        await fs.unlink(path.join(BACKUP_DIR, file));
      }
    }
  } catch (error) {
    console.error('Backup error:', error);
  }
}

// GET - Read pricing data
export async function GET() {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    const pricing = JSON.parse(data);
    return NextResponse.json(pricing);
  } catch (error) {
    console.error('Error reading pricing:', error);
    return NextResponse.json(
      { error: 'Failed to read pricing data' },
      { status: 500 }
    );
  }
}

// POST - Update pricing data
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate data structure
    if (!body.products || !Array.isArray(body.products)) {
      return NextResponse.json(
        { error: 'Invalid data structure' },
        { status: 400 }
      );
    }

    // Create backup before saving
    await createBackup();

    // Save new data
    await fs.writeFile(
      DATA_FILE,
      JSON.stringify(body, null, 2),
      'utf-8'
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving pricing:', error);
    return NextResponse.json(
      { error: 'Failed to save pricing data' },
      { status: 500 }
    );
  }
}

// PUT - Add new product
export async function PUT(request: NextRequest) {
  try {
    const newProduct = await request.json();
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    const pricing = JSON.parse(data);

    pricing.products.push(newProduct);

    await createBackup();
    await fs.writeFile(
      DATA_FILE,
      JSON.stringify(pricing, null, 2),
      'utf-8'
    );

    return NextResponse.json({ success: true, product: newProduct });
  } catch (error) {
    console.error('Error adding product:', error);
    return NextResponse.json(
      { error: 'Failed to add product' },
      { status: 500 }
    );
  }
}

// DELETE - Remove product
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const productId = searchParams.get('id');

    if (!productId) {
      return NextResponse.json(
        { error: 'Product ID required' },
        { status: 400 }
      );
    }

    const data = await fs.readFile(DATA_FILE, 'utf-8');
    const pricing = JSON.parse(data);

    pricing.products = pricing.products.filter(
      (p: any) => p.id !== parseInt(productId)
    );

    await createBackup();
    await fs.writeFile(
      DATA_FILE,
      JSON.stringify(pricing, null, 2),
      'utf-8'
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting product:', error);
    return NextResponse.json(
      { error: 'Failed to delete product' },
      { status: 500 }
    );
  }
}