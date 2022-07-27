import React, { useState } from "react";
import { MainHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import Animator from "../../components/UI/Animator";
import Cookies from "js-cookie";
import { BasicCard } from "../../components/UI/BasicCard";
import Link from "next/link";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { GiMuscleUp } from "react-icons/gi";
const WorkoutFrequency = () => {
  const [Show, setShow] = useState(false);
  const [Click, setClick] = useState("");
  const handleClick1 = () => {
    setShow(true);
  };
  const handleClick = (value) => {
    setClick((prev) => {
      if (prev === value) return "";
      return value;
    });
    setShow(false);
  };
  return (
    <>
      <ProgressBar scrollLength={"64%"} val={18} link="/workout-place" />
      <div className="w-[95%] md:w-[34%] lg:w-[32%] mx-auto">
        <Animator>
          <MainHeading text="How many times per week have you trained in the last 3 months?" />
          <div
            onClick={() => handleClick("0")}
            style={{ fontFamily: "Inter,sans-serif" }}
          >
            <BasicCard
              cardText="Not at all 😔"
              isClick={Click === "0" ? true : false}
            />
          </div>{" "}
          <div onClick={() => handleClick("2")}>
            <BasicCard
              cardText="1-2 times a week 💪"
              isClick={Click === "2" ? true : false}
            />
          </div>{" "}
          <div onClick={() => handleClick("3")}>
            <BasicCard
              cardText="3 times a week 💪⚡️"
              isClick={Click === "3" ? true : false}
            />
          </div>{" "}
          <div onClick={() => handleClick("4")}>
            <BasicCard
              cardText="More than 3 times a week 🏆"
              isClick={Click === "4" ? true : false}
            />
            {Show && (
              <div className="bg-blue-600 px-5 py-3 mx-auto">
                <div className="flex items-center">
                  <GiMuscleUp className="text-gray-100 text-xl " />
                  <h2 className="text-gray-100 mx-2 text-xl font-bold">
                    You’ve workout more than{" "}
                    {`${
                      Click === "0"
                        ? "5"
                        : Click === "2"
                        ? "37"
                        : Click === "3"
                        ? "62"
                        : "84"
                    }`}
                    % of users*
                  </h2>
                </div>
                <p className="text-gray-100 text-sm my-2">
                  It will be easier for you to maintain a workout plan.
                </p>
              </div>
            )}
            {Show && (
              <p className="text-sm text-stone-400 mx-auto my-7">
                *users of MadMuscles who took the quiz
              </p>
            )}
          </div>
          {!Show && (
            <div
              onClick={handleClick1}
              className={`${
                Show ? "mt-4" : "mt-24"
              } md:mt-4 mx-auto`}
            >
              <Button dis={Click.length > 0 ? false : true} text={"Continue"} />
            </div>
          )}
          {Show && (
            <Link href={`${Click.length > 0 ? "/workout-duration" : ""}`}>
              <div
                onClick={() => Cookies.set("workout-frequency", Click)}
                className={`${
                  Show ? "mt-4" : "mt-36"
                } md:mt-4 mx-auto`}
              >
                <Button
                  dis={Click.length > 0 ? false : true}
                  text={"Got it."}
                />
              </div>
            </Link>
          )}
        </Animator>
      </div>
    </>
  );
};

export default WorkoutFrequency;
