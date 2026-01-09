# Quick Start Guide

## Prerequisites

Before running the application, ensure you have:
- Node.js (v16 or higher)
- Redis Server
- npm

## Installation

### Automated Setup

**Windows:**
```powershell
.\setup.ps1
```

**Linux/Mac:**
```bash
chmod +x setup.sh
./setup.sh
```

### Manual Setup

1. Install backend dependencies:
```bash
cd backend
npm install
```

2. Install frontend dependencies:
```bash
cd frontend
npm install
```

## Running the Application

### Step 1: Start Redis Server

**Windows:**
```bash
redis-server
```

**Linux/Mac:**
```bash
redis-server
```

Or if installed via package manager:
```bash
sudo service redis-server start
```

### Step 2: Start Backend Server

Open a new terminal:
```bash
cd backend
npm start
```

The backend will run on `http://localhost:5000`

### Step 3: Start Frontend Application

Open another terminal:
```bash
cd frontend
npm start
```

The frontend will run on `http://localhost:3000` and automatically open in your browser.

## Verifying the Application

1. Check backend health: `http://localhost:5000/api/weather/health`
2. Access the frontend: `http://localhost:3000`
3. The dashboard should display:
   - 7-day weather forecast
   - Average night temperature for first 10 days

## Troubleshooting

### Redis Connection Error
- Ensure Redis server is running
- Check Redis is on default port 6379
- Verify firewall settings

### Backend Not Starting
- Check if port 5000 is available
- Verify all dependencies are installed
- Check Redis connection

### Frontend API Error
- Ensure backend is running
- Check backend URL in frontend configuration
- Verify CORS is enabled in backend

## Data Caching

- Weather data is cached for 5 minutes
- Subsequent requests within 5 minutes will be served from cache
- After 5 minutes, fresh data will be fetched from the API

## Development Mode

For development with auto-reload:

Backend:
```bash
cd backend
npm run dev
```

Frontend:
```bash
cd frontend
npm start
```

