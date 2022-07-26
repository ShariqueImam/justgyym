import Image from "next/image";
import React from "react";

export const Card3 = ({ cardText, imgUrl, isClick }) => {
  const cardStyle = {
    card: `border-2 ${
      isClick ? "border-orange-600" : " "
    } mx-auto  px-8 py-3 my-5 flex items-center justify-center bg-[#1E1E1E] hover:bg-[#292929] cursor-pointer transition duration-[10ms] border-transparent`,
    smallHeading: "text-2xl md:text-2xl flex-1 text-[#ffffff] font-extrabold mx-3",
  };
  return (
    // make the container of the card to display 'flex or flex-wrap'
    <div
      className={cardStyle.card}
      style={{ fontFamily: "Inter,sans-serif", fontWeight: 600 }}
    >
      {isClick ? (
        <Image src={"/ok.png"} height={20} width={22} />
      ) : (
        <Image src={"/not.png"} height={20} width={22} />
      )}

      <h3 className={cardStyle.smallHeading}>{cardText}</h3>
      <Image src={imgUrl} width={120} height={150} />
    </div>
  );
};
