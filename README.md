# APD Developer Technical Test

**Test Taker:** Abhishek Panta

## Project Overview

A MERN stack application that consumes weather forecast data from an external API, processes it, and displays specific weather information with Redis caching for performance optimization.

## Architecture

The application follows clean architecture principles with clear separation of concerns:

### Backend Structure
- **Config Layer**: Application and Redis configuration
- **Services Layer**: Business logic for weather data processing and caching
- **Controllers Layer**: Request handling and response formatting
- **Routes Layer**: API endpoint definitions
- **Middleware Layer**: Error handling and request processing
- **Utils Layer**: Validation and data processing utilities

### Frontend Structure
- **Components**: Reusable React components for UI
- **Services**: API communication layer
- **Utils**: Formatting and helper functions

## Features

1. **Weather Data Display**
   - First 7 days forecast showing:
     - Day of the week (derived from local time)
     - Day temperature
   
2. **Temperature Analysis**
   - Average night temperature across first 10 days

3. **Redis Caching**
   - Weather data cached for 5 minutes
   - Reduces API calls and improves performance

4. **Error Handling**
   - Comprehensive validation of incoming data
   - Graceful error messages
   - Prevents crashes on bad or missing data

## Prerequisites

- Node.js (v16 or higher)
- Redis Server
- npm or yarn

## Installation

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```
PORT=5000
REDIS_HOST=localhost
REDIS_PORT=6379
WEATHER_API_URL=https://wxdata.apdtest.net/api/getweather
CACHE_TTL=300
```

### Frontend Setup

```bash
cd frontend
npm install
```

## Running the Application

### Start Redis Server

Windows:
```bash
redis-server
```

Linux/Mac:
```bash
redis-server
```

### Start Backend Server

```bash
cd backend
npm start
```

Backend will run on `http://localhost:5000`

### Start Frontend Application

```bash
cd frontend
npm start
```

Frontend will run on `http://localhost:3000`

## API Endpoints

- `GET /api/weather/forecast` - Get processed weather forecast data
- `GET /api/weather/health` - Health check endpoint

## Technology Stack

- **Frontend**: React 18, Axios
- **Backend**: Node.js, Express.js
- **Caching**: Redis
- **API Communication**: Axios

## Design Principles

- **SOLID Principles**: Single responsibility, dependency injection
- **Clean Architecture**: Separation of concerns, layered architecture
- **Error Handling**: Comprehensive validation and error boundaries
- **Scalability**: Modular structure for easy extension

## Project Structure

```
APDTechnicalTest/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   └── server.js
│   ├── package.json
│   └── .gitignore
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── .gitignore
└── README.md
```

## Development Notes

- Data is cached in Redis for 5 minutes to optimize performance
- All weather data is validated before processing
- The application handles network failures gracefully
- Clean commit history follows conventional commit standards
