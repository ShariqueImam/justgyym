import React from "react";
import Image from "next/image";
import { MdDoubleArrow } from "react-icons/md";

const style = {
  wrapper: "w-[90%] md:w-[50%] lg:w-[45%] mx-auto",
  imgContainer: "flex items-center justify-center",
  container1: "flex border-b-2 border-stone-500",
  leftContainer:
    "w-[50%] flex flex-col  justify-center items-center md:items-start px-4 md:px-12 py-7 border-r-2 border-stone-500",
  rightContainer:
    "w-[50%] flex flex-col justify-center items-center md:items-start px-4 md:px-12 py-7",
};
const Result = ({fat}) => {
  return (
    <div
      className={style.wrapper}
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* img container */}
      <div className={style.imgContainer}>
        <Image src={"/final/d.webp"} width={120} height={270} />
        <MdDoubleArrow className="text-neutral-800 text-8xl md:text-9xl mx-1 md:mx-6 lg:mx-24" />
        <Image src={"/final/s.webp"} width={120} height={270} />
      </div>
      {/* the buttons */}
      <div className={style.container1}>
        <h2 className="text-[#ffffff] text-xl bg-[#1e1e1e] w-[50%] mx-auto text-center py-2">
          Now
        </h2>
        <h2 className="text-[#ffffff] text-xl bg-[#1e1e1e] w-[50%] mx-auto text-center py-2">
          6 Months
        </h2>
      </div>
      <div className={style.container1}>
        <div className={style.leftContainer}>
          <h2 className="text-gray-100">Body Fat</h2>
          <h3 className="text-orange-600 text-xl">{+fat+20}%-{+fat+20+5}%</h3>
          <h3 className="text-gray-200 text-sm my-3">Body Muscles</h3>
          <div className="flex ">
            <p className="w-[3vw] md:w-[1.5vw] bg-[#ff4400] h-[0.5vh] mx-1"></p>
            <p className="w-[3vw] md:w-[1.5vw] bg-orange-900 h-[0.5vh] mx-1"></p>
            <p className="w-[3vw] md:w-[1.5vw] bg-orange-900 h-[0.5vh] mx-1"></p>
            <p className="w-[3vw] md:w-[1.5vw] bg-orange-900 h-[0.5vh] mx-1"></p>
            <p className="w-[3vw] md:w-[1.5vw] bg-orange-900 h-[0.5vh] mx-1"></p>
          </div>
        </div>
        <div className={style.rightContainer}>
          <h2 className="text-[#ffffff] text-xl ">Body Fat</h2>
          <h3 className="text-orange-600 text-xl">{+fat+20-20}%-{+fat+20-20+5}%</h3>
          <h3 className="text-gray-200 text-sm my-3">Body Muscles</h3>
          <div className="flex ">
            <p className="w-[3vw] md:w-[1.5vw] bg-[#ff4400] h-[0.5vh] mx-1"></p>
            <p className="w-[3vw] md:w-[1.5vw] bg-[#ff4400] h-[0.5vh] mx-1"></p>
            <p className="w-[3vw] md:w-[1.5vw] bg-[#ff4400] h-[0.5vh] mx-1"></p>
            <p className="w-[3vw] md:w-[1.5vw] bg-[#ff4400] h-[0.5vh] mx-1"></p>
            <p className="w-[3vw] md:w-[1.5vw] bg-orange-900 h-[0.5vh] mx-1"></p>
          </div>
        </div>
      </div>
      <p className="text-xs text-center my-4 text-[#8d8d8d]" style={{fontWeight:300}}>
        *The image is not intended to represent the user. Results vary per
        person and are not guaranteed.
      </p>
    </div>
  );
};

export default Result;
