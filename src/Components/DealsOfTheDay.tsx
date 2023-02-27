import React from "react";
import { FiChevronRight } from "react-icons/fi";
import styled from "styled-components";
import DodItem from "./DodItem";

const DealsOfTheDay = () => {
  return (
    <>

    {/* ------------Dod - Deals of the day----------------- */}
      <Dod>
        <div className="Dod_title flex justify-between items-center">
            <h1>Deals Of The Day</h1>
          <button className="flex items-center">
            All Categories
            <span className="ml-2">
              <FiChevronRight />
            </span>
          </button>
        </div>

        <div className="Dod_Item flex gap-7">
            <DodItem />
            <DodItem />
            <DodItem />
            <DodItem />
        </div>
      </Dod>
    </>
  );
};

export default DealsOfTheDay;

const Dod = styled.div`

.Dod_title h1 {
    color: #253d4e;
    font-family: "Quicksand", sans-serif;
    font-size: 27px;
    font-weight: bold;
  }

  .Dod_title button {
    margin-left: 25px;
    color: #9f9f9f;
    font-size: 14px;
  }
`;
