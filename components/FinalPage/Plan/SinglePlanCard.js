import React from "react";
const SinglePlanCard = ({ text, per, total, isClick }) => {
  const style = {
    wrapper: `border-b-[2px] hover:border-orange-[600] transition duration-[300ms] cursor-pointer my-4 flex px-3 md:px-7 py-3 md:py-4 border-2 border-stone-600 bg-neutral-900 hover:bg-neutral-800 hover:border-orange-600 ${
      isClick ? "bg-neutral-800 border-orange-600" : ""
    }`,
    container1: "flex flex-col flex-1",
    container2: "shadow-xl  border-[1px] border-orange-500 px-4 py-2",
    text1: "text-gray-200 ",
    text2: "text-orange-600 ",
    text3: "text-gray-200 ",
    text4: "text-stone-400",
  };
  return (
    <div className={style.wrapper}>
            <div className={`${isClick?'border-[#f0410f]':'border-neutral-500'} mt-1 rounded-full w-[5.5vw] h-[2.5vh] md:w-[1.85vw] md:h-[3.6vh] lg:w-[1.2vw] lg:h-[2.5vh] border-2  mr-4 flex items-center justify-center`}>
        <p className={`${isClick?'flex':'hidden'} bg-[#f0410f] w-[3vw] h-[1.3vh] md:w-[1vw] md:h-[2vh] lg:w-[0.7vw] lg:h-[1.5vh] rounded-full`}></p>
      </div>
      <div className="flex w-[100%]">
        <div className={style.container1}>
          <h2 className={style.text1}>{text}</h2>
          <h2 className={style.text2}>{total}USD</h2>
        </div>
        <div className={style.container2}>
          <h2 className={style.text3}>{per.toFixed(2)}USD</h2>
          <h2 className={style.text4}>per day</h2>
        </div>
      </div>
    </div>
  );
};

export default SinglePlanCard;
