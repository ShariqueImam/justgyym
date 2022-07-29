import React from "react";
import Image from "next/image";
import Link from "next/link";
const style = {
  wrapper:
    "my-12 bg-[#1e1e1e] border-2 border-stone-400 px-12 md:px-24 py-6 md:py-16 flex flex-col md:flex-row w-[95%] md:w-[80%] lg:w-[60%] mx-auto items-center",
  container: "flex flex-col my-6",
  heading: "text-[#ffffff] text-3xl md:text-4xl my-8 font-bold",
  para: "text-[#ffffff] mr-12 text-lg font-bold",
};
const MoneyBack = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <h2 className={style.heading}>Money-Back Guarantee</h2>
        <p className={style.para} style={{fontWeight:500}}>
          We believe that our plan may work for you and you’ll get visible
          results in 4 weeks! We are even ready to completely refund you within
          30 days after purchase if you don’t get visible results and can
          demonstrate that you have followed our plan. Find out more about the
          applicable limitations in our <Link href="/info/refund"><span className="text-[#ff4400]">money-back </span></Link>policy
        </p>
      </div>
      {/* <GiConfirmed className="text-5xl md:text-9xl text-orange-600 scale-[3] md:scale-[4] lg:scale-[3.2] my-12 md:my-0"/> */}
      <Image src={'/download.svg'} width={500} height={500}/>
    </div>
  );
};

export default MoneyBack;
