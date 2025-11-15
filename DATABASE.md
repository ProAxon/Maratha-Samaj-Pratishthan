# Database Setup

This project uses **Supabase** (PostgreSQL) to store donation information in the cloud.

## Supabase Setup

1. Create a Supabase account at [https://supabase.com](https://supabase.com)
2. Create a new project
3. Run the SQL migration file (`supabase-migration.sql`) in your Supabase SQL Editor
4. Configure environment variables (see below)

## Environment Variables

Create a `.env.local` file in the root directory with:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

Get these values from your Supabase project: Settings > API

## Database Schema

### donations table

- `id` - BIGSERIAL PRIMARY KEY (auto-increment)
- `amount` - DECIMAL(10, 2) (donation amount)
- `payment_method` - TEXT (upi, cheque, or netbanking)
- `donor_name` - TEXT (donor's name)
- `donor_email` - TEXT (donor's email)
- `donor_phone` - TEXT (donor's phone number)
- `pan_card` - TEXT (PAN card number, required for donations > ₹5000)
- `aadhar_number` - TEXT (Aadhar card number, required for donations > ₹5000)
- `upi_id` - TEXT (UPI ID, if payment method is UPI)
- `cheque_number` - TEXT (cheque/DD number, if payment method is cheque)
- `bank_name` - TEXT (bank name, if payment method is cheque)
- `transaction_id` - TEXT (transaction ID for net banking)
- `status` - TEXT (default: 'pending')
- `created_at` - TIMESTAMP WITH TIME ZONE (timestamp when record was created)
- `updated_at` - TIMESTAMP WITH TIME ZONE (timestamp when record was last updated, auto-updated via trigger)

## API Endpoints

### POST /api/donations

Submit a new donation.

**Request Body:**
```json
{
  "amount": "1000",
  "paymentMethod": "upi",
  "donorName": "John Doe",
  "donorEmail": "john@example.com",
  "donorPhone": "1234567890",
  "panCard": "ABCDE1234F", // Optional, required if amount > 5000
  "aadharNumber": "123456789012", // Optional, required if amount > 5000
  "upiId": "wctrjadhav@okaxis", // If payment method is UPI
  "chequeNumber": "123456", // If payment method is cheque
  "bankName": "State Bank of India" // If payment method is cheque
}
```

**Response:**
```json
{
  "success": true,
  "message": "आपल्या सहयोगाबद्दल धन्यवाद! आपली माहिती यशस्वीरित्या साठवली गेली आहे.",
  "donationId": 1
}
```

### GET /api/donations

Retrieve donations (for admin use).

**Query Parameters:**
- `limit` - Number of records to return (default: 100)
- `offset` - Number of records to skip (default: 0)

**Response:**
```json
{
  "success": true,
  "donations": [...],
  "total": 50,
  "limit": 100,
  "offset": 0
}
```

## Notes

- The database is hosted on Supabase (PostgreSQL)
- Environment variables are excluded from git (see `.gitignore`)
- The `updated_at` field is automatically updated via a database trigger
- Row Level Security (RLS) can be configured in Supabase for additional security
- All data is stored in the cloud and accessible from anywhere

