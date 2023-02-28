import React from "react";
import styled from "styled-components";

const TopItem = () => {
  return (
    <TopItemDiv>
      <div className="img">
        <img src="Images/mangojuice.jpg" alt="" />
      </div>
      <div className="dod_item_detail mx-5 bg-white rounded-2xl ">
              <div>
                <h2 className="pb-2 text-[15px] font-[Quicksand] font-bold text-[#253d4e] leading-5">
                Nestle Original Coffee-Mate Coffee Creamer
                </h2>
                <p className=" text-[#adadad] text-sm">⭐⭐⭐⭐⭐ (5)</p>
              </div>

              <div className="price_&">
                <p className="text-[#3bb77e] font-bold font-[Quicksand]">
                  $32.25
                </p>
              </div>
          </div>
    </TopItemDiv>
  );
};

export default TopItem;

const TopItemDiv = styled.div`
  display: flex;
    justify-items: center;
  gap: 5px;

  margin-bottom: 20px;

  .img{
    width: 50%;
  }

  .iteminfo h1 {
    color: #3bb77e;
    font-family: "Quicksand";
    font-size: 20px;
    font-weight: 700;
  }

  .iteminfo p:last-of-type {
    font-size: 10px;
  }
  .iteminfo p:first-of-type {
    color: #a7a7a7;
    font-family: "lato";
  }
`;
