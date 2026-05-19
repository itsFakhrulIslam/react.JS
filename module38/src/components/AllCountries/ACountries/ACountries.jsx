import { use } from "react";
import './ACountries.css'

const ACountries = ({ allCountriesData }) => {
  //   console.log("from acountries", allCountriesData);

  const getFatchedData = use(allCountriesData);
  //   console.log(getFatchedData);

  const getFatchedDataArray = getFatchedData.countries;
  //   console.log(getFatchedDataArray);

  return (
    <div className="allCountriesContainer">
      <h1>All Countries List</h1>
      <p>Total List: {getFatchedDataArray.length} </p>
    </div>
  );
};

export default ACountries;
