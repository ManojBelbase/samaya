import React from "react";
import BrandImg from "../../assets/heroimage.png";
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
      "Rolex smartwatches excel in precision and elegance, offering unparalleled luxury combined with advanced health and fitness features.",
  },
  {
    img: "https://images.pexels.com/photos/24509606/pexels-photo-24509606/free-photo-of-close-up-of-a-rolex-in-a-womans-hands.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Samsung",
    description:
      "Samsung smartwatches excel in precision and elegance, offering unparalleled luxury combined with advanced health and fitness features.",
  },
  {
    img: "https://m.media-amazon.com/images/I/716+0qoy3HL._AC_UF894,1000_QL80_.jpg",
    name: "Garmin",
    description:
      "Garmin smartwatches excel in precision and elegance, offering unparalleled luxury combined with advanced health and fitness features.",
  },
];
const Brands = () => {
  return (
    <div className="grid gap-3 bg-gradient-to-t from-black to-gray-900 px-8 py-6 text-white sm:grid-cols-2 sm:px-20 md:h-screen md:grid-cols-3">
      {BrandData.map((elme) => {
        return (
          <div
            className="grid max-h-64 max-w-80 cursor-pointer grid-cols-2 place-items-center gap-4 rounded-md border bg-gray-900 px-3 py-5"
            key={elme.name}
          >
            <div className="h-40 overflow-hidden">
              <img
                src={elme.img}
                alt=""
                className="h-full w-full rounded-md object-cover"
              />
            </div>
            <div className="flex flex-col justify-center gap-3">
              <h1 className="text-2xl font-bold">{elme.name}</h1>
              <p className="line-clamp-5 text-sm font-thin text-gray-400">
                {elme.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Brands;
