import { useState } from "react";

const ProductForm = ({ handleAddProducts }) => {
  const [error, setError] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.value);

    const name = e.target.productName.value;
    const price = e.target.productPrice.value;
    const quantity = e.target.productQuantity.value;
    // console.log(name, price, quantity);

    // feild validation here
    if (name.length === 0 || name === "") {
      setError("please provide product name");
      return;
    } else if (price.length === 0 || price < 0) {
      setError("please provide product positive price");
      return;
    } else if (quantity.length === 0 || quantity < 0) {
      setError("please provide product positive quantity");
      return;
    } else {
      setError("");
    }

    const newProduct = {
      name,
      price,
      quantity,
    };
    // console.log(newProducts);

    handleAddProducts(newProduct);
  };

  return (
    <div>
      <h2>Products Add to Here.</h2>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="productName" placeholder="products name" />
        <br />
        <input type="text" name="productPrice" placeholder="products price" />
        <br />
        <input
          type="text"
          name="productQuantity"
          placeholder="products quantity"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p>
        <small style={{ color: "red" }}>{error}</small>
      </p>
    </div>
  );
};

export default ProductForm;
