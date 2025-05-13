import React from 'react';
import './WeatherDetail.css';

const WeatherDetail = ({ label, value }) => {
  return (
    <div className="weather-detail">
      <span className="detail-label">{label}:</span>
      <span className="detail-value">{value}</span>
    </div>
  );
};

export default WeatherDetail;