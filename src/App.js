import React from 'react';
import { WeatherProvider } from './contexts/WeatherContext';
import { AppLayout } from './components/AppLayout/AppLayout';


function App() {
  return (
    <WeatherProvider>
      <AppLayout />
    </WeatherProvider>
  );
}

export default App;