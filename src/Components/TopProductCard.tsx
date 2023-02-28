import React from "react";
import styled from "styled-components";
import TopItem from "./TopItem";

const TopProductCard = ({title}: any) => {
  return (
    <Box>
      <h1 className="box_title mb-[40px] pb-3">{title}  </h1>
      <div>
        <TopItem />
        <TopItem />
        <TopItem />
      </div>
    </Box>
  );
};

export default TopProductCard;

const Box = styled.div`
    border-radius: 15px;
    padding: 24px 28px;
    margin-bottom: 24px;
    
    .box_title{
    position: relative;
    color: #253D4E;
    font-family: 'Quicksand', sans-serif;
    font-size: 23px;
    font-weight: bold;
    border-bottom: 1px solid #ececec;

    &::after {
    content: "";
    width: 80px;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #BCE3C9;
}

}

`
