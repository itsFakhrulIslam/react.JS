import { useState } from "react";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);

  const handleAddProducts = (newProduct) => {
    console.log(newProduct);

    const newProducts = [...products, newProduct];
    setProducts(newProducts);
  };

  return (
    <div>
      <ProductForm handleAddProducts={handleAddProducts} />
      <ProductTable products={products} />
    </div>
  );
};

export default ProductManagement;
