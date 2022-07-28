import React, { useState } from "react";
import { MainHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
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
  props.which('home1')

  return (
    <>
      <ProgressBar scrollLength={"60%"} val={14} link="/pull-ups" />
      <div className="w-[95%] md:w-[34%] lg:w-[32%] mx-auto">
        <Animator>
          <MainHeading text="Choose the place for your workouts" />
          <div onClick={() => handleClick("Home")}>
            <BasicCard1
              cardText="Home 🏡"
              isClick={Click === "Home" ? true : false}
            />
          </div>{" "}
          <div onClick={() => handleClick("Gym")}>
            <BasicCard1
              cardText="Gym 🏋️‍♂️"
              isClick={Click === "Gym" ? true : false}
            />
          </div>
          <Link href={`${Click.length > 0 ? "/equipment" : ""}`}>
            <div
              onClick={() => Cookies.set("workout-place", Click)}
              className="mt-72 md:mt-2"
            >
              <Button dis={Click.length > 0 ? false : true} text={"Continue"} />
            </div>
          </Link>
        </Animator>
      </div>
    </>
  );
};

export default WorkoutPlace;
