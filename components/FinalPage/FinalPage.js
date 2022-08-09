import React, { useEffect, useState } from "react";
import MoneyBack from "./MoneyBack";
import FullPlan from "./FullPlan";
import Plan from "./Plan/Plan";
import Result from "./Result/Result";
import PlanFeatures from "./PlanFeatures/PlanFeatures";
import Get from "./Get/Get";
import Summary from "./Summary/Summary";
import Cookies from "js-cookie";
import Video from "./Video";
import Review from "./Review/Review";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

const style = {
  wrapper: "scroll-smooth",
};
const FinalPage = () => {
  const [fat, setFat] = useState(25);
  useEffect(() => {
    setFat(Cookies.get("level-of-fat") || 25);
  }, []);

  return (
    <div className={style.wrapper} style={{ fontFamily: "Inter,sans-serif" }}>
      <Result fat={fat} />
      <Summary fat={fat} />
      <PlanFeatures fat={fat} />
      <div className="bgorange">
        <Get fat={fat} />
        <Video />
      </div>
      <div className="bg1">
        <FullPlan fat={fat} />
      </div>
      <div id="plan">
        <Plan fat={fat} />
      </div>
      <MoneyBack fat={fat} />
      <Review fat={fat} />
      <Link href="#plan">
        <div
          style={{ zIndex: 10 }}
          // className="cursor-pointer hover:bg-orange-500 bg-[#ff4400] px-4 md:px-10 py-3 md:py-4 text-[#ffffff] font-bold fixed top-[90%] md:top-[87%] left-[25%] md:left-[42%] flex "
          className="fixed bottom-[0px] left-[0px] md:bottom-[0px] md:left-[42%] border-t-[2px] w-[100vw] md:w-auto md:border-none border-stone-700 bg-[#1e1e1e] md:bg-transparent cursor-pointer hover:bg-orange-500 text-[#ffffff] font-bold flex  items-center"
        >
          <div className="flex items-center justify-center flex-1 mx-4 bg-[#ff4400] my-2 px-4 py-1">
            <button className="flex-1 pr-16 px-4 md:px-10 py-3 md:py-3 text-start md:text-center ">
              Get my plan
            </button>
            <AiOutlineArrowRight className={"text-2xl"} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FinalPage;
