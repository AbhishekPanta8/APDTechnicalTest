import React from 'react';
import WeatherDashboard from './components/WeatherDashboard';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>APD Developer Technical Test</h1>
        <p className="subtitle">Test Taker: Abhishek Panta</p>
      </header>
      <main className="app-main">
        <WeatherDashboard />
      </main>
      <footer className="app-footer">
        <p>Data cached for 10 seconds</p>
      </footer>
    </div>
  );
}

export default App;

