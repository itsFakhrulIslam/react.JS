import React, { useState } from "react";
import "./SCountry.css";

const SCountry = ({ country, onVisit }) => {
  //   console.log(country);

  const [visited, setVisited] = useState(false);

  const handleVisit = () => {
    setVisited(!visited);
    onVisit(country);
  };

  return (
    <div className="sCountry">
      <img
        className="sCountryImg"
        src={country.flags.flags.png}
        alt={country.flags.flags.alt}
      />
      <h5>Country Name: {country.name.common}</h5>
      <p>Population: {country.population.population}</p>
      <button
        className={`sButton ${visited ? "visited" : ""}`}
        onClick={() => handleVisit(country.name.common)}
      >
        {visited ? <p>Visited</p> : <p>Not Visited</p>}
      </button>
    </div>
  );
};

export default SCountry;
