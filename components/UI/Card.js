import Image from "next/image";
import React from "react";

export const StartCard = ({ cardText, imgUrl , isClick }) => {

    const cardStyle = {
      card: `${isClick ? ' border-orange-600':''} px-8 py-2 my-5 flex items-center justify-center bg-[#1E1E1E] hover:bg-[#292929] cursor-pointer transition duration-[10ms] border-2 border-transparent`,
      smallHeading: "text-2xl md:text-2xl flex-1 text-[#ffffff] font-extrabold",
    };
  return (
    // make the container of the card to display 'flex or flex-wrap'
    <div className={cardStyle.card}  style={{fontFamily:'Inter,sans-serif',fontWeight:450}} >
      <h3 className={cardStyle.smallHeading}>{cardText}</h3>
      <Image src={imgUrl} width={120} height={150} />
    </div>
  );
};
