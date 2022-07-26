import React, { useState,useEffect } from "react";
import { MainHeading } from "../../components/UI/Heading";
import { BasicCard } from "../../components/UI/BasicCard";
import { BasicCard4 } from "../../components/UI/BasicCard4";
import { Button } from "../../components/UI/Button";
import Animator from "../../components/UI/Animator";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Link from "next/link";
import Cookies from "js-cookie";
const Workouts = (props) => {
  const [Click, setClick] = useState([]);
  props.which("home1");

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
  useEffect(() => {
    window.scrollBy(0, -65);
  }, []);
  return (
    <>
      <ProgressBar scrollLength={"32%"} val={9} link="/loh" />
      <div className="w-[95%] md:w-[39%] lg:w-[36%] mx-auto">
        <div>
          <div className="w-[95%] md:w-[80%]">
            <MainHeading text={"What sports are you interested in?"} />
          </div>
          <div onClick={() => handleClick("gym")}>
            <BasicCard
              cardText="Gym Workouts"
              isClick={Click.includes("gym") ? true : false}
            />
          </div>
          <div onClick={() => handleClick("home")}>
            <BasicCard
              cardText="Workouts at home"
              isClick={Click.includes("home") ? true : false}
            />
          </div>
          <div onClick={() => handleClick("boxing")}>
            <BasicCard
              cardText="Boxing"
              isClick={Click.includes("boxing") ? true : false}
            />
          </div>
          <div onClick={() => handleClick("martialarts")}>
            <BasicCard
              cardText="Other martial arts"
              isClick={Click.includes("martialarts") ? true : false}
            />
          </div>
          <div onClick={() => handleClick("jogging")}>
            <BasicCard
              cardText="Jogging"
              isClick={Click.includes("jogging") ? true : false}
            />
          </div>
          <p className="border-t-[1px] border-stone-500 mx-auto"></p>
          <div onClick={() => handleClick("none")}>
            <BasicCard4
              cardText="None of the above"
              isClick={Click.includes("none") ? true : false}
            />
          </div>

          <Link href={`${Click.length > 0 ? "/workout-issue" : ""}`}>
            <div onClick={() => Cookies.set("workouts", JSON.stringify(Click))} className="fixed bottom-[0px] left-[0px] md:relative border-t-[2px] w-[100vw] px-4 md:w-auto md:border-none border-stone-700 bg-[#1e1e1e] md:bg-transparent ">
              <Button dis={Click.length > 0 ? false : true} text={"Continue"} />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Workouts;
