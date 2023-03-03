import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TopProductCard from "../Components/TopProductCard";
import { Product_Api } from "../Utils/Api";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const topItemVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  hidden: { opacity: 0, y: 100 },
};

const TopProducts = () => {
  const [topItems, setTopItems] = useState([]);
  const [electronics, setElectronics] = useState([]);
  const [women, setWomen] = useState([]);
  const [men, setMen] = useState([]);

  const controls = useAnimation();
  const [ref, inView] = useInView();

  let oldScrollY = window.scrollY;
  let targetScrollY = window.scrollY;

  window.onscroll = function (e) {
    if (oldScrollY < window.scrollY && inView) {
      controls.start("visible");
      targetScrollY = window.scrollY;
    } else if (oldScrollY > window.scrollY) {
      controls.start("visible");
    } else if (targetScrollY > window.scrollY && !inView) {
      controls.start("hidden");
    }
    oldScrollY = window.scrollY;
  };

  const topItemsApi = async () => {
    const data = await fetch(Product_Api + "/products");
    const res = await data.json();
    setTopItems(res);
  };

  useEffect(() => {
    topItemsApi();
  }, []);

  // useEffect(() => {
  //   console.log(topItems);
  // }, [topItems]);

  useEffect(() => {
    setElectronics(topItems.filter((el: any) => el.category === "electronics"));
    setWomen(topItems.filter((el: any) => el.category === "women's clothing"));
    setMen(topItems.filter((el: any) => el.category === "men's clothing"));
  }, [topItems]);

  return (
    <TopProductsDiv
      ref={ref}
      animate={controls}
      variants={topItemVariant}
      initial="hidden"
      className="flex common_width section_padding"
    >
      <TopProductCard title={"Top Selling"} data={electronics} />
      <TopProductCard title={"Trending Products"} data={women} />
      <TopProductCard title={"Recently added"} data={men} />
      {/* <TopProductCard title={"Top Rated"} data={filteredData} /> */}
    </TopProductsDiv>
  );
};

export default TopProducts;

const TopProductsDiv = styled(motion.div)``;
