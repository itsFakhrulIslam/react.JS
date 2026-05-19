import { Suspense } from "react";
import "./App.css";
import Countries from "./components/Countries/Countries";
import ACountries from "./components/AllCountries/ACountries/ACountries";
// import Test from "./Test";

// fetch to countries info api
const countriesInfoData = fetch(
  "https://openapi.programming-hero.com/api/all",
).then((res) => res.json());
// console.log(countriesInfoData);

//^ practice
const allCountriesData = fetch(
  "https://openapi.programming-hero.com/api/all",
).then((res) => res.json());
// console.log(allCountriesData);

function App() {
  return (
    <>
      <section id="center">
        <div>
          <h1>Learn ReactJs module38</h1>

          {/* <Suspense fallback={<h2>Loading...</h2>}>
            <Countries countriesInfoData={countriesInfoData} />
          </Suspense> */}

          {/* <Test /> */}

          {/* practice */}
          <ACountries allCountriesData={allCountriesData} />
        </div>
      </section>
    </>
  );
}

export default App;
