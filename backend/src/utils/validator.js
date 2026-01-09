function validateWeatherData(data) {
  if (!data || typeof data !== 'object') {
    return 'Data must be an object';
  }

  if (!data.longterm || !Array.isArray(data.longterm)) {
    return 'Missing or invalid longterm array';
  }

  if (data.longterm.length === 0) {
    return 'Longterm array is empty';
  }

  // Validate first few entries to ensure data quality
  for (let i = 0; i < Math.min(10, data.longterm.length); i++) {
    const entry = data.longterm[i];
    
    if (!entry.time || !entry.time.local) {
      return `Missing time information at index ${i}`;
    }

    if (!entry.day || typeof entry.day.temperature === 'undefined') {
      return `Missing day temperature at index ${i}`;
    }

    if (!entry.night || typeof entry.night.temperature === 'undefined') {
      return `Missing night temperature at index ${i}`;
    }
  }

  return null;
}

function validateTemperature(temp) {
  return typeof temp === 'number' && !isNaN(temp) && temp >= -100 && temp <= 100;
}

module.exports = {
  validateWeatherData,
  validateTemperature
};

