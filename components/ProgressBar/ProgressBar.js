import React from "react";
import styled from "styled-components";
import { MdArrowBackIos } from "react-icons/md";
import Link from "next/link";
const ProgressBar = (props) => {
  const ProgressBarStyled = styled.div`
    background: linear-gradient(
      to right,
      #ea580c ${props.scrollLength},
      transparent 0
    );
    width: 100%;
    height: 5px;
    z-index: 40;
    top: 100px;
    transition: all 0.3s ease;
    transition-delay: 0.2s;
  `;
  return (
    <div className="flex mx-8 my-4 items-center justify-center">
      <Link href={`${props.link}`}>
        <MdArrowBackIos className="text-3xl text-gray-100 mx-3 border-2 border-stone-600 px-1 cursor-pointer" />
      </Link>
      <ProgressBarStyled />
      {/* <div className="flex items-center mt-4 justify-center md:justify-start"> */}
      {/* <div className="bg-stone-800 p-1 flex items-center justify-center mx-2">
          <MdArrowBackIos className="text-xl text-gray-100" />
        </div> */}
      <h2 className="text-orange-700">{props.val}/25</h2>
      {/* </div> */}
    </div>
  );
};

export default ProgressBar;
// ${props =>  props.width < 500 ? '2px' : '7px' };
