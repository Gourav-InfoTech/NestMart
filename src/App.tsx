import React from "react";
import "./App.css";
import Appbar from "./Components/Appbar";
import Navbar from "./Components/Navbar";
import ShopByCategory from "./Components/ShopByCategory";
import Footer from "./Components/footer/Footer";
import HomeContainer from "./container/HomeContainer";
import { BrowserRouter } from "react-router-dom";
import BackToTop from "./Components/BackToTop";
import TopProducts from "./container/TopProducts";

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
        <TopProducts />
        <Footer />
        <BackToTop />
      </BrowserRouter>
    </>
  );
};

export default App;
