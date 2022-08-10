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
import { useScrollYPosition } from "react-use-scroll-position";
import Popup from "./Pop";
const style = {
  wrapper: "scroll-smooth",
};
const FinalPage = () => {
  const [Pop, setPop] = useState(false);
  const [fat, setFat] = useState(25);
  // const [scrollY, setScrollY] = useState(0);
  const scrollY = useScrollYPosition();
  useEffect(() => {
    setFat(Cookies.get("level-of-fat") || 25);
  }, []);
  const handlePop = () => {
    setPop((prev) => !prev);
  };
console.log(Pop)
  return (
    <div className={style.wrapper} style={{ fontFamily: "Inter,sans-serif" }}>
      {Pop && <Popup handlePop={handlePop} />}
      <Result fat={fat} />
      <Summary fat={fat} handlePop={handlePop} />
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
      {scrollY < 1200 && (
        <Link href="#plan">
          <div
            style={{ zIndex: 10 }}
            className="fixed bottom-[0px] left-[0px] md:bottom-[100px] md:left-[40%] border-t-[2px] w-[100vw] md:w-auto md:border-none border-stone-700 bg-[#1e1e1e] md:bg-transparent cursor-pointer text-[#ffffff] font-bold flex  items-center"
          >
            <div className="flex items-center justify-center flex-1 mx-4 bg-[#ff4400] my-2 px-4 py-1">
              <button className="flex-1 pr-16 px-4 md:px-10 py-3 md:py-3 text-start md:text-center ">
                Get my plan
              </button>
              <AiOutlineArrowRight className={"text-2xl"} />
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default FinalPage;
