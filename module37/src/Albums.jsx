import React, { use } from "react";

export default function Albums({ fetchAlbums }) {
  // console.log(fetchAlbums);

  const dataFetched = use(fetchAlbums);
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
      <h1>Show All Albums</h1>
      <p>Total Albums: {dataFetched.length} </p>
    </div>
  );
}
