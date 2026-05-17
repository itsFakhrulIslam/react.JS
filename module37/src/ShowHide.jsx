import React, { useState } from "react";

export default function ShowHide() {
  const [sohi, setSohi] = useState(false);

  return (
    <div
      style={{
        marginTop: "30px",
        border: "2px dotted yellow",
        borderRadius: "10px",
        padding: "40px",
      }}
    >
      <button onClick={() => setSohi(!sohi)}>{sohi ? "show" : "hide"}</button>
      {sohi ? <ShowText /> : <HideText />}
    </div>
  );
}

function ShowText() {
  return (
    <>
      <h1>Hello! React Learners!!</h1>
    </>
  );
}

function HideText() {
  return (
    <>
      <h1>Something to Have you Learn??</h1>
    </>
  );
}
