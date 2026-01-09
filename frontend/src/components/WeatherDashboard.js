import React, { useState, useEffect } from 'react';
import weatherApi from '../services/weatherApi';
import WeatherCard from './WeatherCard';
import ErrorMessage from './ErrorMessage';
import LoadingSpinner from './LoadingSpinner';
import { formatTemperature } from '../utils/formatters';

function WeatherDashboard() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await weatherApi.getWeatherForecast();
      
      if (response.success && response.data) {
        setWeatherData(response.data);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (err) {
      setError(err.message || 'Failed to load weather data');
      console.error('Weather fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="dashboard-container">
        <ErrorMessage message={error} />
        <button className="retry-button" onClick={fetchWeatherData}>
          Retry
        </button>
      </div>
    );
  }

  if (!weatherData) {
    return <ErrorMessage message="No weather data available" />;
  }

  return (
    <div className="dashboard-container">
      <section className="forecast-section">
        <h2>7-Day Forecast</h2>
        <div className="weather-cards-grid">
          {weatherData.first7Days && weatherData.first7Days.length > 0 ? (
            weatherData.first7Days.map((day, index) => (
              <WeatherCard
                key={index}
                dayOfWeek={day.dayOfWeek}
                date={day.date}
                dayTemperature={day.dayTemperature}
              />
            ))
          ) : (
            <p>No forecast data available</p>
          )}
        </div>
      </section>

      <section className="average-section">
        <h2>Average Night Temperature (First 10 Days)</h2>
        <div className="average-temp-card">
          <span className="avg-temp-value">
            {formatTemperature(weatherData.averageNightTemperature)}
          </span>
        </div>
        {weatherData.dataPoints && (
          <p className="data-info">
            Based on {weatherData.dataPoints.nightTempSamplesCount} data points
          </p>
        )}
      </section>
    </div>
  );
}

export default WeatherDashboard;

