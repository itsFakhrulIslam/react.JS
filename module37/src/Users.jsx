import React, { use } from "react";

export default function Users({ fetchUsers }) {
    console.log(fetchUsers);

  const dataFetched = use(fetchUsers);

  return (
    <div
      style={{
        marginTop: "30px",
        border: "2px dotted yellow",
        borderRadius: "10px",
        padding: "40px",
      }}
    >
      <h1>Show All Users</h1>
      <p>Total Users:{dataFetched.length} </p>
    </div>
  );
}
