import React from "react";

export const BasicCard = ({ cardText,isClick}) => {

  const cardStyle = {
    card: `border-2 border-l-[20px] ${
      isClick ? "bg-neutral-800 border-orange-700" : ""
    } w-[90%] md:w-[40%] lg:w-[25%] mx-auto  px-8 py-4 my-5 flex items-center justify-center bg-neutral-900 hover:bg-neutral-800 cursor-pointer transition duration-[400ms] hover:border-orange-700  border-transparent`,
    smallHeading: "text-xl md:text-xl flex-1 text-gray-50 font-normal",
  };
  return (
    // make the container of the card to display 'flex or flex-wrap'
    <div className={cardStyle.card} style={{fontFamily:'Inter,sans-serif'}}>
      <h3 className={cardStyle.smallHeading}>{cardText}</h3>
    </div>
  );
};
