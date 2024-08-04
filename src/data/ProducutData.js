const ProductData = [
  {
    id: 1,
    quantity: 5,
    image:
      "https://images.pexels.com/photos/1682821/pexels-photo-1682821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Apple Watch Series 8",
    description:
      "The Apple Watch Series 8 offers advanced health features, including ECG, blood oxygen monitoring, and an always-on display.",
    brand: {
      brandName: "Apple",
      brandImage:
        "https://cdn.freebiesupply.com/images/thumbs/2x/apple-logo.png",
    },
    images: [
      "https://plus.unsplash.com/premium_photo-1673125287084-e90996bad505?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
    ],
    price: "749",
    discount: 10,
    stockquantity: 30,
    reviews: [
      {
        username: "Hari Prasad",
        rating: 4.5,
        message: "Excellent smartwatch with great features.",
      },
    ],
  },
  {
    id: 2,
    quantity: 3,
    image:
      "https://images.pexels.com/photos/51011/pexels-photo-51011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Samsung Galaxy Watch 6",
    description:
      "The Samsung Galaxy Watch 6 features a sleek design, health monitoring, and compatibility with both Android and iOS devices.",
    brand: {
      brandName: "Samsung",
      brandImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR57gmZpq1uQw9r7H63BPiSgKXu6oDiWccuug&s",
    },
    images: [
      "https://plus.unsplash.com/premium_photo-1673125287084-e90996bad505?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
    ],
    price: "299",
    discount: 15,
    stockquantity: 25,
    reviews: [
      {
        username: "Sita Devi",
        rating: 4.2,
        message: "Great watch with a lot of useful features.",
      },
    ],
  },
  {
    id: 3,
    quantity: 8,
    image:
      "https://images.pexels.com/photos/3161378/pexels-photo-3161378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Fitbit Versa 4",
    description:
      "The Fitbit Versa 4 is designed for fitness enthusiasts with built-in GPS, heart rate monitoring, and over 20 exercise modes.",
    brand: {
      brandName: "Fitbit",
      brandImage:
        "https://www.fitbit.com/global/content/dam/fitbit/global/product-logos/logosoctober2020/OG-image-fitbit-generic.jpg",
    },
    images: [
      "https://plus.unsplash.com/premium_photo-1673125287084-e90996bad505?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
    ],
    price: "229",
    discount: 5,
    stockquantity: 15,
    reviews: [
      {
        username: "Ramesh Kumar",
        rating: 4.0,
        message: "Good value for fitness tracking.",
      },
    ],
  },
  {
    id: 4,
    quantity: 10,
    image:
      "https://images.pexels.com/photos/4471957/pexels-photo-4471957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Rolex Submariner",
    description:
      "The Rolex Submariner is a luxury watch known for its precision and style, featuring a sleek design and exceptional performance.",
    brand: {
      brandName: "Rolex",
      brandImage: "https://logowik.com/content/uploads/images/275_rolex.jpg",
    },
    images: [
      "https://plus.unsplash.com/premium_photo-1673125287084-e90996bad505?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
    ],
    price: "9999",
    discount: 5,
    stockquantity: 5,
    reviews: [
      {
        username: "Rajesh Singh",
        rating: 5.0,
        message: "A timeless classic with unmatched quality.",
      },
    ],
  },
  {
    id: 5,
    quantity: 7,
    image:
      "https://www.titannepal.com/cdn/shop/files/1595SM01_1.jpg?v=1716471130&width=1920",
    name: "Titan Edge",
    description:
      "The Titan Edge is a slim and elegant watch, offering a minimalist design with a durable build.",
    brand: {
      brandName: "Titan",
      brandImage:
        "https://scontent.fbwa8-1.fna.fbcdn.net/v/t39.30808-6/310023824_467819828730639_838807236791370533_n.png?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=kdad3dFHleYQ7kNvgG_ktNm&_nc_ht=scontent.fbwa8-1.fna&oh=00_AYDn3YnxaZs71DfHWb5yLze7B9BJVLUe6sUyaJ3aKecZTw&oe=66B579D4",
    },
    images: [
      "https://plus.unsplash.com/premium_photo-1673125287084-e90996bad505?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
    ],
    price: "199",
    discount: 10,
    stockquantity: 20,
    reviews: [
      {
        username: "Neha Sharma",
        rating: 4.3,
        message: "Sleek and stylish, perfect for formal wear.",
      },
    ],
  },
  {
    id: 6,
    quantity: 9,
    image:
      "https://i02.appmifile.com/mi-com-product/fly-birds/redmi-watch-4/PC/47a1456b2413acd09f40cd2aba373f1f.png?f=webp",
    name: "Xiaomi Mi Watch",
    description:
      "The Xiaomi Mi Watch offers a wide range of features, including fitness tracking, heart rate monitoring, and long battery life.",
    brand: {
      brandName: "Xiaomi",
      brandImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Xiaomi_logo.svg/480px-Xiaomi_logo.svg.png",
    },
    images: [
      "https://i02.appmifile.com/mi-com-product/fly-birds/redmi-watch-4/PC/interactionsPC.png?f=webp",
    ],
    price: "149",
    discount: 15,
    stockquantity: 25,
    reviews: [
      {
        username: "Amit Gupta",
        rating: 4.1,
        message: "Great value for money with many features.",
      },
    ],
  },
  {
    id: 7,
    quantity: 6,
    image:
      "https://images.pexels.com/photos/3229980/pexels-photo-3229980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Apple Watch SE",
    description:
      "The Apple Watch SE combines essential features with a modern design, offering a great balance of functionality and affordability.",
    brand: {
      brandName: "Apple",
      brandImage:
        "https://upload.wikimedia.org/wikipedia/commons/a/a4/Apple_logo_black.svg",
    },
    images: [
      "https://plus.unsplash.com/premium_photo-1673125287084-e90996bad505?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
    ],
    price: "279",
    discount: 8,
    stockquantity: 40,
    reviews: [
      {
        username: "Pooja Mehta",
        rating: 4.5,
        message: "Excellent features at an affordable price.",
      },
    ],
  },
  {
    id: 8,
    quantity: 8,
    image:
      "https://images.pexels.com/photos/1749272/pexels-photo-1749272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Samsung Galaxy Watch Active 2",
    description:
      "The Samsung Galaxy Watch Active 2 offers a sporty design with health tracking features and a bright, clear display.",
    brand: {
      brandName: "Samsung",
      brandImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR57gmZpq1uQw9r7H63BPiSgKXu6oDiWccuug&s",
    },
    images: [
      "https://plus.unsplash.com/premium_photo-1673125287084-e90996bad505?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
    ],
    price: "249",
    discount: 12,
    stockquantity: 18,
    reviews: [
      {
        username: "Sanjay Thakur",
        rating: 4.4,
        message: "A versatile smartwatch with great functionality.",
      },
    ],
  },
  {
    id: 9,
    quantity: 4,
    image:
      "https://images.pexels.com/photos/3682284/pexels-photo-3682284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Fitbit Sense",
    description:
      "The Fitbit Sense offers advanced health features like EDA scans, ECG, and stress management, all in a stylish package.",
    brand: {
      brandName: "Fitbit",
      brandImage:
        "https://www.fitbit.com/global/content/dam/fitbit/global/product-logos/logosoctober2020/OG-image-fitbit-generic.jpg",
    },
    images: [
      "https://plus.unsplash.com/premium_photo-1673125287084-e90996bad505?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
    ],
    price: "299",
    discount: 10,
    stockquantity: 10,
    reviews: [
      {
        username: "Vikram Joshi",
        rating: 4.3,
        message: "Highly recommended for health tracking enthusiasts.",
      },
    ],
  },
  {
    id: 10,
    quantity: 5,
    image:
      "https://images.pexels.com/photos/2366501/pexels-photo-2366501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Rolex Daytona",
    description:
      "The Rolex Daytona is renowned for its precision and iconic design, perfect for both sports and formal occasions.",
    brand: {
      brandName: "Rolex",
      brandImage:
        "https://upload.wikimedia.org/wikipedia/commons/5/53/Rolex_logo.svg",
    },
    images: [
      "https://plus.unsplash.com/premium_photo-1673125287084-e90996bad505?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
    ],
    price: "12500",
    discount: 7,
    stockquantity: 7,
    reviews: [
      {
        username: "Manoj Belbase",
        rating: 5.0,
        message: "An exquisite timepiece with unparalleled quality.",
      },
    ],
  },
];

export default ProductData;
