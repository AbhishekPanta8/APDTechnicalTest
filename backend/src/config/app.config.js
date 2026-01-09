require('dotenv').config();

const config = {
  port: process.env.PORT || 5000,
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT || 6379
  },
  weatherApi: {
    url: process.env.WEATHER_API_URL || 'https://wxdata.apdtest.net/api/getweather'
  },
  cache: {
    ttl: parseInt(process.env.CACHE_TTL) || 300
  }
};

module.exports = config;

