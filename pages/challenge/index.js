import React, { useState } from "react";
import { MainHeading, SmallHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import { BasicCard1 } from "../../components/UI/BasicCard1";
import { BasicCard2 } from "../../components/UI/BasicCard2";
import Link from "next/link";
import Animator from "../../components/UI/Animator";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Cookies from "js-cookie";
const Challenge = (props) => {
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
  props.which("home1");
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ProgressBar scrollLength={"88%"} val={18} link="/products" />
      <div className="w-[95%] md:w-[41%] lg:w-[33%] mx-auto scroll-smooth">
        <div>
          <h2 className="text-[#ffffff] text-3xl md:text-3xl lg:text-4xl my-8 font-bold leading-[30px] md:leading-[35px] lg:leading-[45px]">In addition to your goal, what challenge would you like to join?</h2>
          <div
            onClick={() => handleClick("1")}
            style={{ fontFamily:  "Inter,sans-serif" }}
          >
            <BasicCard2
              cardText="No excuse! 😎"
              isClick={Click.includes("1") ? true : false}
              cardPara="Won't skip any of my workouts during the next 6 months"
            />
          </div>{" "}
          <div onClick={() => handleClick("30")}>
            <BasicCard1
              cardText="30 days without junk food! 🥑"
              isClick={Click.includes("30") ? true : false}
            />
          </div>{" "}
          <div onClick={() => handleClick("80")}>
            <BasicCard1
              cardText="80 Club: do 80 push-ups in one round! 😤"
              isClick={Click.includes("80") ? true : false}
            />
          </div>{" "}
          <div onClick={() => handleClick("100")}>
            <BasicCard1
              cardText="I’ll take on all the challenges! 🙌"
              isClick={Click.includes("100") ? true : false}
            />
          </div>{" "}

          {/* <p className="border-t-[1px] border-stone-500  mx-auto"></p> */}
          <div onClick={() => handleClick("none")}>
            <BasicCard1
              cardText="None of the above ❌"
              isClick={Click.includes("none") ? true : false}
            />
          </div>
          <Link href={`${Click.length > 0 ? "/name" : ""}`}>
            <div  className="fixed bottom-[0px] left-[0px] md:relative border-t-[2px] w-[100vw] px-4 md:w-auto md:border-none border-stone-700 bg-[#1e1e1e] md:bg-transparent "
              onClick={() => Cookies.set("challenge", JSON.stringify(Click))}
            >
              <Button dis={Click.length > 0 ? false : true} text={"Continue"} />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Challenge;
