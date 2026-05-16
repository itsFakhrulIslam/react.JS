import React, { useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0);

  function single_handle() {
    const newRuns = runs + 1; //^ why cost / not let?
    setRuns(newRuns);
  }
  function double_handle() {
    const newRuns = runs + 2;
    setRuns(newRuns);
  }
  function four_handle() {
    const newRuns = runs + 4;
    setRuns(newRuns);
  }
  function six_handle() {
    const newRuns = runs + 6;
    setRuns(newRuns);
  }
  function out_handle() {
    setRuns(0);
  }

  return (
    <div
      style={{
        border: "2px solid yellow",
        padding: "20px",
      }}
    >
      <h2>Name: Bangla Batsman</h2>
      <h1>Score: {runs} </h1>

      <div
        style={{
          display: "block",
        }}
      >
        <button onClick={single_handle}>single</button>
        <button onClick={double_handle}>double</button>
        <button onClick={four_handle}>four</button>
        <button onClick={six_handle}>six</button>
        <button onClick={out_handle}>out</button>
      </div>
    </div>
  );
}
