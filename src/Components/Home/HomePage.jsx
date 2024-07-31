import React from "react";
import HeroImage from "../../assets/heroimage.png";
import searchIcon from "../../assets/searchIcon.png";

const HomePage = () => {
  return (
    <div className="h-lvh bg-gradient-to-t from-black to-gray-900 px-6 pt-3 text-white md:px-20 md:pt-8">
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 place-items-center gap-4 sm:grid-cols-2">
        <div className="left flex flex-col gap-4 sm:gap-8">
          <h1 className="text-3xl font-extrabold leading-tight sm:text-6xl">
            Discover <br /> Most Suitable <br />
            Watches
          </h1>
          <p className="text-sm text-gray-500 sm:text-xl">
            Find the best, reliable, and cheap smart watches here. We focus on
            product quality. Here you can find smart watches of almost all
            brands. So why are you waiting? Just order now!
          </p>
          <div className="flex min-h-10 items-center justify-between rounded-md bg-white px-3 py-2 sm:px-6">
            <div className="flex items-center gap-4">
              <img src={searchIcon} alt="searchIcon" />
              <input
                type="text"
                placeholder="Search something..."
                className="h-full w-full text-black outline-none"
              />
            </div>

            <button className="rounded-md bg-blue-700 px-4 py-1 font-medium">
              Search
            </button>
          </div>
        </div>
        <div className="right">
          <img src={HeroImage} alt="heroimage" className="w-[80%] sm:w-[90%]" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
