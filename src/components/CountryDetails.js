// components/CountryDetails.js

import React from "react";

const CountryDetails = ({ selectedCountry }) => {
  return (
    <div
      style={{
        background: "#f9f9f9",
        padding: "20px",
        borderRadius: "5px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        style={{
          padding: "20px 0",
          textTransform: "capitalize",
        }}
      >
        {selectedCountry.name.toUpperCase()}
      </h2>
      <img
        src={selectedCountry.flags.png}
        alt={`Flag of ${selectedCountry.name}`}
        style={{ maxWidth: "100px", marginBottom: "10px" }}
      />
      <p>Capital: {selectedCountry.capital}</p>
      <p>Population: {selectedCountry.population}</p>
      <p>Region: {selectedCountry.region}</p>
      <p>Time Zone: {selectedCountry.timezones[0]}</p>
    </div>
  );
};

export default CountryDetails;
