import React, { useEffect, useState } from "react";
import SingleFeature from "./SingleFeature";
import {SingleFeature1} from "./SingleFeature";
import { MainHeading } from "../../UI/Heading";
import { GiStairsGoal, GiRunningShoe } from "react-icons/gi";
import { MdTimer } from "react-icons/md";
import { BsFillCalendarMonthFill } from "react-icons/bs";
import Cookies from "js-cookie";
import { GiConfirmed,GiWalkingBoot } from "react-icons/gi";

const style = {
  wrapper: "my-24",
  container:
    "flex flex-wrap  w-[95%] md:w-[70%] lg:w-[50%] mx-auto items-center justify-center",
};
const PlanFeatures = () => {
  const [Goal, setGoal] = useState("Lose");
  const [Place, setPlace] = useState("Gym");
  const [Duration, setDuration] = useState("1");
  const [Name, setName] = useState(Cookies.get("name"));

  useEffect(() => {
    setGoal(Cookies.get("goal"));
    setPlace(Cookies.get("workout-place"));
    setDuration(Cookies.get("workout-duration"));
  }, []);

  return (
    <div className={style.wrapper} style={{ fontFamily: "Inter,sans-serif" }}>
      <MainHeading text={`Shredded plan for ${Name} is ready!`} />
      <div className={style.container}>
        <SingleFeature Icon={GiStairsGoal} heading={"Goal"} text={`${Goal}`} />
        <SingleFeature
          Icon={MdTimer}
          heading={"Duration"}
          text={`${Duration} Hour`}
        />
        <SingleFeature
          Icon={GiRunningShoe}
          heading={"Fitness Level"}
          text={`${
            Goal === "Lose Weight"
              ? "Nearly Healthy"
              : Goal === "Gain Weight"
              ? "Intermediate"
              : "Intermediate"
          }`}
        />
        <SingleFeature
          Icon={GiWalkingBoot}
          heading={"Place to Work"}
          text={`${Place}`}
        />
        <SingleFeature1
          Icon={BsFillCalendarMonthFill}
          heading={"Workout Frequency"}
          text={`${Place}`}
        />
      </div>
      <div className="w-[95%] md:w-[40%] mx-auto">
        <p className="text-gray-50 text-lg my-5">
          Goals for the next 6 months also include:
        </p>
        <div className="flex">
          <GiConfirmed className="text-orange-600 text-2xl" />
          <p className="text-gray-50 mx-4">Reduce Stress</p>
        </div>
      </div>
    </div>
  );
};

export default PlanFeatures;
