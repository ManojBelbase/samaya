import React from "react";
import { useParams } from "react-router-dom";
import ProductData from "../../data/ProducuData";

const SingleProduct = () => {
  const { id } = useParams();
  const product = ProductData.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 px-10 py-5 sm:px-20">
      <div className="grid grid-cols-1 gap-4 rounded-lg border px-3 py-5 md:grid-cols-2">
        <div className="imageSection max-h-96 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full transform transition-transform duration-300 ease-in-out hover:scale-150"
          />
        </div>
        <div className="details text-white">
          <h2 className="mb-2 text-4xl font-semibold">{product.name}</h2>
          <p className="mb-2">{product.description}</p>
          <p className="mb-2">Brand: {product.brand}</p>
          <p className="mb-2">Price: ${product.price}</p>
          <p className="mb-2">Discount: {product.discount}%</p>
          <p className="mb-2">Stock Quantity: {product.stockquantity}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
