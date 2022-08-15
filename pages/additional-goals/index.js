import React, { useState } from "react";
import { SmallHeading, MainHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import { BasicCard } from "../../components/UI/BasicCard";
import { BasicCard4 } from "../../components/UI/BasicCard4";
import Animator from "../../components/UI/Animator";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Cookies from "js-cookie";
import Link from "next/link";
const AdditionalGoals = (props) => {
  props.which("home1");

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
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mb-32 md:mb-0" >
      <ProgressBar scrollLength={"44%"} val={10} link="/give-up" />
      <div className="w-[95%] md:w-[39%] lg:w-[36%] mx-auto">
        <div>
          <div className="w-[95%] md:w-[90%]">
            <SmallHeading text="We're sure you want not only a better body, but to improve your lifestyle too." />
            <MainHeading text="Tick your additional goals below:" />
          </div>
          <div
            onClick={() => handleClick("Improve sleep")}
            style={{ fontFamily: "Inter,sans-serif" }}
          >
            <BasicCard
              cardText={"Improve sleep"}
              isClick={Click.includes("Improve sleep") ? true : false}
            />
          </div>{" "}
          <div onClick={() => handleClick("Form a physical habit")}>
            <BasicCard
              cardText={"Form a physical habit"}
              isClick={Click.includes("Form a physical habit") ? true : false}
            />
          </div>{" "}
          <div onClick={() => handleClick("Self-discipline")}>
            <BasicCard
              cardText={"Self-discipline"}
              isClick={Click.includes("Self-discipline") ? true : false}
            />
          </div>{" "}
          <div onClick={() => handleClick("Feel more healthy")}>
            <BasicCard
              cardText={"Feel more healthy"}
              isClick={Click.includes("Feel more healthy") ? true : false}
            />
          </div>{" "}
          <div onClick={() => handleClick("Reduce Stress")}>
            <BasicCard
              cardText={"Reduce Stress"}
              isClick={Click.includes("Reduce Stress") ? true : false}
            />
          </div>{" "}
          <p className="border-t-[1px] border-stone-500 mx-auto"></p>
          <div onClick={() => handleClick("none")}>
            <BasicCard4
              cardText={"None of the above"}
              isClick={Click.includes("none") ? true : false}
            />
          </div>
          <Link href={`${Click.length > 0 ? "/attention" : ""}`}>
            <div
            className="fixed bottom-[0px] left-[0px] md:relative border-t-[2px] w-[100vw] px-4 md:w-auto md:border-none border-stone-700 bg-[#1e1e1e] md:bg-transparent "
              onClick={() =>
                Cookies.set("additional-goals", JSON.stringify(Click))
              }
            >
              <Button dis={Click.length > 0 ? false : true} text={"Continue"} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdditionalGoals;
