import { use, useState } from "react";
import "./ACountries.css";
import SCountry from "../SCountry/SCountry";

const ACountries = ({ allCountriesData }) => {
  //   console.log("from acountries", allCountriesData);

  const getFatchedData = use(allCountriesData);
  //   console.log(getFatchedData);

  const getFatchedDataArray = getFatchedData.countries;
  //   console.log(getFatchedDataArray);

  const [visitedcountries, setVisitedCountries] = useState([]);

  const handleCountryVisit = (country) => {
    setVisitedCountries([...visitedcountries, country]);
  };

  return (
    <>
      <h1>All Countries List</h1>
      <p>Total List: {getFatchedDataArray.length} </p>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          listStyle: "none",
        }}
      >
        Visited Countries: {visitedcountries.length}
        {visitedcountries.map((country, index) => (
          <li key={index}>{country.name.common}</li>
        ))}
      </ul>

      <div className="allCountriesContainer">
        {getFatchedDataArray.map((country, index) => (
          <SCountry
            key={index}
            country={country}
            onVisit={handleCountryVisit}
          />
        ))}
      </div>
    </>
  );
};

export default ACountries;
