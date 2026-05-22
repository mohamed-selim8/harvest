import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { Categ } from "./components/Catagories/Categ";
import Values from "./components/Values/Values";
import MyCart from "./components/Prouducts/products";
import Discount from "./components/Discount/Discount";
import AllProcess from "./components/Our_Process/AllProcess";
import Footer from "./components/Footer/Footer";
import Testimonial from "./components/Testimonial/Testimonial";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Categ />
      <Values />
      <MyCart />
      <Discount />
      <AllProcess />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
