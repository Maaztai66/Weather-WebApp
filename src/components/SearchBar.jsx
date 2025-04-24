import React, { useState } from "react";

const SearchBar = ({fetchWeather}) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => { 

    e.preventDefault();
    if (city.trim()) {
      fetchWeather(city);
      setCity("");
    } else {
      alert("Please enter a city name.");
    }
  }
  return (
    <form className="flex w-full max-w-md" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter City Name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="flex-grow p-2 bg-white/10 text-white placeholder-gray-300 border border-white/20 rounded-l-lg outline-none"  
      />
     <button
    type="submit"
    className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-blue-500 hover:to-teal-400 text-white px-4 py-2 rounded-r-lg shadow-md transition"
  >
    Search
  </button>

    </form>
  );
};

export default SearchBar;
