import React, { use } from "react";
import Bottle from "../bottle/Bottle";

const Bottles = ({ fetchBottlesData }) => {
  //   console.log(fetchBottlesData);

  const fetchBottlesDataArray = use(fetchBottlesData);

  return (
    <div>
      <h1>Total Bottles: {fetchBottlesDataArray.length} </h1>
      {
        fetchBottlesDataArray.map((bottle) => <Bottle key={bottle.id} bottle={bottle} />)
      }
    </div>
  );
};

export default Bottles;
