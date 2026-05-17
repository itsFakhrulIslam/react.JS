import React, { use } from "react";

export default function Photos({ fetchPhotos }) {
  // console.log(fetchPhotos);

  const dataFetched = use(fetchPhotos);
  // console.log(dataFetched);

  return (
    <div
      style={{
        marginTop: "30px",
        border: "2px dotted yellow",
        borderRadius: "10px",
        padding: "40px",
      }}
    >
      <h1>Show All Photos</h1>
      <p>Total Photos: {dataFetched.length} </p>
    </div>
  );
}
