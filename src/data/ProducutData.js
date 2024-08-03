const ProductData = [
  {
    id: 1,
    quantity: 5,
    image:
      "https://images.pexels.com/photos/1682821/pexels-photo-1682821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Apple Watch Series 8",
    description:
      "The Apple Watch Series 8 offers advanced health features, including ECG, blood oxygen monitoring, and an always-on display.",
    brand: "Apple",
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
    brand: "Samsung",
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
    brand: "Fitbit",
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
    brand: "Rolex",
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
      "https://images.pexels.com/photos/2836891/pexels-photo-2836891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Titan Edge",
    description:
      "The Titan Edge is a slim and elegant watch, offering a minimalist design with a durable build.",
    brand: "Titan",
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
      "https://images.pexels.com/photos/3689530/pexels-photo-3689530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Xiaomi Mi Watch",
    description:
      "The Xiaomi Mi Watch offers a wide range of features, including fitness tracking, heart rate monitoring, and long battery life.",
    brand: "Xiaomi",
    images: [
      "https://plus.unsplash.com/premium_photo-1673125287084-e90996bad505?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
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
    brand: "Apple",
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
    name: "Samsung Galaxy Fit 2",
    description:
      "The Samsung Galaxy Fit 2 is a lightweight and durable fitness tracker, offering advanced health and fitness tracking.",
    brand: "Samsung",
    images: [
      "https://plus.unsplash.com/premium_photo-1673125287084-e90996bad505?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
    ],
    price: "69",
    discount: 12,
    stockquantity: 50,
    reviews: [
      {
        username: "Deepak Joshi",
        rating: 4.0,
        message: "Affordable and reliable fitness tracker.",
      },
    ],
  },
  {
    id: 9,
    quantity: 4,
    image:
      "https://images.pexels.com/photos/2208859/pexels-photo-2208859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Fitbit Charge 5",
    description:
      "The Fitbit Charge 5 offers advanced health metrics, stress management tools, and built-in GPS for an all-in-one fitness experience.",
    brand: "Fitbit",
    images: [
      "https://plus.unsplash.com/premium_photo-1673125287084-e90996bad505?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
    ],
    price: "179",
    discount: 10,
    stockquantity: 30,
    reviews: [
      {
        username: "Kavita Rana",
        rating: 4.7,
        message: "Comprehensive health tracking features.",
      },
    ],
  },
  {
    id: 10,
    quantity: 6,
    image:
      "https://images.pexels.com/photos/1602366/pexels-photo-1602366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Rolex Oyster Perpetual",
    description:
      "The Rolex Oyster Perpetual is a symbol of precision and luxury, known for its elegant design and timeless appeal.",
    brand: "Rolex",
    images: [
      "https://plus.unsplash.com/premium_photo-1673125287084-e90996bad505?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
    ],
    price: "8999",
    discount: 3,
    stockquantity: 10,
    reviews: [
      {
        username: "Vinay Shah",
        rating: 5.0,
        message: "A luxury watch with unmatched quality.",
      },
    ],
  },
  {
    id: 11,
    quantity: 5,
    image:
      "https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Titan Raga",
    description:
      "The Titan Raga is a beautifully crafted watch, designed specifically for women with an elegant and stylish look.",
    brand: "Titan",
    images: [
      "https://plus.unsplash.com/premium_photo-1673125287084-e90996bad505?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
    ],
    price: "249",
    discount: 8,
    stockquantity: 15,
    reviews: [
      {
        username: "Meena Kapoor",
        rating: 4.4,
        message: "Elegant and sophisticated design.",
      },
    ],
  },
  {
    id: 12,
    quantity: 7,
    image:
      "https://images.pexels.com/photos/1293115/pexels-photo-1293115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Xiaomi Amazfit Bip U Pro",
    description:
      "The Xiaomi Amazfit Bip U Pro offers a wide range of fitness tracking features, long battery life, and a lightweight design.",
    brand: "Xiaomi",
    images: [
      "https://plus.unsplash.com/premium_photo-1673125287084-e90996bad505?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
    ],
    price: "59",
    discount: 10,
    stockquantity: 50,
    reviews: [
      {
        username: "Nikhil Verma",
        rating: 4.3,
        message: "Great features at an affordable price.",
      },
    ],
  },
  {
    id: 13,
    quantity: 8,
    image:
      "https://images.pexels.com/photos/191528/pexels-photo-191528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Apple Watch Ultra",
    description:
      "The Apple Watch Ultra offers advanced health and fitness features, a rugged design, and cellular connectivity.",
    brand: "Apple",
    images: [
      "https://plus.unsplash.com/premium_photo-1673125287084-e90996bad505?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
    ],
    price: "799",
    discount: 12,
    stockquantity: 20,
    reviews: [
      {
        username: "Sanjay Kulkarni",
        rating: 4.7,
        message: "A powerful smartwatch with great features.",
      },
    ],
  },
  {
    id: 14,
    quantity: 6,
    image:
      "https://images.pexels.com/photos/315319/pexels-photo-315319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Samsung Galaxy Watch Active 2",
    description:
      "The Samsung Galaxy Watch Active 2 offers advanced fitness tracking, a sleek design, and compatibility with various apps.",
    brand: "Samsung",
    images: [
      "https://plus.unsplash.com/premium_photo-1673125287084-e90996bad505?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
    ],
    price: "249",
    discount: 10,
    stockquantity: 25,
    reviews: [
      {
        username: "Anita Mehra",
        rating: 4.5,
        message: "Excellent fitness tracking and design.",
      },
    ],
  },
  {
    id: 15,
    quantity: 9,
    image:
      "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Fitbit Sense",
    description:
      "The Fitbit Sense is an advanced health smartwatch, offering stress management tools, ECG, and skin temperature monitoring.",
    brand: "Fitbit",
    images: [
      "https://plus.unsplash.com/premium_photo-1673125287084-e90996bad505?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
    ],
    price: "299",
    discount: 10,
    stockquantity: 20,
    reviews: [
      {
        username: "Alok Jain",
        rating: 4.6,
        message: "Comprehensive health tracking and great features.",
      },
    ],
  },
];
export default ProductData;
