import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [coins, setCoins] = useState([]);

  // Call API and receive data:
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      // Once promise is complete set state to value of API Call
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      });
  });

  return <div className="App">API</div>;
}

export default App;
