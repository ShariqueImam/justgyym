import React, { useState } from "react";
import { MainHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import { BasicCard1 } from "../../components/UI/BasicCard1";
import Animator from "../../components/UI/Animator";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Cookies from "js-cookie";
import Link from "next/link";
const Pushups = (props) => {
  const [Click, setClick] = useState("");
  const handleClick = (value) => {
    setClick((prev) => {
      if (prev === value) return "";
      return value;
    });
  };
  props.which('home1')

  return (
    <>
      <ProgressBar scrollLength={"52%"} val={12} link="/attention" />
      <div className="w-[95%] md:w-[39%] lg:w-[32%] mx-auto">
        <Animator>
          <MainHeading text="How many push-ups can you do in one round?" />
          <div onClick={() => handleClick("10")}>
            <BasicCard1
              cardText="Less than 10 💪"
              isClick={Click === "10" ? true : false}
            />
          </div>{" "}
          <div onClick={() => handleClick("20")}>
            <BasicCard1
              cardText="10 to 20 💪💪"
              isClick={Click === "20" ? true : false}
            />
          </div>{" "}
          <div onClick={() => handleClick("30")}>
            <BasicCard1
              cardText="21 to 30 💪💪💪"
              isClick={Click === "30" ? true : false}
            />
          </div>{" "}
          <div onClick={() => handleClick("40")}>
            <BasicCard1
              cardText="More than 30 😤"
              isClick={Click === "40" ? true : false}
            />
          </div>
          <Link href={`${Click.length > 0 ? "/pull-ups" : ""}`}>
            <div
              onClick={() => Cookies.set("push-ups", Click)}
              className="mt-36 md:mt-2"
            >
              <Button dis={Click.length > 0 ? false : true} text={"Continue"} />
            </div>
          </Link>
        </Animator>
      </div>
    </>
  );
};

export default Pushups;
