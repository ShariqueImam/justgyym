import React, { useState, useEffect } from "react";
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
    " my-4 ring-none outline-none px-5 py-3 border-[1px] bg-[#1E1E1E] placeholder:text-neutral-400 placeholder:font-thin w-[100%] text-[#ffffff] placeholder:text-neutral-400 text-lg",
  height: "text-gray-200 my-4 mx-6",
};
const TargetWeight = (props) => {
  const [Show, setShow] = useState(false);
  const [Unit, setUnit] = useState("kg");
  const [target, setTarget] = useState("");
  const [current, setCurrent] = useState("");
  const targetChangeHandler = (e) => {
    setTarget(e.target.value);
  };
  const currentChangeHandler = (e) => {
    setCurrent(e.target.value);
  };
  props.which('home1')

  const valid1 = /^[0-9]+$/.test(target) && +target < 200 ;
  const valid2 = /^[0-9]+$/.test(current) && +current < 200;
  const handleClick = () => {
    if (Unit === "lb") {
      Cookies.set("target-weight", target * 0.453592);
    } else {
      Cookies.set("target-weight", target);
    }
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
      <div className="w-[95%] md:w-[39%] lg:w-[36%] mx-auto">
        <Animator>
          <MainHeading text={"What's your current and target weight?"} />
          <div
            className={style.container}
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {/* UNITS  */}
            <div className="flex my-12 items-center justify-center">
              <h2 className="text-[#8d8d8d] flex-1">Units</h2>
              <div className="flex items-center justify-center">
                <h2
                  className={`text-[#ffffff] bg-[#212121] px-4 py-2 mx-1 border-[1px] border-transparent cursor-pointer hover:border-orange-600 font-bold ${
                    Unit === "lb" && "border-orange-600"
                  }`}
                  onClick={() => handleUnit("lb")}
                >
                  lb
                </h2>
                <h2
                  className={`text-[#ffffff] bg-[#212121] px-4 py-2 mx-1 border-[1px] border-transparent cursor-pointer hover:border-orange-600 font-bold${
                    Unit === "kg" && "border-orange-600"
                  }`}
                  onClick={() => handleUnit("kg")}
                >
                  kg
                </h2>
              </div>
            </div>
            <div className="my-12">
              <label
                htmlFor="current"
                className="text-[#ffffff] text-lg"
                style={{ fontWeight: 400 }}
              >
                Current Weight({`${Unit === "lb" ? "lb" : "kg"}`})
              </label>
              <input
                type="text"
                id="current"
                placeholder={`${Unit === "lb" ? "_lb" : "_kg"}`}
                className={style.input}
                value={current}
                onChange={currentChangeHandler}
              />
              <p
                className={`${
                  valid2 || !Show ? "hidden" : "flex"
                }  text-red-500`}
              >
                Weight must be less than or equal to 200 kg
              </p>
            </div>
            <div className="my-12">
              <label
                htmlFor="target"
                className="text-[#ffffff] text-lg"
                style={{ fontWeight: 400 }}
              >
                Target Weight({`${Unit === "lb" ? "lb" : "kg"}`})
              </label>
              <input
                type="text"
                id="target"
                placeholder={`${Unit === "lb" ? "_lb" : "_kg"}`}
                className={style.input}
                value={`${target}`}
                onChange={targetChangeHandler}
                style={{fontFamily:'Inter,sans-serif'}}
              />
              <p
                className={`${
                  valid1 || !Show ? "hidden" : "flex"
                }  text-red-500`}
              >
                Weight must be less than or equal to 200 kg
              </p>
            </div>
            {/* adding the thanks page */}
            {Show && target === current && valid1 && valid2 && (
              <div
                className="bg-[#2563eb] px-5 py-3"
                style={{ fontFamily: "Inter,sans-serif" }}
              >
                <div className="flex items-center">
                  <BiClipboard className="text-[#ffffff] text-xl " />
                  <h2 className="text-[#ffffff] mx-2 text-xl font-bold">
                    Great!
                  </h2>
                </div>
                <p className="text-[#ffffff] text-sm my-2 font-thin">
                  We’re glad to see you’re already at your ideal weight.
                  MadMuscles can help to have a better quality of your body
                </p>
              </div>
            )}
          </div>
          {/* BUTTON THAT WILL BE DISPLAYED UPON CONDITION */}
          {target === current && (
            <div>
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
            </div>
          )}
          {target !== current && (
            <Link href={`${valid1 && valid2 ? "/level-of-fitness" : ""}`}>
              <div
                onClick={handleClick1}
                className={`${Show ? "mt-4" : "mt-36"} md:mt-4`}
              >
                <Button
                  dis={target.length > 0 ? false : true}
                  text={"Continue"}
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
