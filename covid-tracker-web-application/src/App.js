import React, { useState, useEffect } from "react";
import "./App.css";
import { MenuItem, FormControl, Select } from "@material-ui/core";
import InfoBox from "./InfoBox";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));

          setCountries(countries);
        });
    };
    getCountriesData();
  });

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;

    console.log(">>>>>>", countryCode);

    setCountry(countryCode);
  };

  return (
    <div className="App">
      <div className="app_header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app_dropdown">
          <Select variant="outlined" value={country} onChange={onCountryChange}>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className="app_stats">
        <InfoBox title="Coronovirus Cases" cases={1234} total={3000} />
        <InfoBox title="Recovered" cases={1234} total={123123} />
        <InfoBox title="Deaths" cases={1234} total={123123} />
      </div>
    </div>
  );
}

export default App;
