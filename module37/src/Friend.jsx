import React from "react";
import { use } from "react";
import SingleFriend from "./SingleFriend";

export default function Friend({ friendsPromise }) {
  //   console.log(friendsPromise);

  const friendsPromiseData = use(friendsPromise);
  //   console.log(friendsPromiseData);

  return (
    <div
      style={{
        marginTop: "30px",
        border: "2px dotted yellow",
        borderRadius: "10px",
        padding: "40px",
      }}
    >
      <h1>hello Friend</h1>
      <h1>Total Friends: {friendsPromiseData.length}</h1>
      <div>
        {friendsPromiseData.map((singleFriend) => (
          <SingleFriend key={singleFriend.id} singleFriend={singleFriend} />
        ))}
      </div>
    </div>
  );
}
