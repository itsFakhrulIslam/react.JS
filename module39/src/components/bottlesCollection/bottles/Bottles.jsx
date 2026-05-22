import { use, useEffect, useState } from "react";
import Bottle from "../bottle/Bottle";
import "./Bottles.css";
import {
  getToLocalStorage,
  setToLocalStorage,
} from "../../../utils/localStorage/localStorage";
import Cart from "../../cart/Cart";

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

    // save the bottles id in the local storage
    setToLocalStorage(bottle.id);
  };

  const removeBottleHandler = (id) => {
    console.log("remove item from the cart", id);

    const removeNewCart = buyBottles.filter((bottle) => bottle.id !== id);

    setBuyBottles(removeNewCart);
  };

  // useeffect use for get bottles data and show in ui
  useEffect(() => {
    const storedCartIds = getToLocalStorage();
    // console.log(storedCartIds, fetchBottlesDataArray);

    const storedCart = [];

    for (const id of storedCartIds) {
      // console.log(id);

      const cartBottles = fetchBottlesDataArray.find(
        (bottle) => bottle.id === id,
      );

      if (cartBottles) {
        storedCart.push(cartBottles);
      }
    }

    // console.log(storedCart);

    setBuyBottles(storedCart);
  }, [fetchBottlesDataArray]);

  return (
    <>
      <h1>Total Bottles: {fetchBottlesDataArray.length} </h1>
      <h1>Buy Bottles: {buyBottles.length} </h1>
      <div>
        <Cart
          buyBottles={buyBottles}
          removeBottleHandler={removeBottleHandler}
        />
      </div>
      <div className="bottleContainer">
        {fetchBottlesDataArray.map((bottle) => (
          <Bottle key={bottle.id} bottle={bottle} onBuy={handleBuyBottle} />
        ))}
      </div>
    </>
  );
};

export default Bottles;
