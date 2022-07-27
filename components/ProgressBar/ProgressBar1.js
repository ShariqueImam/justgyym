import React from "react";
import styled from "styled-components";


const ProgressBar = (props) => {
  const ProgressBarStyled = styled.div`
  background: linear-gradient(to right, #ea580c ${props.scrollLength}, transparent 0);
  width: 100%;
  height: 5px;
  z-index: 40;
  top: 100px;
  transition: all 0.3s ease;
  transition-delay: 0.2s;
`;
  return (
    <div className="flex my-4 flex-col">
      <ProgressBarStyled />
      <h2 className="text-orange-700 text-center mt-5">{props.val}/3</h2>
    </div>
  );
};

export default ProgressBar;
// ${props =>  props.width < 500 ? '2px' : '7px' };
