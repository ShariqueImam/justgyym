import React, { useState, useEffect } from "react";
import Image from "next/image";
import Cookies from "js-cookie";
const style = {
  wrapper: "w-[90%] md:w-[50%] lg:w-[45%] mx-auto font-bold",
  imgContainer: "flex items-center justify-center font-bold ",
  container1: "flex border-b-2 border-stone-500 font-bold",
  leftContainer:
    "w-[50%] flex flex-col  justify-center items-center md:items-start px-4 md:px-12 py-7 border-r-2 border-stone-500 font-bold",
  rightContainer:
    "w-[50%] flex flex-col justify-center items-center md:items-start px-4 md:px-12 py-7 font-bold",
};
const Result = ({ fat }) => {
  const [Type, setType] = useState(Cookies.get("body-type") || "ectomorph");
  const [Target, setTarget] = useState(
    Cookies.get("target-body") || "beachbody"
  );

  return (
    <div className={style.wrapper} style={{ fontFamily: "Inter, sans-serif" }}>
      {/* img container */}
      <div className={style.imgContainer}>
        <Image
          src={`${
            Type == "ectomorph"
              ? "/type/3.png"
              : Type == "mesomorph"
              ? "/type/2.png"
              : "/type/1.png"
          }`}
          width={150}
          height={220}
        />
        <div className="scale-[0.8]">
          <Image src={"/arrow.png"} width={260} height={180} />
        </div>
        {/* <MdDoubleArrow className="text-neutral-800 text-8xl scale-[2] md:text-9xl mx-1 md:mx-6 lg:mx-24 font-bold" /> */}
        <Image
          src={`${
            Target == "slim"
              ? "/SLIM_BODY.webp"
              : Target == "slimshredded"
              ? "/SLIM_SHREDDED_BODY.webp"
              : Target == "athlete"
              ? "/ATHLETE.webp"
              : Target == "hero"
              ? "/HERO.webp"
              : Target == "bodybuilder"
              ? "/BODYBUILDER.webp"
              : Target == "beachbody"
              ? "/BEACH_BODY.webp"
              : Target == "workoutbody"
              ? "/WORKOUT_BODY.webp"
              : "/CROSS_FIT_BODY.webp"
          }`}
          width={160}
          height={220}
        />
      </div>
      {/* the buttons */}
      <div className={style.container1}>
        <h2 className="text-[#ffffff] text-xl bg-[#1e1e1e] w-[50%] mx-auto text-center py-2 font-bold">
          Now
        </h2>
        <h2 className="text-[#ffffff] text-xl bg-[#1e1e1e] w-[50%] mx-auto text-center py-2 font-bold">
          6 Months
        </h2>
      </div>
      <div className={style.container1}>
        <div className={style.leftContainer}>
          <h2 className="text-gray-100 font-bold">Body Fat</h2>
          <h3 className="text-orange-600 text-xl font-bold">
            {+fat + 20}%-{+fat + 20 + 5}%
          </h3>
          <h3 className="text-[#ffffff] text-sm my-3 font-bold">
            Body Muscles
          </h3>
          <div className="flex ">
            <p className="w-[3vw] md:w-[1.5vw] bg-[#ff4400] h-[0.5vh] mx-1"></p>
            <p className="w-[3vw] md:w-[1.5vw] bg-orange-900 h-[0.5vh] mx-1"></p>
            <p className="w-[3vw] md:w-[1.5vw] bg-orange-900 h-[0.5vh] mx-1"></p>
            <p className="w-[3vw] md:w-[1.5vw] bg-orange-900 h-[0.5vh] mx-1"></p>
            <p className="w-[3vw] md:w-[1.5vw] bg-orange-900 h-[0.5vh] mx-1"></p>
          </div>
        </div>
        <div className={style.rightContainer}>
          <h2 className="text-[#ffffff]  font-bold">Body Fat</h2>
          <h3 className="text-orange-600 text-xl font-bold">
            {+fat + 20 - 20}%-{+fat + 20 - 20 + 5}%
          </h3>
          <h3 className="text-[#ffffff] text-sm my-3 font-bold">
            Body Muscles
          </h3>
          <div className="flex ">
            <p className="w-[3vw] md:w-[1.5vw] bg-[#ff4400] h-[0.5vh] mx-1"></p>
            <p className="w-[3vw] md:w-[1.5vw] bg-[#ff4400] h-[0.5vh] mx-1"></p>
            <p className="w-[3vw] md:w-[1.5vw] bg-[#ff4400] h-[0.5vh] mx-1"></p>
            <p className="w-[3vw] md:w-[1.5vw] bg-[#ff4400] h-[0.5vh] mx-1"></p>
            <p className="w-[3vw] md:w-[1.5vw] bg-orange-900 h-[0.5vh] mx-1"></p>
          </div>
        </div>
      </div>
      <p
        className="text-xs text-center my-4 text-[#8d8d8d] font-normal"
        style={{ fontWeight: 400 }}
      >
        *The image is not intended to represent the user. Results vary per
        person and are not guaranteed.
      </p>
    </div>
  );
};

export default Result;
