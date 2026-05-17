import React, { useState } from "react";

export default function NumCounter() {
  const [numbers, setNumbers] = useState(0);

  const addNumbers = () => {
    let newNumbers = numbers + 1;
    setNumbers(newNumbers);
  };
  const minusNumbers = () => {
    let newNumbers = numbers - 1;
    setNumbers(newNumbers);
  };
  const resetNumbers = () => {
    setNumbers(0);
  };

  return (
    <div
      style={{
        marginTop: "30px",
        border: "2px dotted yellow",
        borderRadius: "10px",
        padding: "40px",
      }}
    >
      <h1>Number Counters</h1>

      <h1>Counter: {numbers} </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AddBtn addNumbers={addNumbers} />
        <MinusBtn minusNumbers={minusNumbers} />
        <ResetBtn resetNumbers={resetNumbers} />
      </div>
    </div>
  );
}

function AddBtn({ addNumbers }) {
  return (
    <>
      <button onClick={addNumbers}>Add +</button>
    </>
  );
}

function MinusBtn({ minusNumbers }) {
  return (
    <>
      <button onClick={minusNumbers}>Minus -</button>
    </>
  );
}

function ResetBtn({ resetNumbers }) {
  return (
    <>
      <button onClick={resetNumbers}>Reset</button>
    </>
  );
}
