import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About/About";
import Layout from "./Layout/Layout";
import Brands from "./Components/Brands/Brands";
import Products from "./Components/Recent Products/Products";
import Contact from "./Components/Contact/Contact";
import SingleProduct from "./Components/Recent Products/SingleProduct";
import SingleBrandProduct from "./Components/Brands/SingleBrandProduct";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="brands" element={<Brands />} />
            <Route path="brand/:brand" element={<SingleBrandProduct />} />

            <Route path="products" element={<Products />} />
            <Route path="product/:id" element={<SingleProduct />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
