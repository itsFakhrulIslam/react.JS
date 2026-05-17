import React from "react";

export default function User({ passUser }) {
  console.log(passUser);

  return (
    <div
      style={{
        marginTop: "15px",
        border: "2px dashed grey",
        borderRadius: "10px",
        padding: "10px",
        textAlign: "left",
      }}
    >
      <h2>Name: {passUser.name}</h2>
      <p>Username: {passUser.username} </p>
      <p>Email:{passUser.email} </p>
    </div>
  );
}
