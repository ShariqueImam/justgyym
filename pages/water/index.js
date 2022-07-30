import React, { useState } from "react";
import { MainHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import { BasicCard1 } from "../../components/UI/BasicCard1";
import { BasicCard2 } from "../../components/UI/BasicCard2";
import Link from "next/link";
import Animator from "../../components/UI/Animator";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Cookies from "js-cookie";
import { CgGlass } from "react-icons/cg";
const Water = (props) => {
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
  props.which('home1')
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ProgressBar scrollLength={"76%"} val={18} link="/level-hormone" />
      <div className="w-[95%] md:w-[34%] lg:w-[32%] mx-auto">
        <Animator>
          <MainHeading text="How much water do you drink daily?" />
          <div onClick={() => handleClick("0")}>
            <BasicCard1
              cardText="Only coffee or tea ☕️"
              isClick={Click === "0" ? true : false}
            />
          </div>{" "}
          <div onClick={() => handleClick("2")}>
            <BasicCard2
              cardText="Less than 2 glasses 💧 "
              isClick={Click === "2" ? true : false}
              cardPara="up to 0,5 l / 17 oz"
            />
          </div>{" "}
          <div onClick={() => handleClick("6")}>
            <BasicCard2
              cardText="2-6 glasses 💧💧"
              isClick={Click === "6" ? true : false}
              cardPara="0,5-1,5 l / 17-50 oz"
            />
          </div>{" "}
          <div onClick={() => handleClick("10")}>
            <BasicCard2
              cardText="7-10 glasses 💧💧💧"
              isClick={Click === "10" ? true : false}
              cardPara="1,5-2,5 l / 50-85 oz "
            />
          </div>{" "}
          <div onClick={() => handleClick("20")}>
            <BasicCard2
              cardText="More than 10 glasses 🐳 "
              isClick={Click === "20" ? true : false}
              cardPara="more than 2,5 l / 85 oz"
            />
            {Show && (
              <div
                className="bg-[#2563eb]  px-5 py-3 mx-auto"
                style={{ fontFamily: "Inter,sans-serif" }}
              >
                <div className="flex items-center">
                  <CgGlass className="text-gray-100 text-xl " />
                  <h2 className="text-gray-100 mx-2 text-lg font-bold">
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
                <p
                  className="text-gray-100 text-sm my-2 font-semibold"
                  style={{ fontWeight: 300 }}
                >
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
            {Show && Click !== "0" && Click !== "2" && (
              <p
                className="text-xs text-gray-100 mx-auto my-7 font-semibold"
                style={{ fontFamily: "Inter,sans-serif" }}
              >
                *users of JustGyym who took the quiz
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
      </div>
    </>
  );
};

export default Water;
