import { Suspense } from "react";
import "./App.css";
import Countries from "./components/Countries/Countries";
// import Test from "./Test";

// fetch to countries info api
const countriesInfoData = fetch(
  "https://openapi.programming-hero.com/api/all",
).then((res) => res.json());
// console.log(countriesInfoData);

function App() {
  return (
    <>
      <section id="center">
        <div>
          <h1>Learn ReactJs module38</h1>

          <Suspense fallback={<h2>Loading...</h2>}>
            <Countries countriesInfoData={countriesInfoData} />
          </Suspense>

          {/* <Test /> */}
        </div>
      </section>
    </>
  );
}

export default App;
