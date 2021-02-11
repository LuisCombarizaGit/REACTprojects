import React from "react";

const Coin = ({ name, img, symbol, price, volume }) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={img} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbon">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">${price}</p>
          <p className="coin-volume">${volume.toLocalString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
