const { validateTemperature } = require('./validator');

function getDayOfWeek(dateString) {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return 'Invalid Date';
    }
    
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
  } catch (error) {
    return 'Invalid Date';
  }
}

function processWeatherData(data) {
  const longterm = data.longterm || [];
  
  // Process first 7 days
  const first7Days = longterm.slice(0, 7).map((entry, index) => {
    const dayTemp = entry.day?.temperature?.value;
    
    return {
      dayOfWeek: getDayOfWeek(entry.time?.local),
      date: entry.time?.local?.split('T')[0] || 'Unknown',
      dayTemperature: validateTemperature(dayTemp) ? dayTemp : null
    };
  });

  // Calculate average night temperature for first 10 days
  const first10Days = longterm.slice(0, 10);
  const nightTemperatures = first10Days
    .map(entry => entry.night?.temperature?.value)
    .filter(temp => validateTemperature(temp));

  const averageNightTemp = nightTemperatures.length > 0
    ? nightTemperatures.reduce((sum, temp) => sum + temp, 0) / nightTemperatures.length
    : null;

  return {
    first7Days,
    averageNightTemperature: averageNightTemp !== null ? parseFloat(averageNightTemp.toFixed(1)) : null,
    dataPoints: {
      first7DaysCount: first7Days.length,
      nightTempSamplesCount: nightTemperatures.length
    }
  };
}

module.exports = {
  getDayOfWeek,
  processWeatherData
};

