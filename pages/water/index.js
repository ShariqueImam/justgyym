import React, { useState } from "react";
import { MainHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import { BasicCard } from "../../components/UI/BasicCard";
import Link from "next/link";
import Animator from "../../components/UI/Animator";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Cookies from "js-cookie";
import { CgGlass } from "react-icons/cg";
const Water = () => {
  const [Show, setShow] = useState(false);

  const [Click, setClick] = useState("");
  const handleClick = (value) => {
    setClick((prev) => {
      if (prev === value) return "";
      return value;
    });
    setShow(false);
  };
  const handleClick1 = () => {
    setShow(true);
  };
  return (
    <>
      <ProgressBar scrollLength={"76%"} val={21} link="/level-hormone"/>
      <Animator>
        <MainHeading text="How much water do you drink daily?" />
        <div onClick={() => handleClick("0")}>
          <BasicCard
            cardText="Only coffee or tea ☕️"
            isClick={Click === "0" ? true : false}
          />
        </div>{" "}
        <div onClick={() => handleClick("2")}>
          <BasicCard
            cardText="Less than 2 glasses 💧 (up to 0,5 l / 17 oz)"
            isClick={Click === "2" ? true : false}
          />
        </div>{" "}
        <div onClick={() => handleClick("6")}>
          <BasicCard
            cardText="2-6 glasses 💧💧(0,5-1,5 l / 17-50 oz)"
            isClick={Click === "6" ? true : false}
          />
        </div>{" "}
        <div onClick={() => handleClick("10")}>
          <BasicCard
            cardText="7-10 glasses 💧💧💧 (1,5-2,5 l / 50-85 oz) "
            isClick={Click === "10" ? true : false}
          />
        </div>{" "}
        <div onClick={() => handleClick("20")}>
          <BasicCard
            cardText="More than 10 glasses 🐳 (more than 2,5 l / 85 oz)"
            isClick={Click === "20" ? true : false}
          />
          {Show && (
            <div className="bg-blue-600 px-5 py-3 w-[90%] md:w-[40%] lg:w-[25%] mx-auto">
              <div className="flex items-center">
                <CgGlass className="text-gray-100 text-xl " />
                <h2 className="text-gray-100 mx-2 text-xl font-bold">
                  {Click == "0"
                    ? "Drinking water is essential"
                    : Click == "2"
                    ? "Drinking water is essential"
                    : Click == "6"
                    ? "You drink water more than 50% of users*"
                    : Click == "10"
                    ? "Wow! Impressive!"
                    : "Wow! Impressive!"}
                  
                </h2>
              </div>
              <p className="text-gray-100 text-sm my-2">
                {Click == "0"
                  ? "If you're not hydrated, your body can't perform at its highest level. MadMuscles will remind you to drink enough water."
                  : Click == "2"
                  ? "If you're not hydrated, your body can't perform at its highest level. MadMuscles will remind you to drink enough water."
                  : Click == "6"
                  ? "Just Gyym will remind you to drink enough water."
                  : Click == "10"
                  ? "You drink water more than 75% of users*. Keep it up!"
                  : "You drink water more than 92% of users*. Keep it up!"}
              </p>
            </div>
          )}
           {Show && (
            <p className="text-sm text-stone-400 w-[90%] md:w-[40%] lg:w-[25%] mx-auto my-7">
              *users of MadMuscles who took the quiz
            </p>
          )}
        </div>
        {!Show && (
          <div onClick={handleClick1}>
            <Button dis={Click.length > 0 ? false : true} text={"Continue"} />
          </div>
        )}
        {Show && (
          <Link href={`${Click.length > 0 ? "/meal-prep-time" : ""}`}>
            <div onClick={() => Cookies.set("water", Click)}>
              <Button dis={Click.length > 0 ? false : true} text={"Got it"} />
            </div>
          </Link>
        )}
      </Animator>
    </>
  );
};

export default Water;
