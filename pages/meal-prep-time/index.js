import React, { useState } from "react";
import { MainHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import { BasicCard1 } from "../../components/UI/BasicCard1";
import Link from "next/link";
import Animator from "../../components/UI/Animator";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Cookies from "js-cookie";
const Time = (props) => {
  const [Click, setClick] = useState("");
  const handleClick = (value) => {
    setClick((prev) => {
      if (prev === value) return "";
      return value;
    });
  };
  props.which('home1')
  React.useEffect(() => {
    window.scrollBy(0, -65);
  }, []);
  return (
    <>
      <ProgressBar scrollLength={"80%"} val={19} link="/water" />
      <div className="w-[95%] md:w-[30%] lg:w-[31%] mx-auto ">
        <div>
          <MainHeading text="How much time are you ready to spend on per one meal prep?" />
          <div onClick={() => handleClick("30")}>
            <BasicCard1
              cardText="Less than 30 min 🥑"
              isClick={Click === "30" ? true : false}
            />
          </div>{" "}
          <div onClick={() => handleClick("60")}>
            <BasicCard1
              cardText="30-60 min 🥑 🥑"
              isClick={Click === "60" ? true : false}
            />
          </div>
          <div onClick={() => handleClick("120")}>
            <BasicCard1
              cardText="More than 1 hour 🥑 🥑 🥑"
              isClick={Click === "120" ? true : false}
            />
          </div>
          <div onClick={() => handleClick("0")}>
            <BasicCard1
              cardText="I prefer to order meals or go out to eat 📦"
              isClick={Click === "0" ? true : false}
            />
          </div>
          <Link href={`${Click.length > 0 ? "/products" : ""}`}>
            <div
              onClick={() => Cookies.set("meal-prep-time", Click)}
              className="fixed bottom-[0px] left-[0px] md:relative border-t-[2px] w-[100vw] px-4 md:w-auto md:border-none border-stone-700 bg-[#1e1e1e] md:bg-transparent "
            >
              <Button dis={Click.length > 0 ? false : true} text={"Continue"} />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Time;
