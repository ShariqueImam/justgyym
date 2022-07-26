import React from "react";
const S1 = ({ text, per, total, isClick, TimerEnd }) => {
  const style = {
    wrapper: `flex flex-col border-b-[2px] transition duration-[10ms] cursor-pointer  border-2 border-stone-600 bg-[#1e1e1e] hover:bg-[#292929] ${
      isClick ? "bg-[#1e1e1e] border-[#ff4400]" : ""
    }`,
    container1: "flex flex-col flex-1 font-bold",
    container2: "shadow-xl  px-4 py-2 font-bold  bg-[#2a2a2a]",
    text1: "text-[#ffffff]  font-bold",
    text2: `text-[#ff4400] font-bold ${
      TimerEnd ? "" : "line-through text-[#b3b3b3]"
    }`,
    text3: "text-[#ffffff] font-bold",
    text4: "text-[#b3b3b3] text-xs",
    text5: `text-[#ff4400] ${TimerEnd? 'hidden':'flex'} mx-3`,
  };
  return (
    <div className={style.wrapper} style={{ fontFamily: "Inter,sans-serif" }}>
      <div className="flex my-4 flex px-3 md:px-7 py-3 md:py-4">
        <div
          className={`${
            isClick ? "font-bold border-[#f0410f]" : "border-neutral-500"
          } mt-1 rounded-full w-[5.5vw] h-[2.5vh] md:w-[1.85vw] md:h-[3.6vh] lg:w-[1.2vw] lg:h-[2.5vh] border-2  mr-4 flex items-center justify-center`}
        >
          <p
            className={`${
              isClick ? "flex" : "hidden"
            } bg-[#f0410f] font-bold w-[3vw] h-[1.3vh] md:w-[1vw] md:h-[2vh] lg:w-[0.7vw] lg:h-[1.5vh] rounded-full`}
          ></p>
        </div>
        <div className="flex w-[100%]">
          <div className={style.container1}>
            <h2 className={style.text1}>{text}</h2>
            <div className="flex items-center">
              <h2 className={style.text2}>{total} USD</h2>
              <h2 className={style.text5}>{total-10} USD</h2>
            </div>
          </div>
          <div className={style.container2}>
            <h2 className={style.text3}>{per.toFixed(2)} USD</h2>
            <h2 className={style.text4}>per day</h2>
          </div>
        </div>
      </div>
      <p className="bg-[#ff4400] text-center text-[#ffffff] font-bold text-sm tracking-wide">
        MOST POPULAR
      </p>
    </div>
  );
};

export default S1;
