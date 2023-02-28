import React from "react";
import { HiArrowSmRight } from "react-icons/hi";
import styled from "styled-components";

const DodBanner = ({ data }: any) => {
  return (
    <>
      <DodBannerDiv className="Dod_Banner flex flex-col justify-between" image={data.bg}>
        <h1>{data.heading}</h1>
        <button className="inline-flex flex-grow-0 hover:bg-[#FDC040] hover:gap-2  transition-all duration-500 bg-[#3bb77e]">
          Shop Now
          <span className="inline-block">
            <HiArrowSmRight />
          </span>
        </button>
      </DodBannerDiv>
    </>
  );
};

export default DodBanner;

const DodBannerDiv = styled.div<any>`
  border-radius: 10px;
  background-image: ${(props) => `url(${props.image})`};
  background-position: center;
  background-size: cover;
  padding: 30px 50px;
  flex: auto;

  h1 {
    color: #253d4e;
    font-family: "Quicksand";
    font-size: 22px;
    font-weight: 700;
    line-height: 28.8px;
    margin-bottom: 15px;
  }

  button {
    padding: 7px 8px 7px 12px;
    font-family: "Quicksand";
    font-size: 13px;
    font-weight: 700;
    border-radius: 5px;
    color: whitesmoke;
  }
`;
