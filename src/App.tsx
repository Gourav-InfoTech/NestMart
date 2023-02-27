import React from "react";
import "./App.css";
import Appbar from "./Components/Appbar";
import Footer from "./Components/footer/Footer";
import HomeContainer from "./container/HomeContainer";
import Navbar from "./Components/Navbar";
import ShopByCategory from "./Components/ShopByCategory";

const App = () => {
  return (
    <>
      <Appbar />
      <div className="navv">
        <Navbar />
      </div>
      <HomeContainer />
      <ShopByCategory />
      <Footer />
    </>
  );
};

export default App;
