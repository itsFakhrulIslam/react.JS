import { Suspense } from "react";
import "./App.css";
import AllPlayers from "./component/allPlayers/AllPlayers";
import Navbar from "./component/navbar/Navbar";
import SelectPlayers from "./component/selectPlayers/SelectPlayers";

// data fetch from public/local json file
const fetchData = async () => {
  try {
    const response = await fetch("/players.json");
    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
// console.log(fetchData());

function App() {
  const promiseData = fetchData();
  // console.log(promiseData);

  return (
    <>
      <Navbar />

      {/* fetched data passing and loading state */}
      <Suspense fallback={<div>Loading players all data...</div>}>
        <AllPlayers onPromiseData={promiseData} />
      </Suspense>
      <SelectPlayers />
    </>
  );
}

export default App;
