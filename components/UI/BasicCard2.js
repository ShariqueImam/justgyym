import React from "react";
import { ImCross } from "react-icons/im";
export const BasicCard2 = ({ cardText, isClick, cardPara }) => {
  const cardStyle = {
    card: `border-2 border-transparent ${
      isClick ? "border-orange-600" : ""
    }  px-4 py-3 my-5 flex items-start justify-center bg-[#1E1E1E] hover:bg-[#292929] cursor-pointer transition duration-[10ms]`,
    smallHeading: "text-lg md:text-lg flex-1 text-[#ffffff] font-extrabold",
  };


  return (
    // make the container of the card to display 'flex or flex-wrap'
    <div className={cardStyle.card} style={{ fontFamily: "Inter,sans-serif" }}>
      {/* cardText !== "None of the above" &&  */}
      {/* above for the img to be changed */}
      <div className={`${isClick?'border-[#f0410f]':'border-neutral-500'} mt-1 rounded-full w-[5.5vw] h-[2.5vh] md:w-[1.85vw] md:h-[3.6vh] lg:w-[1.2vw] lg:h-[2.5vh] border-2  mr-4 flex items-center justify-center`}>
        <p className={`${isClick?'flex':'hidden'} bg-[#f0410f] w-[3vw] h-[1.3vh] md:w-[1vw] md:h-[2vh] lg:w-[0.7vw] lg:h-[1.5vh] rounded-full`}></p>
      </div>
      <div className="flex-1 flex  items-start justify-start">
        {cardText == "None of the above" && (
          <ImCross className="mx-3 text-orange-700 text-xl" />
        )}
        <div className="flex flex-col items-start">
          <h3
            className={cardStyle.smallHeading}
            style={{ fontWeight: 600 }}
          >
            {cardText}
          </h3>
          <p className="text-sm text-neutral-400" style={{ fontWeight: 500 }}>
            {cardPara}
          </p>
        </div>
      </div>
    </div>
  );
};
