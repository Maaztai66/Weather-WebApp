import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";

function App() {
  // Create state variables
  const [Weather, setWeather] = useState(null); // Holds the weather data
  const [loading, setLoading] = useState(false); // Tracks if the app is loading
  const [error, setError] = useState(null); // Stores any error messages

  // API key from .env file (secured)
  const API_KEY = import.meta.env.VITE_API_KEY;

  // Base URL of the OpenWeatherMap API
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";

  // Function to fetch weather based on the city name
  async function fetchWeather(city) {
    setLoading(true); // Show loading indicator
    setError(null); // Clear previous errors

    // Create full API URL
    const url = `${API_URL}?q=${city}&units=metric&appid=${API_KEY}`;
    console.log("Fetching from:", url); // Debug log

    try {
      // Make API call to get weather data
      const response = await axios.get(url);
      console.log("Weather data:", response.data); // Log data for testing
      setWeather(response.data); // Save weather data to state
    } catch (error) {
      console.error("API error:", error); // Log any errors
      // If city not found, show specific message
      if (error.response && error.response.status === 404) {
        setError("City not found");
      } else {
        setError("An error occurred"); // Generic error
      }
      setWeather(null); // Clear any previous weather info
    } finally {
      setLoading(false); // Stop loading spinner
    }
  }

  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-blue-100">
        {/* 1. Video as a background at z‑0 */}
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 object-cover w-full h-full z-0"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>

        {/* 2. Overlay card at z‑10 */}
        <div className="relative z-10 bg-black bg-opacity-75 p-4 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-3xl font-bold text-white text-center mb-4">
            Weather App
          </h1>
          <SearchBar fetchWeather={fetchWeather} />
          {loading && (
            <p className="mt-4 text-center text-gray-300">Loading…</p>
          )}
          {error && (
            <p className="mt-4 text-center text-red-400">{error}</p>
          )}
          {Weather && <WeatherCard weather={Weather} />}
        </div>
      </div>
    </>
  );
}

export default App;
