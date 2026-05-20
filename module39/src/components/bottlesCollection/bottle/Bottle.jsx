import React from "react";

const Bottle = ({ bottle }) => {
  //   console.log(bottle);

  const { name, img, price } = bottle;

  return (
    <div>
      <h2>{name}</h2>
      <img src={img} alt={name} width="200" />
      <p>Price: ${price.toFixed(2)}</p>
    </div>
  );
};

export default Bottle;
