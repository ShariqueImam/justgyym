import React, { useState } from "react";
import { MainHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import Link from "next/link";
import Animator from "../../components/UI/Animator";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Cookies from "js-cookie";
import { BiClipboard } from "react-icons/bi";
const style = {
  wrapper: "flex flex-col ",
  container: "mx-auto",
  input:
    "my-4 ring-none outline-none px-5 py-2 bg-transparent border-[1px] border-stone-600 placeholder:text-stone-300 w-[100%] text-gray-200 bg-stone-800",
  height: "text-gray-200 my-4 mx-6",
};
const TargetWeight = () => {
  const [Show, setShow] = useState(false);
  const [Unit, setUnit] = useState("lb");
  const [target, setTarget] = useState("");
  const [current, setCurrent] = useState("");
  const [click, setClick] = useState(false);

  const targetChangeHandler = (e) => {
    setTarget(e.target.value);
  };
  const currentChangeHandler = (e) => {
    setCurrent(e.target.value);
  };
  const valid1 = /^[0-9]+$/.test(target) && +target < 200 && +target > 40;

  const valid2 = /^[0-9]+$/.test(current) && +current < 200 && +current > 40;
  const handleClick = () => {
    if (Unit === "lb") {
      Cookies.set("target-weight", target * 0.453592);
    } else {
      Cookies.set("target-weight", target);
    }
    setClick(true);
  };
  const handleClick1 = () => {
    setShow(true);
  };
  const handleUnit = (value) => {
    setUnit((prev) => {
      if (value === prev) {
        return "";
      } else {
        return value;
      }
    });
  };
  return (
    <>
      <ProgressBar scrollLength={"20%"} val={6} link="/height" />
      <div className="w-[95%] md:w-[34%] lg:w-[32%] mx-auto">
        <Animator>
          <MainHeading text={"What's your current and target weight?"} />
          <div
            className={style.container}
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {/* UNITS  */}
            <div className="flex my-12 items-center justify-center">
              <h2 className="text-stone-400 flex-1">Units</h2>
              <div className="flex items-center justify-center">
                <h2
                  className={`text-stone-200 bg-stone-700 px-4 py-2 mx-1 border-[1px] border-transparent cursor-pointer hover:border-orange-600 ${
                    Unit === "lb" && "border-orange-600"
                  }`}
                  onClick={() => handleUnit("lb")}
                >
                  lb
                </h2>
                <h2
                  className={`text-stone-200 bg-stone-700 px-4 py-2 mx-1 border-[1px] border-transparent cursor-pointer hover:border-orange-600 ${
                    Unit === "kg" && "border-orange-600"
                  }`}
                  onClick={() => handleUnit("kg")}
                >
                  kg
                </h2>
              </div>
            </div>
            <div className="my-12">
              <label htmlFor="current" className="text-gray-200">
                Current Weight({`${Unit === "lb" ? "lb" : "kg"}`}):
              </label>
              <input
                type="text"
                id="current"
                placeholder={`${Unit === "lb" ? "_lb" : "_kg"}`}
                className={style.input}
                value={`${current}`}
                onChange={currentChangeHandler}
              />
              {click && (
                <p className={`${valid2 ? "hidden" : "flex"}  text-red-500`}>
                  {" "}
                  Weight should be between 40kg and 200kg
                </p>
              )}
            </div>
            <div className="my-12">
              <label htmlFor="target" className="text-gray-200">
                Target Weight({`${Unit === "lb" ? "lb" : "kg"}`}):
              </label>
              <input
                type="text"
                id="target"
                placeholder={`${Unit === "lb" ? "_lb" : "_kg"}`}
                className={style.input}
                value={`${target}`}
                onChange={targetChangeHandler}
              />
              {click && (
                <p className={`${valid1 ? "hidden" : "flex"}  text-red-500`}>
                  {" "}
                  Weight should be between 40kg and 200kg
                </p>
              )}
            </div>
            {/* adding the thanks page */}
            {Show && (
              <div className="bg-blue-600 px-5 py-3">
                <div className="flex items-center">
                  <BiClipboard className="text-gray-100 text-xl " />
                  <h2 className="text-gray-100 mx-2 text-xl font-bold">
                    Great!
                  </h2>
                </div>
                <p className="text-gray-100 text-sm my-2">
                  We’re glad to see you’re already at your ideal weight.
                  MadMuscles can help to have a better quality of your body
                </p>
              </div>
            )}
          </div>
          {!Show && (
            <div
              onClick={handleClick1}
              className={`${Show ? "mt-4" : "mt-36"} md:mt-4`}
            >
              <Button
                dis={target.length > 0 ? false : true}
                text={"Continue"}
              />
            </div>
          )}
          {Show && (
            <Link href={`${valid1 && valid2 ? "/level-of-fitness" : ""}`}>
              <div
                onClick={handleClick}
                className={`${Show ? "mt-4" : "mt-36"} md:mt-4`}
              >
                <Button
                  dis={target.length > 0 ? false : true}
                  text={"Got it"}
                />
              </div>
            </Link>
          )}
        </Animator>
      </div>
    </>
  );
};

export default TargetWeight;
