import React from "react";
import styled from "styled-components";
import HomeContent from "../Components/HomeContent";
import Sidebar from "../Components/sidebar/Sidebar";

const HomeContainer = () => {
  return (
    <TopContainer>
      <Sidebar />
      <HomeContent />
    </TopContainer>
  );
};

export default HomeContainer;

const TopContainer = styled.div`
  display: flex;
  max-width: 1440px;
  margin: auto;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
`;
