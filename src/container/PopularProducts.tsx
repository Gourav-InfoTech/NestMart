import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PopularItemCard from "../Components/PopularItemCard";
import { Product_Api } from "../Utils/Api";

const PopularProducts = () => {
  const [item, setItem] = useState([]);

  const ProductApi = async () => {
    const data = await fetch(Product_Api);
    const res = await data.json();
    setItem(res);
  };

  useEffect(() => {
    ProductApi();
  }, []);

  // console.log(item);

  return (
    <>
      <PopularProductsDiv className="section_padding">
        <div className="flex pb-[30px] justify-between items-center ">
          <div className="Popular_P_Title">
            <h1>Popular Products</h1>
          </div>
          <div>
            <ul className="Popular_P_Menu flex gap-4">
              <li>All</li>
              <li>Milk & Dairies</li>
              <li>Coffee & Teas</li>
              <li>Pet Foods</li>
              <li>Vegetables</li>
              <li>Fruits</li>
              <li>Meats</li>
            </ul>
          </div>
        </div>

        <div className="Popular_Items grid grid-cols-5 gap-5">
          {item.map((itemData, indx) => {
            return <PopularItemCard key={indx} data={itemData} />;
          })}
        </div>
      </PopularProductsDiv>
    </>
  );
};

export default PopularProducts;

const PopularProductsDiv = styled.div`
  .Popular_P_Title h1 {
    color: #253d4e;
    font-family: "Quicksand", sans-serif;
    font-size: 30px;
    font-weight: bold;
  }

  .Popular_P_Menu li {
    cursor: pointer;
    color: #253d4e;
    font-family: "Quicksand", sans-serif;
    font-size: 14px;
    font-weight: bold;
  }
`;
