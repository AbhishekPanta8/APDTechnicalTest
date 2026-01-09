import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

class WeatherApiService {
  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  async getWeatherForecast() {
    try {
      const response = await this.client.get('/weather/forecast');
      return response.data;
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.error || 'Failed to fetch weather data');
      } else if (error.request) {
        throw new Error('No response from server. Please check your connection.');
      } else {
        throw new Error('Error setting up request');
      }
    }
  }

  async checkHealth() {
    try {
      const response = await this.client.get('/weather/health');
      return response.data;
    } catch (error) {
      throw new Error('Server health check failed');
    }
  }
}

export default new WeatherApiService();

