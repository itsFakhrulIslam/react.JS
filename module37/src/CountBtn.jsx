import React, { useState } from "react";

export default function CountBtn() {
  const [number, setNumber] = useState(0);

  const addNumber = () => {
    let newNumber = number + 1;
    setNumber(newNumber);
  };

  return (
    <div>
      <h2>count: {number} </h2>
      <button onClick={addNumber}>Add</button>
    </div>
  );
}
