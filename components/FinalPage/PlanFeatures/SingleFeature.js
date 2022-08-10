import React from "react";

const style = {
  wrapper: " flex items-center justify-center bg-[#1e1e1e] w-[100%] md:w-[45%] px-4 py-3 my-0",
  wrapper1: " flex items-center justify-center bg-[#1e1e1e] w-[100%] md:w-[100%] px-4 py-3 my-0 md:mr-9 lg:mr-12",
};
const SingleFeature = ({ Icon, heading, text }) => {
  return (
    <div className={style.wrapper} style={{fontFamily:'Inter,sans-serif'}}>
      <h2 className=" font-bold text-3xl px-2 py-1 bg-[#292929] flex items-center justify-center border-[1px] border-stone-500">{Icon}</h2>
      {/* <Icon className="text-5xl text-orange-600 border-2 border-stone-500 p-3"/> */}
      <div className="font-boldv flex-1 mx-5">
        <p className="text-[#dadada] text-sm" style={{fontWeight:500}}>{heading}</p>
        <p className="text-[#ffffff] text-lg">{text}</p>
      </div>
    </div>
  );
};
export const SingleFeature1 = ({ Icon, heading, text }) => {
  return (
    <div className={style.wrapper1} style={{fontFamily:'Inter,sans-serif'}}>
            <h2 className=" font-bold text-3xl px-2 py-1 bg-transparent flex items-center justify-center  border-[1px] border-stone-500">{Icon}</h2>
      {/* <Icon className="text-5xl text-orange-600 border-2 border-stone-500 p-3"/> */}
      <div className="ffont-bold flex-1 mx-5">
        <p className="font-bold text-sm text-[#dadada]" style={{fontWeight:500}}>{heading}</p>
        <p className="font-bold text-[#ff6025] text-lg ">{text}</p>
      </div>
    </div>
  );
};

export default SingleFeature;
