import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import "./components/current.jsx";
import "./components/forecast.jsx";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
function App() {
  const [city, setCity] = useState();
  const [citySuggestion, setCitySuggestion] = useState([]);
  const [current, setCurrent] = useState();
  const [location, setLocation] = useState();
  const [forecast,setForecast]=useState();

  const autocompleteUrl =
    "https://api.weatherapi.com/v1/search.json?key=83c0b17cb2774eac9572352731501&q=";
  const weatherUrl = (city) =>
    `https://api.weatherapi.com/v1/forecast.json?key=83c0b17cb2774eac95723527231501&q=${city}&days=7&aqi=no&alerts=no`;

  useEffect(() => {
    if (city && city.length > 3) {
      fetchAutoCompApi();
    }
  }, [city]);

  const fetchAutoCompApi = async () => {
    try {
      const response = await axios.get(autocompleteUrl + city);
      const resp = response.data;
      console.log(resp);
      const cityData = resp.map((city) => {
        return `${city.name},${city.region},${city.country}`;
      });
      setCitySuggestion(cityData);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const weatherApi = async (city) => {
    try {
      const response = await axios.get(weatherUrl(city));
      const resp = response.data;
      console.log(resp);
      setCurrent(resp.current);
      setLocation(resp.location);
    } catch (error) {
      console.log("Error fetching weather data:", error);
    }
  };

  const handleSelectedCity = (city) => {
    console.log(city);
    weatherApi(city);
    setClickedCity(city);
    setCitySuggestion([])
  };

  return (
    <div className="container bg-success p-5 rounded mt-5">
      <input
        type="text"
        value={ClickedCity}
        className="form-control"
        onChange={(e) => 
          setCity(e.target.value)
        }
        
      />
      {citySuggestion &&
        citySuggestion.map((city) => (
          <div
            key={city}
            className="text-center bg-info rounded p-1 bg-opacity-10 border info-border opacity-25 text-white"
            style={{ cursor: "pointer" }}
            onClick={() => handleSelectedCity(city)}
          >
            {city}
          </div>
      ))}
      {current && <current current={current} location={location}/>}
    </div>
  );
}

export default App;
