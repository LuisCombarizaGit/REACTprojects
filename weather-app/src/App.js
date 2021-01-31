import React from "react";

const api = {
  key: "98b5ba2ee69aa64434fb7d86727ae023",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  return (
    <div className="app">
      <main>
        <div classNmae="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Seach for a city"
          />
        </div>
      </main>
    </div>
  );
}

export default App;
