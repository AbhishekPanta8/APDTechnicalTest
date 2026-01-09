const weatherService = require('../services/weather.service');

class WeatherController {
  async getWeatherForecast(req, res, next) {
    try {
      const weatherData = await weatherService.getWeatherData();
      
      res.status(200).json({
        success: true,
        data: weatherData
      });
    } catch (error) {
      next(error);
    }
  }

  async healthCheck(req, res) {
    res.status(200).json({
      success: true,
      message: 'API is running',
      timestamp: new Date().toISOString()
    });
  }
}

module.exports = new WeatherController();

