import "./Bottle.css";

const Bottle = ({ bottle, onBuy }) => {
  //   console.log(bottle);

  const { name, img, price, stock } = bottle;

  return (
    <div className="card">
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>Remaining: {stock}</p>
      <button className="buyButton" onClick={() => onBuy(bottle)}>
        Buy Now
      </button>
    </div>
  );
};

export default Bottle;
