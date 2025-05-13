import React, { createContext, useState, useEffect } from 'react';
import { getWeatherByCity } from '../services/WeatherService';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentCity, setCurrentCity] = useState('');

const fetchWeather = async (city) => {
  if (!city) return;
  
  setLoading(true);
  setError(null);
  
  try {
    const data = await getWeatherByCity(city);
    if (data.cod && data.cod !== 200) {
      throw new Error(data.message || 'Weather data not available');
    }
    setWeatherData(data);
    setCurrentCity(city);
  } catch (err) {
    setError(err.message || 'Failed to fetch weather data');
  } finally {
    setLoading(false);
  }
};
  

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        loading,
        error,
        currentCity,
        fetchWeather,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};