import React from "react";
import Image from "next/image";
import Link from "next/link";
import useWindowSize from "../hooks/windowSize";
const style = {
  wrapper:
    "my-6 bg-[#1e1e1e] border-[1px] border-neutral-700 px-7 md:px-24 py-3 md:py-16 flex flex-col md:flex-row w-[95%] md:w-[80%] lg:w-[83%] mx-auto items-center",
  container: "flex flex-col my-2 w-[100%] md:w-[70%]",
  heading: "text-[#ffffff] text-xl md:text-3xl my-8 font-bold mr-5",
  para: "text-[#ffffff] mr-3 md:mr-12 text-lg font-bold py-6 md:py-1",
};
const MoneyBack = () => {
  const { width } = useWindowSize();
  return (
    <div className={style.wrapper} style={{ fontFamily: "Inter,sans-serif" }}>
      <div className={style.container}>
        <div className="flex">
          <h2 className={style.heading}>Money-Back Guarantee</h2>
          <div className="flex md:hidden">
            <Image src={"/download.svg"} width={115} height={115} />
          </div>
        </div>
        <p className={style.para} style={{ fontWeight: 450 }}>
          We believe that our plan may work for you and you’ll get visible
          results in 4 weeks! We are even ready to completely refund you within
          30 days after purchase if you don’t get visible results and can
          demonstrate that you have followed our plan.<br></br> Find out more about the
          applicable limitations in our{" "}
          <Link href="/info/refund">
            <span className="text-[#ff4400] inline mx-2 cursor-pointer">
              money-back policy{" "}
            </span>
          </Link>
        </p>
      </div>
      <div className="hidden md:flex">
        <Image
          src={"/download.svg"}
          width={width < 700 ? 150 : 200}
          height={width < 700 ? 150 : 200}
        />
      </div>
    </div>
  );
};

export default MoneyBack;
