import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/weather';

export const getWeatherByCity = async (city) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${city}`);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.error || 'Failed to fetch weather data'
    );
  }
};