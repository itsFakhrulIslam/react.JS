import userLogo from "../../assets/user.png";
import flagLogo from "../../assets/flags.png";

const Player = ({ onPlayer }) => {
  // console.log(onPlayer);

  // const {
  //   name,
  //   country,
  //   playing_role,
  //   rating,
  //   bat_side,
  //   bowl_side,
  //   price,
  //   image_url,
  // } = onPlayer;

  return (
    <>
      {onPlayer.map((player, index) => (
        <div
          className="card bg-white text-black w-96 shadow-2xl p-6"
          key={index}
        >
          <figure>
            <img
              className="rounded-lg"
              src={player.image_url}
              alt={player.name}
            />
          </figure>

          <div className="border-b border-gray-300 py-2">
            <div className="flex items-center">
              <img className="w-10 -ml-2" src={userLogo} alt="user" />
              <h2 className="card-title">{player.name}</h2>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img className="w-7 -ml-1" src={flagLogo} alt="flagLogo" />
                <h3>{player.country}</h3>
              </div>

              <button className="btn">{player.playing_role}</button>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between font-bold">
              <span>ratings:</span>
              <span>{player.rating}</span>
            </div>

            <div className="flex justify-between">
              <span className=" font-bold">{player.bat_side}</span>
              <span>{player.bowl_side}</span>
            </div>

            <div className="flex items-center justify-between">
              <p className="font-bold">Price: {player.price} Core</p>
              <button className="btn">Choose Player</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Player;
