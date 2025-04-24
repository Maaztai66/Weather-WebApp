import React from "react";

const WeatherCard = ({ weather }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-6 mt-6 w-full max-w-md mx-auto text-white space-y-6 border border-white/20">
      
      {/* Location */}
      <h2 className="text-3xl font-extrabold tracking-wide text-center drop-shadow-lg">
        {weather.name}, {weather.sys.country}
      </h2>

      {/* Weather Icon & Temp */}
      <div className="flex flex-col items-center justify-center">
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
          alt={weather.weather[0].description}
          className="w-24 h-24 mb-2"
        />
        <p className="text-6xl font-bold drop-shadow-sm">
          {Math.round(weather.main.temp)}°C
        </p>
      </div>

      {/* Description */}
      <p className="text-center text-gray-300 text-lg italic capitalize">
        {weather.weather[0].description}
      </p>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mt-4 text-sm text-center">
        <div className="flex flex-col items-center">
          <p className="text-cyan-300 font-medium">Humidity</p>
          <p className="text-xl font-bold">{weather.main.humidity} %</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-cyan-300 font-medium">Wind</p>
          <p className="text-xl font-bold">{weather.wind.speed} m/s</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-cyan-300 font-medium">Pressure</p>
          <p className="text-xl font-bold">{weather.main.pressure} hPa</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
