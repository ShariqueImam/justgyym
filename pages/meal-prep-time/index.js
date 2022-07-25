import React, { useState } from "react";
import { MainHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import { BasicCard } from "../../components/UI/BasicCard";
import Link from "next/link";
import Animator from "../../components/UI/Animator";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Cookies from "js-cookie";
const Time = () => {
  const [Click, setClick] = useState("");
  const handleClick = (value) => {
    setClick((prev) => {
      if (prev === value) return "";
      return value;
    });
  };
  return (
    <>
      <ProgressBar scrollLength={"80%"} val={20} link="/water"/>
      <Animator>
        <MainHeading text="How much time are you ready to spend per one meal prep?" />
        <div onClick={() => handleClick("30")}>
          <BasicCard cardText="Less than 30 min 🥑"   isClick={Click === "30" ? true : false}/>
        </div>{" "}
        <div onClick={() => handleClick("60")}>
          <BasicCard cardText="30-60 min 🥑 🥑"   isClick={Click === "60" ? true : false}/>
        </div>
        <div onClick={() => handleClick("120")}>
          <BasicCard cardText="More than 1 hour 🥑 🥑 🥑"   isClick={Click === "120" ? true : false}/>
        </div>
        <div onClick={() => handleClick("0")}>
          <BasicCard cardText="I prefer to order meals or go out to eat 📦"   isClick={Click === "0" ? true : false}/>
        </div>
        <Link href={`${Click.length > 0 ? "/products" : ""}`}>
          <div onClick={() => Cookies.set("meal-prep-time", Click)} className={` mt-4 mt-24 md:mt-4 `}>
            <Button dis={Click.length > 0 ? false : true} text={'Continue'} />
          </div>
        </Link>
      </Animator>
    </>
  );
};

export default Time;
