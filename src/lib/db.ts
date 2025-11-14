import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

// Database file path
const dbPath = path.join(process.cwd(), 'data', 'donations.db');

// Ensure data directory exists
const dataDir = path.dirname(dbPath);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Initialize database connection
let db: Database.Database | null = null;

export function getDatabase(): Database.Database {
  if (!db) {
    db = new Database(dbPath);
    db.pragma('journal_mode = WAL'); // Enable Write-Ahead Logging for better performance
    
    // Create donations table if it doesn't exist
    db.exec(`
      CREATE TABLE IF NOT EXISTS donations (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        amount REAL NOT NULL,
        payment_method TEXT NOT NULL,
        donor_name TEXT NOT NULL,
        donor_email TEXT NOT NULL,
        donor_phone TEXT NOT NULL,
        pan_card TEXT,
        upi_id TEXT,
        cheque_number TEXT,
        bank_name TEXT,
        transaction_id TEXT,
        status TEXT DEFAULT 'pending',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create index on email and phone for faster lookups
    db.exec(`
      CREATE INDEX IF NOT EXISTS idx_donor_email ON donations(donor_email);
      CREATE INDEX IF NOT EXISTS idx_donor_phone ON donations(donor_phone);
      CREATE INDEX IF NOT EXISTS idx_created_at ON donations(created_at);
    `);
  }
  
  return db;
}

// Close database connection (useful for cleanup)
export function closeDatabase() {
  if (db) {
    db.close();
    db = null;
  }
}

