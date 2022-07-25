import React, { useState } from "react";
import { MainHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import { BasicCard } from "../../components/UI/BasicCard";
import Animator from "../../components/UI/Animator";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Cookies from "js-cookie";
import Link from "next/link";

const Pullups = () => {
  const [Click, setClick] = useState("");
  const handleClick = (value) => {
    setClick((prev) => {
      if (prev === value) return "";
      return value;
    });
  };
  return (
    <>
      <ProgressBar scrollLength={"56%"} val={14}  link="/push-ups"/>
      <Animator>
        <MainHeading text="How many pull-ups can you do in one round?" />
        <div onClick={() => handleClick("0")}>
          <BasicCard cardText="I can’t make a single pull-up" isClick={Click === "0" ? true : false}/>
        </div>{" "}
        <div onClick={() => handleClick("5")}>
          <BasicCard cardText="Less than 5 🔥" isClick={Click === "5" ? true : false}/>
        </div>{" "}
        <div onClick={() => handleClick("10")}>
          <BasicCard cardText="5 to 10 🔥🔥" isClick={Click === "10" ? true : false}/>
        </div>{" "}
        <div onClick={() => handleClick("20")}>
          <BasicCard cardText="More than 10 🔥🔥🔥" isClick={Click === "20" ? true : false}/>
        </div>
        <Link href={`${Click.length > 0 ? "/workout-place" : ""}`}>
          <div onClick={() => Cookies.set("pull-ups", Click)}className="mt-36 md:mt-2">
            <Button dis={Click.length > 0 ? false : true} text={'Continue'} />
          </div>
        </Link>
      </Animator>
    </>
  );
};

export default Pullups;
