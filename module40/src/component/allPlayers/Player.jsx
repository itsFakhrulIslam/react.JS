const Player = ({ onPlayer }) => {
  //   console.log(onPlayer);

  return (
    <>
      <div>
        {onPlayer.map((player, index) => (
          <p key={index}>{player.name}</p>
        ))}
      </div>
    </>
  );
};

export default Player;
