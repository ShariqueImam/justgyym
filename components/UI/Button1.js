import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

export const Button1 = ({ dis, text }) => {
  const style = {
    wrapper: ` flex items-center md:justify-center ${
      dis
        ? "bg-orange-900 cursor-not-allowed "
        : "bg-[#f0410f] cursor-pointer hover:bg-orange-600"
    }  md:max-w-fit  px-6 py-4 md:px-4 md:py-3 lg:px-4 lg:py-3 transition duration-[50ms] mx-auto my-3 md:my-6`,
    btn: `${
      dis ? "text-stone-400" : "text-gray-100 "
    } font-normal flex-1 md:flex-0 text-lg   tracking-wider font-bold text-left md:text-center ${
      dis ? "cursor-not-allowed" : "cursor-pointer"
    }`,
  };
  return (
    <div
      className={style.wrapper}
    >
      <button className={style.btn} disabled={dis}>
        {text}
      </button>
      <AiOutlineArrowRight
        className={`${
          dis ? "text-stone-400" : "text-gray-100 "
        } ml-12 text-xl transition duration-[300ms] transform`}
      />
    </div>
  );
};
