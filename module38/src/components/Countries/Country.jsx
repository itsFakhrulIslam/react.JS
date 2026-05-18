import { useState } from "react";
import "./Countries.css";

const Country = ({ countriesData }) => {
  console.log(countriesData.countries.length);

  const countriesArray = countriesData.countries;
  console.log(countriesArray);

  const [visitedCountries, setVisitedCountries] = useState(false);

  const btnClickHandler = () => {
    setVisitedCountries(true);
  };

  return (
    <div id="countries">
      {countriesArray.map((country) => (
        <div
          style={{
            border: "2px dashed yellow",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            padding: "20px",
            textAlign: "left",
          }}
          key={country.ccn3}
        >
          <img
            style={{ width: "250px", height: "auto" }}
            src={country.flags.flags.png}
            alt={country.flags.flags.alt}
          />
          <p>Country Name: {country.name.common}</p>
          <p>Population: {country.population.population}</p>
          <p>Region: {country.region.region}</p>
          <p>
            Area: {country.area.area}
            {country.area.area > 1000000 ? " Big country" : " Small country"}
          </p>
          <button
            style={{ background: "blue", padding: "5px" }}
            onClick={btnClickHandler}
          >
            {visitedCountries ? "Visited" : "Not Visited"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Country;
