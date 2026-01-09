const express = require('express');
const weatherController = require('../controllers/weather.controller');

const router = express.Router();

router.get('/forecast', weatherController.getWeatherForecast.bind(weatherController));
router.get('/health', weatherController.healthCheck.bind(weatherController));

module.exports = router;

