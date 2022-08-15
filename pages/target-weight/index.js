import React, { useState, useRef, useEffect } from "react";
import { MainHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import Link from "next/link";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Cookies from "js-cookie";
import { BiClipboard } from "react-icons/bi";
import NumberFormat from "react-number-format";

const TargetWeight = (props) => {
  props.which("home1");
  React.useEffect(() => {
    window.scrollBy(0, -65);
  }, []);
  const messagesEndRef = useRef(null);

  const [Show, setShow] = useState(false);
  const [Unit, setUnit] = useState(
    Cookies.get("target-weight-unit") ? Cookies.get("target-weight-unit") : "kg"
  );
  const [target, setTarget] = useState(
    Cookies.get("target-weight") ? Cookies.get("target-weight") : ""
  );
  const [current, setCurrent] = useState(
    Cookies.get("current-weight") ? Cookies.get("current-weight") : ""
  );

  let val1 = current.replace("kg", "");
  val1 = val1.replace("lb", "");
  let val2 = target.replace("kg", "");
  val2 = val2.replace("lb", "");
  const valid1 =
    Unit == "kg"
      ? /^[0-9]+$/.test(val1) && +val1 < 200
      : /^[0-9]+$/.test(val1) && +val1 < 400;
  const valid2 =
    Unit == "kg"
      ? /^[0-9]+$/.test(val2) && +val2 < 200
      : /^[0-9]+$/.test(val2) && +val2 < 400;
  const handleClick = () => {
    Cookies.set("current-weight", val1);
    Cookies.set("target-weight", val2);
  };

  const handleClick1 = () => {
    setShow(true);
    Cookies.set("current-weight", val1);
    Cookies.set("target-weight", val2);
  };
  const handleUnit = (value) => {
    Cookies.set("target-weight-unit", value);
    setUnit((prev) => {
      if (value === prev) {
        return "";
      } else {
        return value;
      }
    });
    setTarget("");
    setCurrent("");
    setShow(false);
  };
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [Show]);
  const style = {
    wrapper: "flex flex-col",
    container: "mx-auto",
    input1: ` my-4 ring-none outline-none px-5 py-3 border-[1px] border-stone-500 bg-[#1E1E1E] placeholder:text-neutral-400 placeholder:font-thin w-[100%] text-[#ffffff] placeholder:text-neutral-400 text-lg ${
      !valid1 && Show && "border-[#ec3e4f]"
    }`,
    input2: ` my-4 ring-none outline-none px-5 py-3 border-[1px] border-stone-500 bg-[#1E1E1E] placeholder:text-neutral-400 placeholder:font-thin w-[100%] text-[#ffffff] placeholder:text-neutral-400 text-lg ${
      !valid2 && Show && "border-[#ec3e4f]"
    }`,
    height: "text-[#ffffff  ] my-4 mx-6",
  };
  return (
    <>
      <ProgressBar scrollLength={"20%"} val={6} link="/height" />
      <div
        className="w-[95%] md:w-[39%] lg:w-[36%] mx-auto"
        style={{ fontFamily: "Inter,sans-serif" }}
      >
        <div className="pb-24">
          <MainHeading text={"What's your current and target weight?"} />
          <div
            className={style.container}
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {/* UNITS  */}
            <div className="flex my-12 items-center justify-center">
              <h2 className="text-[#8d8d8d] flex-1 font-bold">Units</h2>
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
                  className={`text-[#ffffff] bg-[#212121] px-4 py-2 mx-1 border-[1px] border-transparent cursor-pointer hover:border-orange-600 font-bold ${
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
                className="text-[#ffffff] text-lg font-normal"
                style={{ fontWeight: 500 }}
              >
                Current Weight({`${Unit === "lb" ? "lb" : "kg"}`})
              </label>
              <NumberFormat
                value={current}
                thousandSeparator={true}
                placeholder={`${Unit === "lb" ? "_lb" : "_kg"}`}
                suffix={`${Unit === "lb" ? "lb" : "kg"}`}
                onValueChange={(values) => {
                  const { formattedValue, value } = values;
                  setCurrent(formattedValue);
                }}
                className={style.input1}
              />
              <p
                className={`font-normal ${
                  valid1 || !Show ? "hidden" : "flex"
                }  text-[#ec3e4f] text-xs`}
              >
                {Unit == "kg"
                  ? "Weight must be less than or equal to 200 kg"
                  : "Weight must be less than or equal to 400lb"}
              </p>
            </div>
            <div className="my-12">
              <label
                htmlFor="target"
                className="text-[#ffffff] text-lg font-normal"
                style={{ fontWeight: 500 }}
              >
                Target Weight({`${Unit === "lb" ? "lb" : "kg"}`})
              </label>
              <NumberFormat
                value={target}
                thousandSeparator={true}
                placeholder={`${Unit === "lb" ? "_lb" : "_kg"}`}
                suffix={`${Unit === "lb" ? "lb" : "kg"}`}
                onValueChange={(values) => {
                  const { formattedValue, value } = values;
                  setTarget(formattedValue);
                }}
                className={style.input2}
              />
              <p
                className={`${
                  valid2 || !Show ? "hidden" : "flex"
                }  text-[#ec3e4f] text-xs`}
              >
                {Unit == "kg"
                  ? "Weight must be less than or equal to 200 kg"
                  : "Weight must be less than or equal to 400lb"}
              </p>
            </div>
            {/* adding the thanks page */}
            {Show && target === current && valid1 && valid2 && (
              <div
                ref={messagesEndRef}
                className="bg-[#2563eb] px-5 py-3 mb-7 md:mb-1"
                style={{ fontFamily: "Inter,sans-serif" }}
              >
                <div className="flex items-center">
                  <BiClipboard className="text-[#ffffff] text-xl " />
                  <h2 className="text-[#ffffff] mx-2 text-xl font-bold">
                    Great!
                  </h2>
                </div>
                <p className="text-[#ffffff] text-sm my-2 font-normal ">
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
                  className="md:bg-transparent fixed bottom-[0px] left-[0px] md:relative border-t-[2px] w-[100vw] px-4 md:w-auto md:border-none border-stone-700 bg-[#1e1e1e]"
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
                    className="md:bg-transparent md:bg-transparent fixed bottom-[0px] left-[0px] md:relative border-t-[2px] w-[100vw] px-4 md:w-auto md:border-none border-stone-700 bg-[#1e1e1e]"
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
                className="md:bg-transparent fixed bottom-[0px] left-[0px] md:relative border-t-[2px] w-[100vw] px-4 md:w-auto md:border-none border-stone-700 bg-[#1e1e1e]"
              >
                <Button
                  dis={target.length > 0 ? false : true}
                  text={"Continue"}
                />
              </div>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default TargetWeight;
