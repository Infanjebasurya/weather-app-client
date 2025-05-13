import React, { useState, useContext } from 'react';
import { WeatherContext } from '../../contexts/WeatherContext';
import './CitySearch.css';

const CitySearch = () => {
  const [city, setCity] = useState('');
  const { fetchWeather, loading } = useContext(WeatherContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeather(city.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        disabled={loading}
      />
      <button type="submit" disabled={!city.trim() || loading}>
        {loading ? 'Searching...' : 'Search'}
      </button>
    </form>
  );
};

export default CitySearch;