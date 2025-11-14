# Supabase Setup Guide

This project uses Supabase as the database backend instead of local SQLite.

## Prerequisites

1. Create a Supabase account at [https://supabase.com](https://supabase.com)
2. Create a new project in Supabase

## Database Schema Setup

Run the following SQL in your Supabase SQL Editor to create the donations table:

```sql
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
CREATE TRIGGER update_donations_updated_at BEFORE UPDATE
    ON donations FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
```

## Environment Variables

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Get your Supabase credentials:
   - Go to your Supabase project dashboard
   - Navigate to Settings > API
   - Copy the following:
     - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
     - **anon/public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     - **service_role key** (optional, for admin operations) → `SUPABASE_SERVICE_ROLE_KEY`

3. Update `.env.local` with your credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   ```

## Row Level Security (RLS)

By default, Supabase enables Row Level Security. For the donations table, you may want to:

1. **Disable RLS** (if you want public access via API):
   ```sql
   ALTER TABLE donations DISABLE ROW LEVEL SECURITY;
   ```

2. **Or create policies** (recommended for production):
   ```sql
   -- Allow anyone to insert donations
   CREATE POLICY "Allow public insert" ON donations
     FOR INSERT WITH CHECK (true);

   -- Allow anyone to read donations (or restrict to authenticated users)
   CREATE POLICY "Allow public read" ON donations
     FOR SELECT USING (true);
   ```

## Testing

After setting up:
1. Start the development server: `npm run dev`
2. Navigate to `/donations` page
3. Submit a test donation
4. Check your Supabase dashboard to verify the data was saved

## Migration from SQLite

If you have existing data in SQLite:
1. Export data from SQLite database
2. Import into Supabase using the Supabase dashboard or SQL editor
3. Update the column types if needed (SQLite uses different types than PostgreSQL)

