import React from "react";

function Card({ country, handleCountry }) {
  return (
    <div
      className="card-wrapper box-shadow"
      onClick={() => handleCountry(country)}
    >
      <div className="img-container">
        <img src={country.flag} alt="flag" />
      </div>
      <div className="card-content">
        <div className="card-name">{country.name}</div>
        <div className="card-info">
          <span>Population: </span>
          <span>{country.population}</span>
        </div>
        <div className="card-info">
          <span>Region: </span>
          <span>{country.region}</span>
        </div>
        <div className="card-info">
          <span>Capital: </span>
          <span>{country.capital}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
