import React from "react";
import HomePage from "./HomePage";
import Products from "../Recent Products/Products";
import Brands from "../Brands/Brands";

const Index = () => {
  return (
    <div className="">
      <HomePage />
      <Brands />
      <Products />
    </div>
  );
};

export default Index;
