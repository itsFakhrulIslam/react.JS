import React, { use } from "react";

export default function Posts({ fetchPosts }) {
  // console.log(fetchPosts);

  const dataFetched = use(fetchPosts);
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
      <h1>Show All Posts</h1>
      <p>Total Posts: {dataFetched.length} </p>
    </div>
  );
}
