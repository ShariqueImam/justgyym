import React, { useState } from "react";
import { MainHeading } from "../../components/UI/Heading";
import { BasicCard } from "../../components/UI/BasicCard";
import { Button } from "../../components/UI/Button";
import Animator from "../../components/UI/Animator";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Link from "next/link";
import Cookies from "js-cookie";
const Workouts = () => {
  const [Click, setClick] = useState([]);

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

  return (
    <>
      <ProgressBar scrollLength={"32%"} val={8} link="/loh"/>

      <Animator>
        <MainHeading text={"What sports are you interested in?"} />
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
        <p className="border-t-[1px] border-stone-500 w-[90%] md:w-[40%] lg:w-[25%] mx-auto"></p>
        <div onClick={() => handleClick("none")}>
          <BasicCard
            cardText="None of the above"
            isClick={Click.includes("none") ? true : false}
          />
        </div>

        <Link href={`${Click.length > 0? "/workout-issue" : ""}`}>
          <div onClick={() => Cookies.set("workouts", JSON.stringify(Click))}>
            <Button dis={Click.length > 0 ? false : true} text={'Continue'}/>
          </div>
        </Link>
      </Animator>
    </>
  );
};

export default Workouts;
