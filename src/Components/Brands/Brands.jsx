import React from "react";

const BrandData = [
  {
    img: "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Apple",
    description:
      "Apple is one of the most famous smart watches providing company.",
  },
  {
    img: "https://images.pexels.com/photos/4471957/pexels-photo-4471957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Xiaomi",
    description: "Xiaomi smart watches are produced by MI company.",
  },
  {
    img: "https://images.pexels.com/photos/4471957/pexels-photo-4471957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "FitBit",
    description:
      "FitBit smart watches are best for there health and fitness features.",
  },
  {
    img: "https://images.pexels.com/photos/24509606/pexels-photo-24509606/free-photo-of-close-up-of-a-rolex-in-a-womans-hands.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Rolex",
    description:
      "Rolex smart watches excel in precision and elegance, offering unparalleled luxury combined with advanced health and fitness features.",
  },
  {
    img: "https://images.pexels.com/photos/24509606/pexels-photo-24509606/free-photo-of-close-up-of-a-rolex-in-a-womans-hands.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Samsung",
    description:
      "Samsung smart watches excel in precision and elegance, offering unparalleled luxury combined with advanced health and fitness features.",
  },
  {
    img: "https://m.media-amazon.com/images/I/716+0qoy3HL._AC_UF894,1000_QL80_.jpg",
    name: "Garmin",
    description:
      "Garmin smart watches excel in precision and elegance, offering unparalleled luxury combined with advanced health and fitness features.",
  },
];
const Brands = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 px-4 text-white sm:px-20 md:px-8">
      <h1 className="half-border-bottom relative pb-1 pt-4 text-2xl font-bold text-white">
        Brands
      </h1>
      <div className="grid grid-cols-2 gap-1 py-3 md:h-screen md:grid-cols-3 md:gap-3">
        {BrandData.map((elme) => {
          return (
            <div
              className="grid max-h-64 max-w-80 cursor-pointer grid-cols-2 place-items-center gap-1 rounded-md border bg-gray-900 px-1 py-5 md:gap-4 md:px-3"
              key={elme.name}
            >
              <div className="h-32 overflow-hidden md:h-40">
                <img
                  src={elme.img}
                  alt=""
                  className="h-full w-full rounded-md object-cover"
                />
              </div>
              <div className="flex flex-col justify-center gap-3 px-1">
                <h1 className="overflow-hidden text-base font-bold md:text-2xl">
                  {elme.name}
                </h1>
                <p className="line-clamp-4 text-xs font-thin text-gray-400 md:line-clamp-5 md:text-sm">
                  {elme.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Brands;
