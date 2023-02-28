import React from "react";
import styled from "styled-components";
import HomeContent from "../pages/HomeContent";
import { Routes, Route } from "react-router-dom";
import Detail from "../pages/Detail";
import Sidebar from "../Components/sidebar/Sidebar";

const HomeContainer = () => {
  return (
    <TopContainer>
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
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
