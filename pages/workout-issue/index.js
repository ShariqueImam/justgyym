import React, { useState } from "react";
import { MainHeading } from "../../components/UI/Heading";
import { BasicCard } from "../../components/UI/BasicCard";
import { BasicCard4 } from "../../components/UI/BasicCard4";
import Animator from "../../components/UI/Animator";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Cookies from "js-cookie";
import { Button } from "../../components/UI/Button";
import Link from "next/link";
import { AiOutlineStock } from "react-icons/ai";
const WorkoutIssue = (props) => {
  const [Click, setClick] = useState([]);
  const [Show, setShow] = useState(false);
  const handleClick = (value) => {
    setShow(false);
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
  props.which("home1");
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleClick1 = () => {
    setShow(true);
  };
  return (
    <>
      <ProgressBar scrollLength={"36%"} val={10} link="/workouts" />
      <div className="w-[95%] md:w-[39%] lg:w-[36%] mx-auto">
        <div>
          <div className="w-[95%] md:w-[80%]">
            <MainHeading
              text={
                "Have you experienced any of these issues in your previous fitness attempts?"
              }
            />{" "}
          </div>

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
          <p className="border-t-[0.8px] border-stone-700 mx-auto"></p>

          <div onClick={() => handleClick("none")}>
            <BasicCard4
              cardText="None of the above"
              isClick={Click.includes("none") ? true : false}
            />
            {/* adding the thanks page */}
            {Show && Click != "none" && (
              <div
                className="bg-[#2563eb] px-5 py-3 mx-auto"
                style={{ fontFamily: "Inter,sans-serif" }}
              >
                <div className="flex items-center">
                  <AiOutlineStock className="text-gray-100 text-xl " />
                  <h2 className="text-gray-100 mx-2 text-xl font-bold">
                    Thanks for sharing!
                  </h2>
                </div>
                <p className="text-gray-100 text-sm my-2 font-thin">
                  We learned that a lot of people have faced the same as well.
                  MadMuscles has a clear workout plan that is easy to follow.
                  Also, the program will help you with motivation during this
                  journey.
                </p>
              </div>
            )}
          </div>
          {/* THESE ARE THE BUTTON THAT ARE ADDED OR SHOWED UPON CONDITION */}
          {Click[0] !== "none" && (
            <div>
              {!Show && (
                <div onClick={handleClick1} className="md:bg-transparent fixed bottom-[0px] left-[0px] md:relative border-t-[2px] w-[100vw] px-4 md:w-auto md:border-none border-stone-700 bg-[#1e1e1e]">
                  <Button
                    dis={Click.length > 0 ? false : true}
                    text={"Continue"}
                  />
                </div>
              )}
              {Show && (
                <Link href={`${Click.length > 0 ? "/give-up" : ""}`}>
                  <div
                  className="md:bg-transparent ixed bottom-[0px] left-[0px] md:relative border-t-[2px] w-[100vw] px-4 md:w-auto md:border-none border-stone-700 bg-[#1e1e1e]"
                    onClick={() =>
                      Cookies.set("workout-issue", JSON.stringify(Click))
                    }
                  >
                    <Button
                      dis={Click.length > 0 ? false : true}
                      text={"Got it"}
                    />
                  </div>
                </Link>
              )}
            </div>
          )}
          {Click[0] === "none" && (
            <div>
              {!Show && (
                <Link href={`${Click.length > 0 ? "/give-up" : ""}`}>
                  <div onClick={handleClick1} className="md:bg-transparent fixed bottom-[0px] left-[0px] md:relative border-t-[2px] w-[100vw] px-4 md:w-auto md:border-none border-stone-700 bg-[#1e1e1e]">
                    <Button
                      dis={Click.length > 0 ? false : true}
                      text={"Continue"}
                    />
                  </div>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WorkoutIssue;
