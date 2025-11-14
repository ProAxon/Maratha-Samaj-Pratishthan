-- Supabase Migration: Create donations table
-- Run this SQL in your Supabase SQL Editor

-- Create donations table
CREATE TABLE IF NOT EXISTS donations (
  id BIGSERIAL PRIMARY KEY,
  amount DECIMAL(10, 2) NOT NULL,
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
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_donor_email ON donations(donor_email);
CREATE INDEX IF NOT EXISTS idx_donor_phone ON donations(donor_phone);
CREATE INDEX IF NOT EXISTS idx_created_at ON donations(created_at DESC);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
DROP TRIGGER IF EXISTS update_donations_updated_at ON donations;
CREATE TRIGGER update_donations_updated_at BEFORE UPDATE
    ON donations FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Optional: Disable Row Level Security for public access (or create policies instead)
-- ALTER TABLE donations DISABLE ROW LEVEL SECURITY;

-- Optional: Create policies for Row Level Security (recommended for production)
-- Allow anyone to insert donations
-- CREATE POLICY "Allow public insert" ON donations
--   FOR INSERT WITH CHECK (true);

-- Allow anyone to read donations (or restrict to authenticated users)
-- CREATE POLICY "Allow public read" ON donations
--   FOR SELECT USING (true);

