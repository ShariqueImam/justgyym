import React, { useEffect, useState } from "react";
import SingleFeature from "./SingleFeature";
import { SingleFeature1 } from "./SingleFeature";
import Cookies from "js-cookie";
import { AiOutlineCheckCircle } from "react-icons/ai";

const style = {
  wrapper: "w-[95%] md:w-[43%] mx-auto mb-12 font-bold",
  container:
    "flex flex-wrap  mx-auto items-center justify-start gap-6 font-bold",
};
const PlanFeatures = () => {
  const [Goal, setGoal] = useState(Cookies.get("goal") || "Lose Weight");
  const [Place, setPlace] = useState(Cookies.get("workout-place") || "Gym");
  const [Name, setName] = useState(Cookies.get("name"));

  console.log();
  return (
    <div className={style.wrapper} style={{ fontFamily: "Inter,sans-serif" }}>
      <h2 className="text-3xl md:text-5xl text-[#ffffff] font-bold my-8">
        {" "}
        Shredded Plan for {Name} is
        <span className="text-[#ff4400] mx-2">ready!</span>
      </h2>
      <div className={style.container}>
        <SingleFeature Icon={"🎯"} heading={"Goal"} text={`${Goal}`} />
        <SingleFeature Icon={"⌛️"} heading={"Duration"} text={`One Hour`} />
        <SingleFeature
          Icon={"💪"}
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
          Icon={"👟"}
          heading={"Place to Work"}
          text={`${Place}`}
        />
        <p className="border-t-[1px] border-stone-600 w-[100%] md:mr-10 lg:mr-12"></p>

        <SingleFeature1
          Icon={"📆"}
          heading={"Workout Frequency"}
          text={`4 Times a week`}
        />
      </div>
      <div className="mx-auto">
        <p className="text-[#ffffff] text-lg my-5 font-bold">
          Goals for the next 6 months also include:
        </p>
        <div className="flex">
          <AiOutlineCheckCircle className="text-3xl text-[#ff4400]" />
          <p className="text-[#ffffff] mx-4" style={{ fontWeight: 500 }}>
            Reduce Stress
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlanFeatures;
