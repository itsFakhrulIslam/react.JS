import { use, useState } from "react";
import Bottle from "../bottle/Bottle";
import "./Bottles.css";

const Bottles = ({ fetchBottlesData }) => {
  //   console.log(fetchBottlesData);

  const fetchBottlesDataArray = use(fetchBottlesData);

  // state for bottles buy
  const [buyBottles, setBuyBottles] = useState([]);

  const handleBuyBottle = (bottle) => {
    // console.log(bottle);

    const newBuyBottles = [...buyBottles, bottle];
    // console.log(newBuyBottles);

    setBuyBottles(newBuyBottles);
  };

  return (
    <>
      <h1>Total Bottles: {fetchBottlesDataArray.length} </h1>
      <h1>Buy Bottles: {buyBottles.length} </h1>
      <div className="bottleContainer">
        {fetchBottlesDataArray.map((bottle) => (
          <Bottle key={bottle.id} bottle={bottle} onBuy={handleBuyBottle} />
        ))}
      </div>
    </>
  );
};

export default Bottles;
