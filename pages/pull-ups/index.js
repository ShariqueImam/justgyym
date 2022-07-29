import React, { useState } from "react";
import { MainHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import { BasicCard1 } from "../../components/UI/BasicCard1";
import Animator from "../../components/UI/Animator";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Cookies from "js-cookie";
import Link from "next/link";

const Pullups = (props) => {
  const [Click, setClick] = useState("");
  const handleClick = (value) => {
    setClick((prev) => {
      if (prev === value) return "";
      return value;
    });
  };
  props.which("home1");

  return (
    <>
      <ProgressBar scrollLength={"56%"} val={13} link="/push-ups" />
      <div className="w-[95%] md:w-[39%] lg:w-[36%] mx-auto">
        <Animator>
          <div className="w-[95%] md:w-[80%]">
            <MainHeading text="How many pull-ups can you do in one round?" />
          </div>
          <div onClick={() => handleClick("0")}>
            <BasicCard1
              cardText="I can’t make a single pull-up"
              isClick={Click === "0" ? true : false}
            />
          </div>{" "}
          <div onClick={() => handleClick("5")}>
            <BasicCard1
              cardText="Less than 5 🔥"
              isClick={Click === "5" ? true : false}
            />
          </div>{" "}
          <div onClick={() => handleClick("10")}>
            <BasicCard1
              cardText="5 to 10 🔥🔥"
              isClick={Click === "10" ? true : false}
            />
          </div>{" "}
          <div onClick={() => handleClick("20")}>
            <BasicCard1
              cardText="More than 10 🔥🔥🔥"
              isClick={Click === "20" ? true : false}
            />
          </div>
          <Link href={`${Click.length > 0 ? "/workout-place" : ""}`}>
            <div
              onClick={() => Cookies.set("pull-ups", Click)}
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

export default Pullups;
