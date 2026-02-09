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

This project uses **MongoDB Atlas** cloud service. To set it up:

1. **Create MongoDB Atlas Account:**
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Sign up for a free account
   - Create a new cluster

2. **Get Connection String:**
   - In Atlas, go to "Database" → "Clusters"
   - Click "Connect" on your cluster
   - Choose "Drivers" and select Node.js
   - Copy the connection string

3. **Update `.env` file:**
   - Paste your connection string as `MONGO_URI` value
   - Replace `<password>` and `<username>` with your credentials
   - Example format: `mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority`

## Troubleshooting

**Issue**: MongoDB Atlas connection error

- Verify your connection string in `.env` file
- Check that your IP address is whitelisted in MongoDB Atlas (Network Access)
- Ensure your database username and password are correct
- If using special characters in password, make sure they're URL-encoded

**Issue**: Port already in use

- Change the `PORT` value in `.env` file

**Issue**: Module not found errors

- Run `npm install` to ensure all dependencies are installed
- Ensure you're using Node.js v18 or higher

**Issue**: "Authentication failed" from MongoDB

- Double-check username and password in your Atlas connection string
- Verify the database name in your connection string matches Atlas

## License

ISC
