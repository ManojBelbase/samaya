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
    name: "Garmin Venu 3",
    description:
      "The Garmin Venu 3 provides advanced health and fitness tracking, with a beautiful AMOLED display and long battery life.",
    brand: "Garmin",
    images: [
      "https://plus.unsplash.com/premium_photo-1673125287084-e90996bad505?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
    ],
    price: "399",
    discount: 20,
    stockquantity: 20,
    reviews: [
      {
        username: "Sanjay Rai",
        rating: 4.7,
        message: "Amazing display and features!",
      },
    ],
  },
  {
    id: 5,
    quantity: 12,
    image:
      "https://images.pexels.com/photos/4379286/pexels-photo-4379286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Amazfit GTS 4 black platinium",
    description:
      "Amazfit GTS 4 comes with a sleek design, comprehensive health monitoring, and a 1.75-inch AMOLED display.",
    brand: "Amazfit",
    images: [
      "https://plus.unsplash.com/premium_photo-1673125287084-e90996bad505?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
    ],
    price: "199",
    discount: 25,
    stockquantity: 18,
    reviews: [
      {
        username: "Poonam Sharma",
        rating: 4.4,
        message: "Good smartwatch for the price.",
      },
    ],
  },
  {
    id: 6,
    quantity: 7,
    image:
      "https://media.istockphoto.com/id/1486661938/photo/man-at-the-stadium-checks-the-number-of-calories-burned-in-his-smartwatch-daily-exercise-in.jpg?s=1024x1024&w=is&k=20&c=24g00PaEkVxi59zdgkIC1NzFN-RUue1JdHCClVqCKv0=",
    name: "Suunto 7",
    description:
      "Suunto 7 combines sports and smart features with built-in GPS, heart rate monitoring, and a rugged design.",
    brand: "Suunto",
    images: [
      "https://plus.unsplash.com/premium_photo-1673125287084-e90996bad505?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
    ],
    price: "349",
    discount: 12,
    stockquantity: 22,
    reviews: [
      {
        username: "Anil Gupta",
        rating: 4.3,
        message: "Durable and feature-packed.",
      },
    ],
  },
  {
    id: 7,
    quantity: 9,
    image:
      "https://images.pexels.com/photos/4379290/pexels-photo-4379290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Withings ScanWatch",
    description:
      "Withings ScanWatch offers medical-grade health tracking with ECG, oximeter, and a sleek design.",
    brand: "Withings",
    images: [
      "https://plus.unsplash.com/premium_photo-1673125287084-e90996bad505?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
    ],
    price: "299",
    discount: 10,
    stockquantity: 15,
    reviews: [
      {
        username: "Amit Sharma",
        rating: 4.6,
        message: "Impressive health tracking features.",
      },
    ],
  },
  {
    id: 8,
    quantity: 6,
    image:
      "https://media.istockphoto.com/id/1380063784/photo/smart-watch-close-up-on-a-white-background-3d-render.jpg?s=1024x1024&w=is&k=20&c=FSkfozq49ipd7nUZFCwgL0dcENTJKVPCJP8LFWY6GIw=",
    name: "TicWatch Pro 3 Ultra",
    description:
      "TicWatch Pro 3 Ultra provides extended battery life, dual-layer display, and advanced health tracking.",
    brand: "TicWatch",
    images: [
      "https://plus.unsplash.com/premium_photo-1673125287084-e90996bad505?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
    ],
    price: "329",
    discount: 18,
    stockquantity: 12,
    reviews: [
      {
        username: "Bikash Rai",
        rating: 4.1,
        message: "Great battery life and performance.",
      },
    ],
  },
  {
    id: 9,
    quantity: 11,
    image:
      "https://images.pexels.com/photos/2861929/pexels-photo-2861929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Huawei Watch GT 3",
    description:
      "Huawei Watch GT 3 features a stylish design, accurate fitness tracking, and long battery life.",
    brand: "Huawei",
    images: [
      "https://plus.unsplash.com/premium_photo-1673125287084-e90996bad505?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
    ],
    price: "269",
    discount: 22,
    stockquantity: 14,
    reviews: [
      {
        username: "Nisha Shah",
        rating: 4.2,
        message: "Excellent value with many features.",
      },
    ],
  },
  {
    id: 10,
    quantity: 4,
    image:
      "https://images.pexels.com/photos/4498478/pexels-photo-4498478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Mobvoi TicWatch E3",
    description:
      "The TicWatch E3 offers a clean design, great performance, and a range of fitness tracking features at an affordable price.",
    brand: "Mobvoi",
    images: [
      "https://plus.unsplash.com/premium_photo-1673125287084-e90996bad505?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
    ],
    price: "199",
    discount: 30,
    stockquantity: 10,
    reviews: [
      {
        username: "Rohit Joshi",
        rating: 4.0,
        message: "Affordable and feature-rich.",
      },
    ],
  },
];
export default ProductData;
