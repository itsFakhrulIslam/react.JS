import { use } from "react";

const AllPlayers = ({ onPromiseData }) => {
  //   console.log(onPromiseData);

  const allPlayersData = use(onPromiseData);

  return (
    <div>
      <p> all players</p>
      {allPlayersData.map((player, index) => (
        <p key={index}>{player.name}</p>
      ))}
    </div>
  );
};

export default AllPlayers;
