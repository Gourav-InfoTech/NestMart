import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TopProductCard from "../Components/TopProductCard";
import { Product_Api } from "../Utils/Api";

const TopProducts = () => {
  const [topItems, setTopItems] = useState([]);
  const [electronics, setElectronics] = useState([]);
  const [women, setWomen] = useState([])
  const [men, setMen] = useState([])  


  const topItemsApi = async () => {
    const data = await fetch(Product_Api+"/products");
    const res = await data.json();
    setTopItems(res);
  };


  useEffect(() => {
    topItemsApi();
  }, []);

  useEffect(()=>{
    console.log(topItems);
  },[topItems])
  

  useEffect(() => {
    setElectronics(topItems.filter((el: any) => el.category === "electronics"));
    setWomen(topItems.filter((el: any) => el.category === "women's clothing"));
    setMen(topItems.filter((el: any) => el.category === "men's clothing"));

  }, [topItems]);

  return (
    <TopProductsDiv className="flex common_width section_padding">
      <TopProductCard title={"Top Selling"} data={electronics} />
      <TopProductCard title={"Trending Products"} data={women} />
      <TopProductCard title={"Recently added"} data={men} />
      {/* <TopProductCard title={"Top Rated"} data={filteredData} /> */}
    </TopProductsDiv>
  );
};

export default TopProducts;

const TopProductsDiv = styled.div``;
