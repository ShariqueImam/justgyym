import React from "react";
import styled from "styled-components";


const ProgressBar = (props) => {
  const ProgressBarStyled = styled.div`
  background: linear-gradient(to right, #ea580c ${props.scrollLength}, #363636 0);
  width: 100%;
  height: 5px;
  z-index: 40;
  top: 100px;
  transition: all 0.3s ease;
  transition-delay: 0.2s;
`;
  return (
    <div className="flex my-4 items-center justify-center">
      <ProgressBarStyled />
      <h2 className="text-neutral-500 text-xs mx-2">{props.val}/3</h2>
    </div>
  );
};

export default ProgressBar;
// ${props =>  props.width < 500 ? '2px' : '7px' };
