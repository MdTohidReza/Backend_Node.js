# Sales Leaderboard API

A Node.js/Express API for managing sales records and generating a leaderboard ranking system.

## Features

- Add new sales records with agent name, sales amount, and deal count
- Retrieve a ranked leaderboard of top performing sales agents
- MongoDB integration for data persistence
- CORS enabled for cross-origin requests

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (running locally or accessible via connection string)
- npm or yarn

## Installation

1. **Clone or download the project:**

   ```bash
   cd sales_leaderboard
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create a `.env` file:**
   Copy `.env.example` to `.env` and update the values:

   ```bash
   cp .env.example .env
   ```

   Configure your environment variables:

   ```
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/sales_leaderboard
   ```

## Running the Application

### Development Mode (with auto-reload):

```bash
npm run dev
```

### Production Mode:

```bash
npm start
```

The server will start on the port specified in your `.env` file (default: 5000).

## API Endpoints

### 1. Add a Sales Record

**POST** `/api/sales`

Request body:

```json
{
  "name": "John Doe",
  "amount": 50000,
  "deals": 5
}
```

Response:

```json
{
  "message": "Sale added successfully",
  "sale": {
    "_id": "...",
    "name": "John Doe",
    "amount": 50000,
    "deals": 5,
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  }
}
```

### 2. Get Leaderboard

**GET** `/api/leaderboard`

Response:

```json
[
  {
    "rank": 1,
    "name": "John Doe",
    "totalSales": 150000,
    "totalDeals": 15
  },
  {
    "rank": 2,
    "name": "Jane Smith",
    "totalSales": 120000,
    "totalDeals": 12
  }
]
```

## Project Structure

```
sales_leaderboard/
├── server.js                 # Main server entry point
├── package.json             # Project dependencies and scripts
├── .env.example             # Environment variables template
├── controllers/
│   └── salesController.js   # Business logic for sales operations
├── models/
│   └── Sale.js             # MongoDB schema definition
├── routes/
│   └── sale.js             # API route definitions
└── README.md               # This file
```

## Technologies Used

- **Express.js** - Web framework
- **Mongoose** - MongoDB ODM (Object Data Modeling)
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Environment variable management

## Error Handling

The API returns appropriate HTTP status codes:

- `201` - Sale added successfully
- `400` - Bad request (missing required fields)
- `500` - Server error

## MongoDB Setup

If you don't have MongoDB installed locally, you can:

1. Use MongoDB Atlas cloud service (free tier available)
2. Install MongoDB locally
3. Use Docker: `docker run -d -p 27017:27017 --name mongodb mongo`

## Troubleshooting

**Issue**: MongoDB connection error

- Ensure MongoDB is running
- Check your `MONGO_URI` in `.env` file

**Issue**: Port already in use

- Change the `PORT` value in `.env` file

**Issue**: Module not found errors

- Run `npm install` to ensure all dependencies are installed
- Ensure you're using Node.js v18 or higher

## License

ISC
