import React, { useState, useEffect } from "react";
import "./App.css";
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";
import InfoBox from "./InfoBox";
import Map from "./Map";

function App() {
  // Functional state components
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");

  // fetching API Data:
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

  // Fetching data specific to a given country:
  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);

     const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setInputCountry(countryCode);
        setCountryInfo(data);
        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(4);
      });
  };

  };

  return (
    <div className="app">
      <div className="app_left">
        <div className="app_header">
          <h1>COVID-19 TRACKER</h1>
          <FormControl className="app_dropdown">
            <Select
              variant="outlined"
              value={country}
              onChange={onCountryChange}
            >
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
        <Map />
      </div>

      <Card className="app_right">
        <CardContent>
          <h3>Live Cases by Country</h3>
          <h3> Worldwid new cases</h3>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
