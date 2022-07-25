import React, { useState } from "react";
import { MainHeading } from "../../components/UI/Heading";
import { BasicCard } from "../../components/UI/BasicCard";
import Animator from "../../components/UI/Animator";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Cookies from "js-cookie";
import { Button } from "../../components/UI/Button";
import Link from "next/link";
import { AiOutlineStock } from "react-icons/ai";
const WorkoutIssue = () => {
  const [Click, setClick] = useState([]);
  const [Show, setShow] = useState(false);
 
  const handleClick = (value) => {
    if (value !== "none") {
      const index = Click.indexOf(value);
      if (index > -1) {
        Click.splice(index, 1);
        setClick([...Click]);
      } else {
        const none = Click.indexOf("none");
        if (none > -1) {
          Click.splice(none, 1);
        }
        setClick([...Click, value]);
      }
    } else {
      const none = Click.indexOf("none");
      if (none > -1) {
        Click.splice(none, 1);
        setClick([...Click]);
      } else {
        setClick(["none"]);
      }
    }
  };
  const handleClick1 = () => {
    setShow(true);
  };
  return (
    <>
      <ProgressBar scrollLength={"36%"} val={9} link="/workouts"/>
      <Animator>
        <MainHeading
          text={
            "Have you experienced any of these issues in your previous fitness attempts?"
          }
        />
        <div onClick={() => handleClick("motivation")}>
          <BasicCard
            cardText="Lack of motivation"
            isClick={Click.includes("motivation") ? true : false}
          />
        </div>
        <div onClick={() => handleClick("clearplan")}>
          <BasicCard
            cardText="Didn't have a clear plan"
            isClick={Click.includes("clearplan") ? true : false}
          />
        </div>
        <div onClick={() => handleClick("hard")}>
          <BasicCard
            cardText="My workouts were too hard"
            isClick={Click.includes("hard") ? true : false}
          />
        </div>
        <div onClick={() => handleClick("coaching")}>
          <BasicCard
            cardText="Bad coaching"
            isClick={Click.includes("coaching") ? true : false}
          />
        </div>
        <p className="border-t-[1px] border-stone-500 w-[90%] md:w-[40%] lg:w-[25%] mx-auto"></p>

        <div onClick={() => handleClick("none")}>
          <BasicCard
            cardText="None of the above"
            isClick={Click.includes("none") ? true : false}
          />
          {/* adding the thanks page */}
          {Show && (
            <div className="bg-blue-600 px-5 py-3 w-[90%] md:w-[40%] lg:w-[25%] mx-auto">
              <div className="flex items-center">
                <AiOutlineStock className="text-gray-100 text-xl " />
                <h2 className="text-gray-100 mx-2 text-xl font-bold">Great!</h2>
              </div>
              <p className="text-gray-100 text-sm my-2">
                We’re glad to see you’re already at your ideal weight.
                MadMuscles can help to have a better quality of your body
              </p>
            </div>
          )}
        </div>
        {!Show && (
          <div onClick={handleClick1}>
            <Button dis={Click.length > 0 ? false : true} text={"Continue"} />
          </div>
        )}
        {Show && (
          <Link href={`${Click.length > 0 ? "/give-up" : ""}`}>
            <div
              onClick={() =>
                Cookies.set("workout-issue", JSON.stringify(Click))
              }
            >
              <Button dis={Click.length > 0 ? false : true} text={"Got it"} />
            </div>
          </Link>
        )}
      </Animator>
    </>
  );
};

export default WorkoutIssue;
