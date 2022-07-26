import React from "react";

const style = {
  wrapper: " flex items-center justify-center bg-neutral-800 w-[100%] md:w-[40%] px-4 py-3 mx-4 my-4",
  wrapper1: " flex items-center justify-center bg-neutral-800 w-[100%] md:w-[84%] px-4 py-3 mx-4 my-4",
};
const SingleFeature = ({ Icon, heading, text }) => {
  return (
    <div className={style.wrapper}>
      <Icon className="text-5xl text-orange-600 border-2 border-stone-500 p-3"/>
      <div className="flex-1 mx-5">
        <p className="text-gray-200 font-bold">{heading}</p>
        <p className="text-gray-300">{text}</p>
      </div>
    </div>
  );
};
export const SingleFeature1 = ({ Icon, heading, text }) => {
  return (
    <div className={style.wrapper1}>
      <Icon className="text-5xl text-orange-600 border-2 border-stone-500 p-3"/>
      <div className="flex-1 mx-5">
        <p className="text-gray-200 font-bold">{heading}</p>
        <p className="text-gray-300">{text}</p>
      </div>
    </div>
  );
};

export default SingleFeature;
