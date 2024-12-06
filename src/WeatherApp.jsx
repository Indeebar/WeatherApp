import { useState } from 'react';
import InfoBox from './InfoBox';
import SearchBox from './SearchBox';
import './WeatherApp.css';

export default function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null); // State for weather data

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "97f6df7adea32de98a7b3c7ebb9b8ef4";

  const getWeatherInfo = async (city) => {
    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      ); // Fetch data in metric units
      if (!response.ok) {
        throw new Error("City not found");
      }
      const jsonResponse = await response.json();
      const result = {
        city: jsonResponse.name,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelslike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      setWeatherData(result); // Update weather data state
    } catch (error) {
      alert(error.message); // Display error to user
    }
  };

  return (
    <div className="WeatherApp">
      <SearchBox onSearch={getWeatherInfo} /> {/* Pass search function */}
      {weatherData && <InfoBox info={weatherData} />} {/* Conditionally render InfoBox */}
    </div>
  );
}
