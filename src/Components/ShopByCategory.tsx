import React from "react";
import styled from "styled-components";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import SbcCard from "./SbcCard";

const ShopByCategory = () => {
  return (
    <>
      {/*-------------------------- Shop By Category--------------- */}
      <SbcDiv className="common_width section_padding flex justify-between">
        <div className="Sbc_title flex items-center">
          <h1>Shop By Category</h1>
          <button className="flex items-center">
            All Categories
            <span className="ml-2">
              <FiChevronRight />
            </span>
          </button>
        </div>
        <div className="SbcButtons">
          <button>
            <FiChevronLeft />
          </button>
          <button>
            <FiChevronRight />
          </button>
        </div>
      </SbcDiv>
      <div className="SbcCategories common_width flex">
        <SbcCard />
        <SbcCard />
        <SbcCard />
        <SbcCard />
        <SbcCard />
        <SbcCard />
      </div>
    </>
  );
};

export default ShopByCategory;

const SbcDiv = styled.div`
  .Sbc_title h1 {
    color: #253d4e;
    font-family: "Quicksand", sans-serif;
    font-size: 27px;
    font-weight: bold;
  }

  .Sbc_title button {
    margin-left: 25px;
    color: #9f9f9f;
    font-size: 14px;
  }

  .SbcButtons button {
    color: grey;
    background-color: #e6e6e6ad;
    border-radius: 50%;
    padding: 10px;
  }
`;
