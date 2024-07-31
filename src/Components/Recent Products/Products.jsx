import React, { useState } from "react";
import AddtoCart from "../../assets/Addtocart.png";
import wishList from "../../assets/wishlist.png";
import ProducuData from "../../data/ProducuData";
const Products = () => {
  const [hoverItemId, setHoverItemId] = useState(null);
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 sm:px-20">
      <h1 className="half-border-bottom relative pb-1 pt-4 text-2xl font-bold text-white">
        Our Latest Products
      </h1>
      <div className="grid gap-5 px-10 py-4 text-white sm:grid-cols-2 md:px-0 lg:grid-cols-4">
        {ProducuData.map((elem) => {
          return (
            <div
              className="relative max-h-80 w-60 cursor-pointer rounded-md border hover:scale-[1.01]"
              key={elem.id}
              onMouseEnter={() => setHoverItemId(elem.id)}
              onMouseLeave={() => setHoverItemId(null)}
            >
              <div className="flex h-48 items-center justify-center bg-[#F6F6F6]">
                <img src={elem.image} alt="" className="h-full object-cover" />
              </div>
              <div className="px-3 py-2">
                <h1 className="text-md line-clamp-2">{elem.name}</h1>
                <p className="text-2xl font-semibold text-blue-500">
                  Rs.{" "}
                  {Math.floor(elem.price - (elem.price * elem.discount) / 100)}
                </p>
                <div className="flex gap-3">
                  <p className="text-gray-500 line-through">Rs. {elem.price}</p>
                  <p> {elem.discount}%</p>
                </div>
                <div
                  className={`absolute right-1 top-1 flex flex-col gap-2 ${hoverItemId === elem.id ? "block" : "hidden"}`}
                >
                  <img src={AddtoCart} alt="" className="w-[70%]" />
                  <img src={wishList} alt="" className="w-[70%]" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
