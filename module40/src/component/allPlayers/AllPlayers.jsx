import { use } from "react";
import Player from "./Player";

const AllPlayers = ({ onPromiseData }) => {
  //   console.log(onPromiseData);

  const allPlayersData = use(onPromiseData);
  // console.log(allPlayersData);

  return (
    <div className="max-w-300 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Player onPlayer={allPlayersData} />
    </div>
  );
};

export default AllPlayers;
