import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import search from "../../assets/Search.png";
import Person from "../../assets/Person.png";
import ShoppingCart from "../../assets/ShoppingCart.png";
import { VscThreeBars } from "react-icons/vsc";

const Header = () => {
  const [ishovered, setIsHovered] = useState(false);
  return (
    <nav className="flex items-center justify-between bg-black px-4 py-3 text-white md:px-20">
      <div className="text-2xl font-medium sm:font-semibold">Samaya.</div>
      <ul className="hidden gap-4 font-normal text-gray-400 sm:flex md:gap-10 md:font-medium">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li
          className="relative flex items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <NavLink to={"/brands"}>Brands</NavLink>
          <RiArrowDropDownLine className="cursor-pointer text-2xl" />
          <ul
            className={`absolute left-3 top-7 rounded-md bg-black px-3 py-3 shadow shadow-white ${ishovered ? "block" : "hidden"}`}
          >
            <li className="cursor-pointer">Apple</li>
            <li className="cursor-pointer">Samsung</li>
            <li className="cursor-pointer">Xiaomi</li>
          </ul>
        </li>
        <li>
          <NavLink to={"/products"}>Products</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
      </ul>
      <div className="hidden gap-3 sm:flex">
        <img src={search} alt="search" className="cursor-pointer" />
        <img src={Person} alt="person" className="cursor-pointer" />
        <img src={ShoppingCart} alt="shopping" className="cursor-pointer" />
      </div>
      <div className="sm:hidden">
        <VscThreeBars />
      </div>
    </nav>
  );
};

export default Header;
