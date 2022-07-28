import React from "react";
import styled from "styled-components";
import { MdArrowBackIos } from "react-icons/md";
import Link from "next/link";
const ProgressBar = (props) => {
  const ProgressBarStyled = styled.div`
    background: linear-gradient(
      to right,
      #ff6025 ${props.scrollLength},
      #363636 0
    );
    width: 100%;
    height: 4px;
    z-index: 20;
    top: 100px;
    transition: all 0.3s ease;
    transition-delay: 0.2s;
    
  `;
  
  return (
    <div className="flex mx-4 my-4 items-center justify-center">
      <Link href={`${props.link}`}>
        <div className="bg-neutral-700 flex items-center justify-center mx-2">
          <MdArrowBackIos className="text-2xl text-gray-100 p-1 cursor-pointer" />
        </div>
      </Link>
      <ProgressBarStyled />
      {/* <ProgressBarStyled1 /> */}
      {/* <div className="flex items-center mt-4 justify-center md:justify-start"> */}
      {/* <div className="bg-stone-800 p-1 flex items-center justify-center mx-2">
          <MdArrowBackIos className="text-xl text-gray-100" />
        </div> */}
      <h2 className="text-neutral-500 text-xs mx-2">{props.val}/24</h2>
      {/* </div> */}
    </div>
  );
};

export default ProgressBar;
// ${props =>  props.width < 500 ? '2px' : '7px' };
