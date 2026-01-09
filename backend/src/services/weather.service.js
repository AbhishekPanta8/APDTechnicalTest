const axios = require('axios');
const config = require('../config/app.config');
const cacheService = require('./cache.service');
const { validateWeatherData } = require('../utils/validator');
const { processWeatherData } = require('../utils/weatherProcessor');

class WeatherService {
  constructor() {
    this.cacheKey = 'weather_data';
  }

  async getWeatherData() {
    try {
      // Check cache first
      const cachedData = await cacheService.get(this.cacheKey);
      if (cachedData) {
        console.log('Returning cached weather data');
        return cachedData;
      }

      // Fetch from API
      console.log('Fetching fresh weather data from API');
      const response = await axios.get(config.weatherApi.url, {
        timeout: 10000,
        headers: {
          'Accept': 'application/json'
        }
      });

      // Validate the response
      if (!response.data) {
        throw new Error('Empty response from weather API');
      }

      // Validate data structure
      const validationError = validateWeatherData(response.data);
      if (validationError) {
        throw new Error(`Invalid weather data: ${validationError}`);
      }

      // Process the data
      const processedData = processWeatherData(response.data);

      // Cache the processed data with 5 seconds expiration
      await cacheService.set(this.cacheKey, processedData, 5);

      return processedData;
    } catch (error) {
      if (error.code === 'ECONNABORTED') {
        throw new Error('Weather API request timeout');
      }
      if (error.response) {
        throw new Error(`Weather API error: ${error.response.status}`);
      }
      throw error;
    }
  }
}

module.exports = new WeatherService();

