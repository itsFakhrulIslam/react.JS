import image_url from "../../assets/hero.png";

const Player = ({ onPlayer }) => {
  //   console.log(onPlayer);

  const { name, bat_side, bowl_side, country, price } = onPlayer;

  return (
    <>
      <div>
        {onPlayer.map((player, index) => (
          <div key={index} className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img src={image_url} alt={`players ${name}`} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <p>Batting Side: {bat_side}</p>
              <p>Bowling Side: {bowl_side}</p>
              <p>Country: {country}</p>
              <p>Price: {price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Player;
