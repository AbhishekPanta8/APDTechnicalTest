export function formatTemperature(temp) {
  if (temp === null || temp === undefined) {
    return 'N/A';
  }
  return `${temp}°C`;
}

export function formatDate(dateString) {
  if (!dateString) {
    return 'Unknown';
  }
  
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return dateString;
    }
    
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  } catch (error) {
    return dateString;
  }
}

