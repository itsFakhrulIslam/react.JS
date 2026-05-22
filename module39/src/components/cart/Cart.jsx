import "./cart.css";

const Cart = ({ buyBottles, removeBottleHandler }) => {
  console.log(buyBottles);

  return (
    <div className="pimgContainer">
      {buyBottles.map((bottle) => (
        <div className="imgContainer" key={bottle.id}>
          <img src={bottle.img} alt={bottle.alt} />
          <button onClick={() => removeBottleHandler(bottle.id)}>❌</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
