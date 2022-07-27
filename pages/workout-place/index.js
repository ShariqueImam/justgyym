import React, { useState } from "react";
import { MainHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import { BasicCard } from "../../components/UI/BasicCard";
import Animator from "../../components/UI/Animator";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Cookies from "js-cookie";
import Link from "next/link";

const WorkoutPlace = () => {
  const [Click, setClick] = useState("");
  const handleClick = (value) => {
    setClick((prev) => {
      if (prev === value) return "";
      return value;
    });
  };
  return (
    <>
      <ProgressBar scrollLength={"60%"} val={16} link="/pull-ups" />
      <div className="w-[95%] md:w-[34%] lg:w-[32%] mx-auto">
        <Animator>
          <MainHeading text="Choose the place for your workouts" />
          <div onClick={() => handleClick("Home")}>
            <BasicCard
              cardText="Home 🏡"
              isClick={Click === "Home" ? true : false}
            />
          </div>{" "}
          <div onClick={() => handleClick("Gym")}>
            <BasicCard
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
