import React from "react";

const style = {
  wrapper: " flex items-center justify-center bg-[#1e1e1e] w-[100%] md:w-[45%] px-4 py-3 my-2",
  wrapper1: " flex items-center justify-center bg-[#1e1e1e] w-[100%] md:w-[100%] px-4 py-3 my-2 md:mr-9 lg:mr-12",
};
const SingleFeature = ({ Icon, heading, text }) => {
  return (
    <div className={style.wrapper}>
      <h2 className=" font-bold text-3xl p-3 bg-[#292929] flex items-center justify-center border-[1px] border-stone-500">{Icon}</h2>
      {/* <Icon className="text-5xl text-orange-600 border-2 border-stone-500 p-3"/> */}
      <div className="font-boldv flex-1 mx-5">
        <p className="text-[#ffffff] font-bold">{heading}</p>
        <p className="text-[#ffffff] text-lg">{text}</p>
      </div>
    </div>
  );
};
export const SingleFeature1 = ({ Icon, heading, text }) => {
  return (
    <div className={style.wrapper1}>
            <h2 className=" font-bold text-3xl p-3 bg-[#292929] flex items-center justify-center border-[1px] border-stone-500">{Icon}</h2>
      {/* <Icon className="text-5xl text-orange-600 border-2 border-stone-500 p-3"/> */}
      <div className="ffont-bold lex-1 mx-5">
        <p className="font-boldv text-[#dadada] font-bold">{heading}</p>
        <p className="font-bold text-[#ffffff] text -lg">{text}</p>
      </div>
    </div>
  );
};

export default SingleFeature;
