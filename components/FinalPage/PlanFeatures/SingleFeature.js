import React from "react";

const style = {
  wrapper: " flex items-center justify-center bg-neutral-800 w-[100%] md:w-[45%] px-4 py-3 my-2",
  wrapper1: " flex items-center justify-center bg-neutral-800 w-[100%] md:w-[100%] px-4 py-3 my-2 md:mr-9 lg:mr-12",
};
const SingleFeature = ({ Icon, heading, text }) => {
  return (
    <div className={style.wrapper}>
      <h2 className="text-3xl p-3 bg-[#333333] flex items-center justify-center border-[1px] border-stone-500">{Icon}</h2>
      {/* <Icon className="text-5xl text-orange-600 border-2 border-stone-500 p-3"/> */}
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
            <h2 className="text-3xl p-3 bg-[#333333] flex items-center justify-center border-[1px] border-stone-500">{Icon}</h2>
      {/* <Icon className="text-5xl text-orange-600 border-2 border-stone-500 p-3"/> */}
      <div className="flex-1 mx-5">
        <p className="text-gray-200 font-bold">{heading}</p>
        <p className="text-gray-300">{text}</p>
      </div>
    </div>
  );
};

export default SingleFeature;
