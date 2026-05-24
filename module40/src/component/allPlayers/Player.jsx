import image_url from "../../assets/hero.png"

const Player = ({ onPlayer }) => {
  //   console.log(onPlayer);

  const { name, bat_side, bowl_side, country, image_urls } = onPlayer;

  return (
    <>
      <div>
        {onPlayer.map((player, index) => (
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img src={image_url} alt={`players ${name}`} />
            </figure>
            <div className="card-body">
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Player;
