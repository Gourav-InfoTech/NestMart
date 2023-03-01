import React, {useEffect} from "react";
import styled from "styled-components";
import TopItem from "./TopItem";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

  const topItemVariant = {
    visible : { opacity: 1, y: 0, transition : {duration : 1}},
    hidden : { opacity: 0 , y: 100},
  }

const TopProductCard = ({ title, data }: any) => {
const controls = useAnimation();
const [ref, inView] = useInView();

useEffect(()=>{
if(inView){
  controls.start("visible")
}else{
  controls.start("hidden")
}
},[controls,inView])


  return (
    <Box
    ref={ref}
    animate={controls}
    variants={topItemVariant}
    initial="hidden"
    >
      <h1 className="box_title mb-[40px] pb-3">{title} </h1>
      <div>
        {data.slice(0, 3).map((item: any, indx: any) => {
          // console.log(item, "MM");

          return (
            <TopItem key={indx} details={item} />
            // <div>hello</div>
          );
        })}
      </div>
    </Box>
  );
};

export default React.memo(TopProductCard);

const Box = styled(motion.div)`
  border-radius: 15px;
  padding: 24px 28px;
  margin-bottom: 24px;

  .box_title {
    position: relative;
    color: #253d4e;
    font-family: "Quicksand", sans-serif;
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
      background-color: #bce3c9;
    }
  }
`;
