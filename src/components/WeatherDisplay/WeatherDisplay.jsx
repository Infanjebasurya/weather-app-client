import React, { useContext } from 'react';
import { WeatherContext } from '../../contexts/WeatherContext';
import WeatherDetail from '../WeatherDetail/WeatherDetail';
import './WeatherDisplay.css';
import image from '../../assets/cloudy.png'

const WeatherDisplay = () => {
  const { weatherData, loading, error, currentCity } = useContext(WeatherContext);

  if (loading) return <div className="weather-loading">Loading weather data...</div>;
  if (error) return <div className="weather-error">Error: {error}</div>;
  if (!weatherData) return <div className="weather-empty">Search for a city to see weather</div>;

  return (
    <div className="weather-container">
      <h2>Weather for {currentCity}</h2>
      <div className="weather-main">
        <div className="weather-primary">
          <img 
            src={image}
            alt={weatherData.weather[0].description}
          />
          <span className="weather-temp">{Math.round(weatherData.main.temp)}°C</span>
          <span className="weather-desc">{weatherData.weather[0].main}</span>
        </div>
        
        <div className="weather-details " style={{backdropFilter:'transparent'}}>
          <WeatherDetail label="Feels Like" value={`${Math.round(weatherData.main.feels_like)}°C`} />
          <WeatherDetail label="Humidity" value={`${weatherData.main.humidity}%`} />
          <WeatherDetail label="Wind" value={`${weatherData.wind.speed} m/s`} />
          <WeatherDetail label="Pressure" value={`${weatherData.main.pressure} hPa`} />
          <WeatherDetail label="Visibility" value={`${weatherData.visibility / 1000} km`} />
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;