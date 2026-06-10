const ProductTable = ({ products }) => {
  console.log(products);

  return (
    <div>
      <h3>products: {products.length} </h3>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Quantity</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
