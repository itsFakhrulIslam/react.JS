import React from "react";
import { use } from "react";

export default function Comments({ fetchComments }) {
  // console.log(fetchComments);

  const dataFetched = use(fetchComments);
  // console.log(dataFetched[1].body);

  return (
    <div
      style={{
        marginTop: "30px",
        border: "2px dotted yellow",
        borderRadius: "10px",
        padding: "40px",
      }}
    >
      <h1>Show All Comments</h1>
      <p>Total Comments: {dataFetched.length} </p>
    </div>
  );
}
