import { use } from "react";
import Country from "./Country";

const Countries = ({ countriesInfoData }) => {
  //   console.log(countriesInfoData);

  const countriesData = use(countriesInfoData);
  //   console.log(countriesData.countries.length);

  return (
    <div>
      <Country countriesData={countriesData} />
    </div>
  );
};

export default Countries;
