import React from "react";
import Image from "next/image";
import { ImCross } from "react-icons/im";
export const BasicCard = ({ cardText, isClick }) => {
  const cardStyle = {
    card: `border-2 border-transparent ${
      isClick ? "border-orange-600" : ""
    }  px-8 py-3 my-5 flex items-center justify-center bg-[#1E1E1E] hover:bg-[#292929] cursor-pointer transition duration-[10ms]`,
    smallHeading: "text-lg md:text-lg flex-1 text-[#ffffff] ",
  };
  const [Click, setClick] = React.useState(false);
  const handleClick = () => {
    setClick((prev) => !prev);
  };

  return (
    // make the container of the card to display 'flex or flex-wrap'
    <div className={cardStyle.card} style={{ fontFamily: "Inter,sans-serif" }}>
      {/* cardText !== "None of the above" &&  */}
      {/* above for the img to be changed */}
      {isClick ? (
        <Image src={"/ok.png"} height={20} width={22} />
      ) : (
        <Image src={"/not.png"} height={20} width={22} />
      )}
      <div className="flex-1 flex items-center justify-center mx-4">
        {cardText == "None of the above" && (
          <ImCross className="mx-3 text-orange-700 text-xl" />
        )}

        <h3
          className={cardStyle.smallHeading}
          onClick={handleClick}
          style={{ fontWeight: 600 }}
        >
          {cardText}
        </h3>
      </div>
    </div>
  );
};
