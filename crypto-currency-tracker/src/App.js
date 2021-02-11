import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('';)


  // Call API and receive data:
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      // Once promise is complete set state to value of API Call
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value)
  }

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search for a currency</h1>
        <form type="text" placeholder="search" className="coin-input" onChange={handleChange}></form>
      </div>
    </div>
  );
}

export default App;
