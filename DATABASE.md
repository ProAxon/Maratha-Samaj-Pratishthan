# Database Setup

This project uses SQLite with `better-sqlite3` to store donation information locally.

## Database Location

The database file is stored at: `data/donations.db`

The database is automatically created when the first donation is submitted.

## Database Schema

### donations table

- `id` - INTEGER PRIMARY KEY (auto-increment)
- `amount` - REAL (donation amount)
- `payment_method` - TEXT (upi, cheque, or netbanking)
- `donor_name` - TEXT (donor's name)
- `donor_email` - TEXT (donor's email)
- `donor_phone` - TEXT (donor's phone number)
- `pan_card` - TEXT (PAN card number, required for donations > ₹5000)
- `upi_id` - TEXT (UPI ID, if payment method is UPI)
- `cheque_number` - TEXT (cheque/DD number, if payment method is cheque)
- `bank_name` - TEXT (bank name, if payment method is cheque)
- `transaction_id` - TEXT (transaction ID for net banking)
- `status` - TEXT (default: 'pending')
- `created_at` - DATETIME (timestamp when record was created)
- `updated_at` - DATETIME (timestamp when record was last updated)

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

- The database file (`data/donations.db`) is automatically created on first use
- Database files are excluded from git (see `.gitignore`)
- For production deployments on serverless platforms (like Vercel), consider using a cloud database service instead of SQLite
- The database uses WAL (Write-Ahead Logging) mode for better performance

