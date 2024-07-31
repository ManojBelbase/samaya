import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import search from "../../assets/Search.png";
import Person from "../../assets/Person.png";
import ShoppingCart from "../../assets/ShoppingCart.png";
import { VscThreeBars } from "react-icons/vsc";
const Header = () => {
  const [ishovered, setIsHovered] = useState(false);
  // it for contact us page
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="h-18 flex items-center justify-between bg-black px-4 py-2 text-white md:px-20">
      <div className="flex items-center gap-2 text-2xl font-medium sm:font-semibold">
        <video
          src="https://i.gifer.com/152H.mp4"
          autoPlay
          muted
          loop
          className="h-14 rounded-full border border-white object-cover"
        />
        <p>Samaya.</p>
      </div>
      <ul className="hidden gap-4 font-normal text-gray-400 sm:flex md:gap-10 md:font-medium">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "border-b-2 border-gray-400" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li
          className="relative flex items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <NavLink
            to={"/brands"}
            className={({ isActive }) =>
              isActive ? "border-b-2 border-gray-400" : ""
            }
          >
            Brands
          </NavLink>
          <RiArrowDropDownLine className="cursor-pointer text-2xl" />
          <ul
            className={`absolute left-3 top-7 rounded-md bg-black px-3 py-3 shadow shadow-white ${ishovered ? "block" : "hidden"}`}
          >
            <li className="cursor-pointer">Apple</li>
            <li className="cursor-pointer">Samsung</li>
            <li className="cursor-pointer">Xiaomi</li>
            <li className="cursor-pointer">Rolex</li>
          </ul>
        </li>
        <li>
          <NavLink
            to={"/products"}
            className={({ isActive }) =>
              isActive ? "border-b-2 border-gray-400" : ""
            }
          >
            Products
          </NavLink>
        </li>
        <li onClick={() => setIsOpen(true)}>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              isActive ? "border-b-2 border-gray-400" : ""
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive ? "border-b-2 border-gray-400" : ""
            }
          >
            About
          </NavLink>
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
