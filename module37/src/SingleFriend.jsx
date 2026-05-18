import React from "react";

export default function SingleFriend({ singleFriend }) {
//   console.log(singleFriend);
//   console.log(singleFriend.name);
//   console.log(singleFriend["company"].name);
//   console.log(singleFriend['address'].city);

  return (
    <div
      style={{
        marginTop: "30px",
        border: "2px dotted yellow",
        borderRadius: "10px",
        padding: "40px",
        textAlign: "left",
      }}
    >
      <p>Name: {singleFriend.name} </p>
      <p>Company Name: {singleFriend["company"].name} </p>
      <p>city: {singleFriend['address'].city} </p>
    </div>
  );
}
