// Luis Combariza Feb 1, 2021
// luis_combariza@outlook.com

import React, { useState } from "react";

// Api information for easier access
const api = {
  key: "98b5ba2ee69aa64434fb7d86727ae023",
  base: "https://api.openweathermap.org/data/2.5/",
};

// App function "CORE" of this project
function App() {
  // Hook to change state of app based on API call
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  // API call and conversion to .json
  const search = (evnt) => {
    if (evnt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json()) // First promise
        .then((result) => {
          setWeather(result); // Second promise
          setQuery("");
          console.log(result);
        });
    }
  };

  // Simple way to build dates
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  // JSX portion of project which creates elements of application
  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp < 10
            ? "app cold"
            : "app mild"
          : "app"
      }
    >
      <main>
        <header className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Seach for a city"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </header>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name},{weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°c</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
