import React, { useState } from "react";
import { MainHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import { BasicCard2 } from "../../components/UI/BasicCard2";
import { BasicCard1 } from "../../components/UI/BasicCard1";
import Animator from "../../components/UI/Animator";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Cookies from "js-cookie";
import Link from "next/link";

const WorkoutPlace = (props) => {
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
      <ProgressBar scrollLength={"60%"} val={14} link="/workout-place" />
      <div className="w-[95%] md:w-[39%] lg:w-[36%] mx-auto scroll-smooth">
        <div>
          <MainHeading text="Which type of equipment do you have access to?" />
          <div onClick={() => handleClick("no")}>
            <BasicCard1
              cardText="No Equipment"
              isClick={Click === "no" ? true : false}
            />
          </div>{" "}
          <div onClick={() => handleClick("basic")}>
            <BasicCard2
              cardText="Basic Equipment"
              cardPara="Resistance band, dumbbells"
              isClick={Click === "basic" ? true : false}
            />
          </div>
          <div onClick={() => handleClick("full")}>
            <BasicCard2
              cardText="Full Equipment"
              cardPara="Resistance band, dumbbells, parallel and horizontal bars"
              isClick={Click === "full" ? true : false}
            />
          </div>
          <Link href={`${Click.length > 0 ? "/workout-frequency" : ""}`}>
            <div
              onClick={() => Cookies.set("equipment", Click)}
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

export default WorkoutPlace;
