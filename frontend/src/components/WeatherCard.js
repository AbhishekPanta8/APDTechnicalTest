import React from 'react';
import { formatTemperature, formatDate } from '../utils/formatters';

function WeatherCard({ dayOfWeek, date, dayTemperature }) {
  return (
    <div className="weather-card">
      <h3 className="day-name">{dayOfWeek}</h3>
      <p className="date">{formatDate(date)}</p>
      <div className="temperature">
        <span className="temp-value">{formatTemperature(dayTemperature)}</span>
        <span className="temp-label">Day</span>
      </div>
    </div>
  );
}

export default WeatherCard;

