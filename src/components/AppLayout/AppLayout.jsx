import React from 'react';
import CitySearch from '../CitySearch/CitySearch';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';
import './AppLayout.css';
import videoBg from '../../assets/3129769-sd_640_360_30fps.mp4';

export const AppLayout = () => {
  return (
    <div className="app-container">
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src={videoBg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>
      
      <div className="content-wrapper">
        <header className="app-header">
          <h1>City Weather Finder</h1>
        </header>
        <main className="app-main">
          <div className="search-section">
            <CitySearch />
          </div>
          <div className="weather-section">
            <WeatherDisplay />
          </div>
        </main>
      </div>
    </div>
  );
}