import React, { useState } from "react";
import axios from "axios";
import CountryList from "./components/CountryList";
import CountryDetails from "./components/CountryDetails";
import "./styles/App.css";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleSearch = async (e) => {
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm === "") {
      setCountries([]);
      setSelectedCountry(null);
      return;
    }

    try {
      const response = await axios.get("https://restcountries.com/v2/all");
      const filteredCountries = response.data.filter((country) =>
        country.name.toLowerCase().includes(searchTerm)
      );
      setCountries(filteredCountries);
      setSelectedCountry(null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className="App">
      <h1>Country Details App</h1>
      <input
        type="text"
        placeholder="Search for a country"
        onChange={handleSearch}
      />
      {countries.length > 0 && (
        <CountryList
          countries={countries}
          handleCountryClick={handleCountryClick}
        />
      )}
      {selectedCountry && <CountryDetails selectedCountry={selectedCountry} />}
    </div>
  );
};

export default App;
