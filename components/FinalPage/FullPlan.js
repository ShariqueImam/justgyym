import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
const style = {
  wrapper: "mt-12 pt-12 w-[90%] md:w-[47%] mx-auto",
  para: "text-[#ffffff] text-sm my-7 md:my-6 mx-auto flex items-center gap-4 mx-auto md:mx-24",
};
const FullPlan = (props) => {
  return (
    <div className={style.wrapper} style={{ fontFamily: "Inter,sans-serif" }}>
      <h2 className="text-3xl md:text-4xl text-[#ffffff] text-center font-bold">
        Full Workout Plan
      </h2>
      <p className={style.para} style={{ fontWeight: 350 }}>
        {/* <Image src={"/tick.png"} width={20} height={20} /> */}
        <h2>☑️</h2>
        Build a habit & form correct exercising techniques
      </p>
      <p className={style.para} style={{ fontWeight: 350 }}>
        {/* <Image src={"/tick.png"} width={20} height={20} /> */}
        <h2>☑️</h2>
        Lose excessive body fat & improve workout intensity
      </p>
      <p className={style.para} style={{ fontWeight: 350 }}>
        {" "}
        {/* <Image src={"/tick.png"} width={20} height={20} /> */}
        <h2>☑️</h2>
        Achieve your goal and change your life forever
      </p>
      {/* <Link href="#plan">
        <div
          style={{ zIndex: 10 }}
          onClick={() => props.handleClick12()}
          className="border-t-[2px] md:w-auto md:border-none border-stone-700 bg-[#1e1e1e] md:bg-transparent cursor-pointer text-[#ffffff] font-bold flex  items-center max-w-fit mx-auto"
        >
          <div className="flex items-center justify-center flex-1 mx-4 bg-[#ff4400] my-2 px-4 py-1">
            <button className="flex-1 pr-16 px-4 md:px-10 py-3 md:py-3 text-start md:text-center ">
              Get my plan
            </button>
            <AiOutlineArrowRight className={"text-2xl"} />
          </div>
        </div>
      </Link> */}
    </div>
  );
};

export default FullPlan;
