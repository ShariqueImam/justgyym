import React, { useState, useRef, useEffect } from "react";
import { MainHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import Animator from "../../components/UI/Animator";
import Cookies from "js-cookie";
import { BasicCard1 } from "../../components/UI/BasicCard1";
import { BasicCard2 } from "../../components/UI/BasicCard2";
import Link from "next/link";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { GiMuscleUp } from "react-icons/gi";
const WorkoutFrequency = (props) => {
  const [Show, setShow] = useState(false);
  const [Click, setClick] = useState("");
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [Show]);
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
  props.which("home1");
  React.useEffect(() => {
    window.scrollBy(0, -65);
  }, []);
  return (
    <div className="mb-32 md:mb-0">
      <ProgressBar scrollLength={"64%"} val={14} link="/workout-place" />
      <div className="w-[95%] md:w-[30%] lg:w-[32%] mx-auto">
        <div>
          <MainHeading text="How many times per week have you trained in the last 3 months?" />
          <div
            onClick={() => handleClick("0")}
            style={{ fontFamily: "Inter,sans-serif" }}
          >
            <BasicCard2
              cardText="Not at all 😔"
              isClick={Click === "0" ? true : false}
              cardPara="I haven't trained, but I will after claiming my workout program!"
            />
          </div>{" "}
          <div onClick={() => handleClick("2")}>
            <BasicCard1
              cardText="1-2 times a week 💪"
              isClick={Click === "2" ? true : false}
            />
          </div>{" "}
          <div onClick={() => handleClick("3")}>
            <BasicCard1
              cardText="3 times a week 💪⚡️"
              isClick={Click === "3" ? true : false}
            />
          </div>{" "}
          <div onClick={() => handleClick("4")}>
            <BasicCard1
              cardText="More than 3 times a week 🏆"
              isClick={Click === "4" ? true : false}
            />
            {Show && (
              <div
              ref={messagesEndRef}
                className="bg-[#2563eb]  px-5 py-3 mx-auto"
                style={{ fontFamily: "Inter,sans-serif" }}
              >
                <div className="flex items-center">
                  <GiMuscleUp className="text-gray-100 text-xl " />
                  <h2 className="text-gray-100 mx-2 text-lg font-bold">
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
                <p
                  className="text-gray-100 text-sm my-2 mx-6 md:mx-8"
                  style={{ fontWeight: 450 }}
                >
                  It will be easier for you to maintain a workout plan.
                </p>
              </div>
            )}
            {Show && (
              <p className="text-xs text-gray-50 mx-auto my-7">
                *users of JustGyym who took the quiz
              </p>
            )}
          </div>
          {!Show && (
            <div
              onClick={handleClick1}
              className="fixed bottom-[0px] left-[0px] md:relative border-t-[2px] w-[100vw] px-4 md:w-auto md:border-none border-stone-700 bg-[#1e1e1e] md:bg-transparent "
            >
              <Button dis={Click.length > 0 ? false : true} text={"Continue"} />
            </div>
          )}
          {Show && (
            <Link href={`${Click.length > 0 ? "/level-hormone" : ""}`}>
              <div
                onClick={() => Cookies.set("workout-frequency", Click)}
                className="fixed bottom-[0px] left-[0px] md:relative border-t-[2px] w-[100vw] px-4 md:w-auto md:border-none border-stone-700 bg-[#1e1e1e] md:bg-transparent "
              >
                <Button dis={Click.length > 0 ? false : true} text={"Got it"} />
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkoutFrequency;
