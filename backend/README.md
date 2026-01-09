# Weather Forecast Backend

## Overview

Express.js backend service that fetches weather data from external API, processes it, and provides RESTful endpoints with Redis caching.

## Key Features

- RESTful API architecture
- Redis caching with configurable TTL
- Comprehensive error handling
- Data validation and sanitization
- Clean separation of concerns

## Environment Variables

```
PORT=5000
REDIS_HOST=localhost
REDIS_PORT=6379
WEATHER_API_URL=https://wxdata.apdtest.net/api/getweather
CACHE_TTL=300
```

## Running

```bash
npm start
```

