import React from 'react'
import styled from 'styled-components';
import TopProductCard from '../Components/TopProductCard';

const TopProducts = () => {
  return (
    <TopProductsDiv className='flex common_width section_padding'>
        <TopProductCard title={"Top Selling"} />
        <TopProductCard title={"Trending Products"} />
        <TopProductCard title={"Recently added"} />
        <TopProductCard title={"Top Rated"} />
    </TopProductsDiv>
  )
}

export default TopProducts;

const TopProductsDiv = styled.div`

`

