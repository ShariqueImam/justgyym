import Image from "next/image";
import React, { useState } from "react";

export const Card2 = ({ cardText,para, imgUrl ,isClick}) => {

  const cardStyle = {
    card: ` ${
      isClick ? "border-orange-600" : ""
    } mx-auto  px-6  my-5 flex items-center justify-center bg-[#1E1E1E] hover:bg-[#292929] cursor-pointer transition duration-[10ms]  border-2 border-transparent`,
    smallHeading: "text-2xl md:text-2xl flex-1 text-[#ffffff] font-extrabold py-3",
    infoContainer:'flex flex-col mr-3',
    para:'text-[#dadada] text-sm my-4 font-semibold'
  };
  return (
    // make the container of the card to display 'flex or flex-wrap'
    <div className={cardStyle.card}  style={{fontFamily:'Inter,sans-serif',fontWeight:600}}>
      <div className={cardStyle.infoContainer}>
        <h3 className={cardStyle.smallHeading}>{cardText}</h3>
        <p className={cardStyle.para}>{para}</p>
      </div>
      <Image src={imgUrl} width={120} height={160} />
    </div>
  );
};
