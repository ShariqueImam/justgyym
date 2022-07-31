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
  wrapper: "",
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
      <Get fat={fat} />
      <Video />
      <FullPlan fat={fat} />
      <div id="plan">
        <Plan fat={fat} />
      </div>
      <MoneyBack fat={fat} />
      <Review fat={fat} />
      <Link href="#plan">
        <div className="cursor-pointer hover:bg-orange-500 bg-[#ff4400] px-4 md:px-10 py-3 md:py-4 text-[#ffffff] font-bold fixed top-[90%] md:top-[87%] left-[25%] md:left-[42%] flex">
          <button className="flex-1 pr-16">Get my plan</button>
          <AiOutlineArrowRight className={"text-2xl"} />
        </div>
      </Link>
    </div>
  );
};

export default FinalPage;
