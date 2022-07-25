import React, { useEffect, useState } from "react";
import SingleFeature from "./SingleFeature";
import { MainHeading } from "../../UI/Heading";
import { GiStairsGoal, GiRunningShoe } from "react-icons/gi";
import { MdTimer } from "react-icons/md";
import { BsFillCalendarMonthFill } from "react-icons/bs";
import Cookies from "js-cookie";
const style = {
  wrapper: "my-24",
  container:
    "flex flex-wrap w-[95%] md:w-[70%] lg:w-[50%] mx-auto items-center justify-center",
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
    <div className={style.wrapper}>
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
          Icon={BsFillCalendarMonthFill}
          heading={"Place to Work"}
          text={`${Place}`}
        />
      </div>
    </div>
  );
};

export default PlanFeatures;
