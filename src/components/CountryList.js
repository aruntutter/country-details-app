// components/CountryList.js

import React from "react";

const CountryList = ({ countries, handleCountryClick }) => {
  return (
    <ul>
      {countries.map((country) => (
        <li
          key={country.alpha3Code}
          onClick={() => handleCountryClick(country)}
        >
          {country.name}
        </li>
      ))}
    </ul>
  );
};

export default CountryList;
