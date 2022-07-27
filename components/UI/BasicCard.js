import React from "react";
import { TiTick } from "react-icons/ti";
export const BasicCard = ({ cardText, isClick }) => {
  const cardStyle = {
    card: `border-2 border-l-[20px] ${
      isClick ? "bg-neutral-800 border-orange-700" : ""
    }  px-8 py-4 my-5 flex items-center justify-center bg-neutral-900 hover:bg-neutral-800 cursor-pointer transition duration-[400ms] hover:border-orange-700  border-transparent`,
    smallHeading: "text-xl md:text-xl flex-1 text-gray-50 font-normal",
  };
  const [Click, setClick] = React.useState(false);
  const handleClick = () => {
    setClick((prev) => !prev);
  };

  return (
    // make the container of the card to display 'flex or flex-wrap'
    <div className={cardStyle.card} style={{ fontFamily: "Inter,sans-serif" }}>
      <p
        className={`w-[0.8vw] h-[1.5vh] mx-4 ring-2  ${
          isClick ? " ring-orange-600" : "ring-gray-50"
        }`}
      >
        <TiTick className={`text-orange-600 ${isClick?'flex scale-[1.2]':'hidden'}`}/>
      </p>
      <h3 className={cardStyle.smallHeading} onClick={handleClick}>
        {cardText}
      </h3>
    </div>
  );
};
