import { Suspense, useState } from "react";
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

  // toggling for available and selected players
  const [activeTab, setActiveTab] = useState(true);

  const handleTabToggle = () => {
    setActiveTab((prevTab) => !prevTab);
  };

  return (
    <>
      <Navbar />

      <div className="max-w-300 mx-auto flex justify-between items-center py-4">
        <h1 className="font-bold text-2xl">
          Available Players / Selected Players
        </h1>

        <div className="">
          <button
            onClick={handleTabToggle}
            className={`p-3 cursor-pointer ${activeTab ? "bg-blue-500 text-white" : "bg-gray-200 text-black"} font-bold rounded-l-xl`}
          >
            Available
          </button>

          <button
            onClick={handleTabToggle}
            className={`p-3 cursor-pointer ${!activeTab ? "bg-blue-500 text-white" : "bg-gray-200 text-black"} font-bold rounded-r-xl`}
          >
            Selected<span>(0)</span>
          </button>
        </div>
      </div>

      {activeTab ? (
        // fetched data passing and loading state
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-64">
              <span className="loading loading-infinity  loading-xl"></span>
            </div>
          }
        >
          <AllPlayers onPromiseData={promiseData} />
        </Suspense>
      ) : (
        <SelectPlayers />
      )}
    </>
  );
}

export default App;
