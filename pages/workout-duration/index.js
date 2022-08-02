import React, { useState } from "react";
import { MainHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import { BasicCard1 } from "../../components/UI/BasicCard1";
import Link from "next/link";
import Animator from "../../components/UI/Animator";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Cookies from "js-cookie";
const WorkoutDuration = (props) => {
  const [Click, setClick] = useState("");
  const handleClick = (value) => {
    setClick((prev) => {
      if (prev === value) return "";
      return value;
    });
  };
  props.which("home1");
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ProgressBar scrollLength={"68%"} val={17} link="/workout-frequency" />
      <div className="w-[95%] md:w-[39%] lg:w-[36%] mx-auto">
        <div>
          <div className="w-[95%] md:w-[80%]">
            <MainHeading text="How much time are you willing to spend on a workout?" />
          </div>
          <div onClick={() => handleClick("Half")}>
            <BasicCard1
              cardText="30 minutes ⏰"
              isClick={Click === "Half" ? true : false}
            />
          </div>{" "}
          <div onClick={() => handleClick("Quarter")}>
            <BasicCard1
              cardText="45 minutes ⏰"
              isClick={Click === "Quarter" ? true : false}
            />
          </div>{" "}
          <div onClick={() => handleClick("One")}>
            <BasicCard1
              cardText="1 hour 🕐"
              isClick={Click === "One" ? true : false}
            />
          </div>{" "}
          <div onClick={() => handleClick("one")}>
            <BasicCard1
              cardText="Let Just Gyym decide"
              isClick={Click === "one" ? true : false}
            />
          </div>
          <Link href={`${Click.length > 0 ? "/level-hormone" : ""}`}>
            <div onClick={() => Cookies.set("workout-duration", Click)}  className="fixed bottom-[0px] left-[0px] md:relative border-t-[2px] w-[100vw] px-4 md:w-auto md:border-none border-stone-700 bg-[#1e1e1e] md:bg-transparent ">
              <Button dis={Click.length > 0 ? false : true} text={"Continue"} />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default WorkoutDuration;
