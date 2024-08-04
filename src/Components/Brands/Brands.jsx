import React from "react";
import ProductData from "../../data/ProducutData";
import { Link } from "react-router-dom";

const Brands = () => {
  const uniqueBrands = ProductData.reduce((acc, item) => {
    if (!acc.some((el) => el.brand.brandName === item.brand.brandName)) {
      acc.push(item);
    }
    return acc;
  }, []);

  return (
    <div className="h-screen bg-gradient-to-b from-black to-gray-900 px-4 text-white sm:px-20 md:px-20">
      <h1 className="half-border-bottom relative pb-1 pt-4 text-2xl font-bold text-white">
        Brands
      </h1>
      <div className="mt-2 grid grid-cols-2 place-items-center gap-1 gap-y-4 md:grid-cols-3 md:gap-x-2 md:gap-y-5">
        {uniqueBrands.map((elme) => (
          <Link
            to={`/brand/${elme.brand.brandName}`}
            key={elme.id}
            className="w-fit"
          >
            <div
              className="max-w-84 grid max-h-96 grid-cols-2 place-items-center gap-1 rounded-md border bg-gray-900 px-1 py-5 md:gap-4 md:px-3"
              key={elme.name}
            >
              <div className="h-32 overflow-hidden md:h-40">
                <img
                  src={elme.brand.brandImage}
                  alt={elme.name}
                  className="h-full w-full rounded-md object-cover"
                />
              </div>
              <div className="flex flex-col justify-center gap-3 px-1">
                <h1 className="overflow-hidden text-base font-bold md:text-2xl">
                  {elme.brand.brandName}
                </h1>
                <p className="none line-clamp-4 text-xs font-thin text-gray-400 md:line-clamp-5 md:text-sm">
                  {elme.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Brands;
