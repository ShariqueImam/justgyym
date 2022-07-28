import Image from "next/image";
import React, { useState } from "react";

export const Card2 = ({ cardText,para, imgUrl ,isClick}) => {

  const cardStyle = {
    card: ` ${
      isClick ? "border-orange-600" : ""
    } mx-auto  px-8 py-3 my-5 flex items-center justify-center bg-[#1E1E1E] hover:bg-[#292929] cursor-pointer transition duration-[10ms] hover:border-orange-700 border-2 border-transparent`,
    smallHeading: "text-2xl md:text-2xl flex-1 text-stone-200 font-normal",
    infoContainer:'flex flex-col font-normal',
    para:'text-gray-300 text-sm my-4 font-normal'
  };
  return (
    // make the container of the card to display 'flex or flex-wrap'
    <div className={cardStyle.card}  style={{fontFamily:'Inter,sans-serif',fontWeight:450}}>
      <div className={cardStyle.infoContainer}>
        <h3 className={cardStyle.smallHeading}>{cardText}</h3>
        <p className={cardStyle.para}>{para}</p>
      </div>
      <Image src={imgUrl} width={120} height={160} />
    </div>
  );
};
