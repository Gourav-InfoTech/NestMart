import React from "react";
import "./App.css";
import Appbar from "./Components/Appbar";
import Navbar from "./Components/Navbar";
import ShopByCategory from "./Components/ShopByCategory";
import Footer from "./Components/footer/Footer";
import HomeContainer from "./container/HomeContainer";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Appbar />
        <div className="navv">
          <Navbar />
        </div>
        <HomeContainer />
        <ShopByCategory />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
