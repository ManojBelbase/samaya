import React from "react";
import { useParams } from "react-router";
import ProductData from "../../data/ProducutData";

const SingleBrandProduct = () => {
  const { brand } = useParams();

  const brandProducts = ProductData.filter(
    (product) => product.brand.brandName === brand,
  );

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 px-4 py-5 text-white sm:px-20 md:px-8">
      <h1 className="half-border-bottom mb-4 text-2xl font-bold text-white">
        {brand} Watches
      </h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        {brandProducts.map((product) => (
          <div className="rounded-md border bg-gray-900 p-3" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="mb-2 h-48 w-full rounded-md object-cover"
            />
            <h2 className="mb-1 text-lg font-semibold text-white">
              {product.name}
            </h2>
            <p className="text-sm text-gray-400">{product.description}</p>
            <p className="mt-2 font-semibold text-white">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleBrandProduct;
