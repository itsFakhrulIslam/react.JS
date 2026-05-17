import React, { use } from "react";

export default function Todos({ fetchTodosData }) {
//   console.log(fetchTodosData);

  const dataFetched = use(fetchTodosData);
//   console.log(dataFetched);

  return (
    <div
      style={{
        marginTop: "30px",
        border: "2px dotted yellow",
        borderRadius: "10px",
        padding: "40px",
      }}
    >
      <h1>Show All Todos</h1>
      <p>Total Todos: {dataFetched.length} </p>
    </div>
  );
}
