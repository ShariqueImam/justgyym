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
  React.useEffect(() => {
    window.scrollBy(0, -65);
  }, []);
  return (
    <>
      <ProgressBar scrollLength={"56%"} val={12} link="/push-ups" />
      <div className="w-[95%] md:w-[39%] lg:w-[36%] mx-auto">
        <div>
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

export default Pullups;
