import React from "react";
import Image from "next/image";
import { RiCloseFill } from "react-icons/ri";
const style = {
  wrapper:
    "bg-black absolute w-[100vw] h-[100vh]  bg-opacity-[0.8] top-[0px] left-[0px] flex items-center justify-center",
  contentContainer:
    "bg-[#393939] text-white w-[85%] md:w-[35%] px-4 md:px-12 py-5 md:py-5",
};
const Pop = (props) => {
  return (
    <div className={style.wrapper} style={{ zIndex: 40 }}>
      <div className={style.contentContainer}>
        <p onClick={() => props.handlePop()}>
          <RiCloseFill className="text-white text-3xl ml-auto my-4 hover:text-gray-400 cursor-pointer" />
        </p>
        <h2 className="text-2xl font-bold">Current Body Mass Index (BMI)</h2>
        <p className="text-sm my-5" style={{ fontWeight: 300 }}>
          Body mass index (BMI) is a value derived from the mass and height of a
          person.
        </p>
        <p className="text-sm" style={{ fontWeight: 300 }}>
          The BMI is a convenient rule of thumb used to broadly categorize a
          person as underweight, normal, slightly overweight, or obese.
        </p>
        <Image src={"/popup.png"} width={350} height={300} />
      </div>
    </div>
  );
};

export default Pop;
