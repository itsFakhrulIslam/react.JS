import { use } from "react";
import Player from "./Player";

const AllPlayers = ({ onPromiseData }) => {
  //   console.log(onPromiseData);

  const allPlayersData = use(onPromiseData);
  console.log(allPlayersData);

  return (
    <div className="max-w-300 mx-auto">
      <Player onPlayer={allPlayersData} />
    </div>
  );
};

export default AllPlayers;
