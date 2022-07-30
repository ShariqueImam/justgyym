import React, { useState } from "react";
import { MainHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import Link from "next/link";
import Animator from "../../components/UI/Animator";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Cookies from "js-cookie";

const style = {
  wrapper: "flex flex-col",
  container: "mx-auto",
  input:
    "bg-[#1E1E1E] my-4 ring-none outline-none px-5 py-3 bg-transparent border-[1px] border-stone-500 placeholder:font-thin placeholder:text-neutral-400 w-[100%] text-[#ffffff]",
  height: "text-[#ffffff] my-8 mx-6",
};

const Height = (props) => {
  props.which("home1");
  const [Unit, setUnit] = useState("cm");
  const [height, setHeight] = useState("");
  const [click, setClick] = useState(false);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const valid =
    Unit === "cm"
      ? /^[0-9]+$/.test(height[0]) && +height < 300 && +height > 100
      : (/^[0-9]+$/.test(height[0]) && +height[0] < 9 && +height[0] > 3) ||
        (/^[0-9]+$/.test(height[1]) && +height[1] < 9 && +height[1] > 3);
  const heightChangeHandler = (e) => {
    console.log(e.target.value);
    // setHeight(e.target.value);
    if (Unit == "ft") {
      if (e.target.value.length < 9) {
        if (
          e.target.value.length < 9 &&
          e.target.length !== 1 &&
          e.target.length !== 7
        ) {
          setHeight(`${e.target.value}`);
        }
        if (e.target.value.length == 1) {
          setHeight(`${e.target.value} ft `);
        }
        if (e.target.value.length == 6) {
          setHeight(` ${e.target.value} in`);
        }
        if (e.target.value.length == 9) {
          setHeight((prev) => {
            if (prev.slice(-1) == "cm") {
              return prev.slice(0, -1);
            }
            return prev;
          });
        }
        if (e.target.value.length == 3) {
          setHeight((prev) => {
            if (prev.slice(-1) == "/") {
              return prev.slice(0, -1);
            }
            return prev;
          });
        }
      }
    } else {
      if (e.target.value.length == 0) {
        setHeight(e.target.value);
      }
      if (e.target.value.length == 1) {
        setHeight(e.target.value + "cm");
      }
      if (e.target.value.length == 3) {
        e.target.value = e.target.value.slice(0, -3);
        setHeight(e.target.value + "cm");
      }
    }
  };

  const handleClick = () => {
    if (Unit === "cm") {
      Cookies.set("height", height);
    } else {
      Cookies.set("height", height * 0.3048);
    }
    setClick(true);
  };
  const handleUnit = (value) => {
    setUnit((prev) => {
      if (value === prev) {
        return "";
      } else {
        return value;
      }
    });
    setHeight("");
  };
  return (
    <>
      <ProgressBar scrollLength={"16%"} val={5} link="/problem-area" />
      <div className="w-[95%] md:w-[39%] lg:w-[36%] mx-auto font-normal">
        <Animator className={style.wrapper}>
          <MainHeading text={"What's your height?"} />
          {/* the unit box */}
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
                    Unit === "ft" && "border-orange-600"
                  }`}
                  onClick={() => handleUnit("ft")}
                >
                  ft,in
                </h2>
                <h2
                  className={`text-[#ffffff] bg-[#212121] px-4 py-2 mx-1 border-[1px] border-transparent cursor-pointer hover:border-orange-600 font-bold ${
                    Unit === "cm" && "border-orange-600"
                  }`}
                  onClick={() => handleUnit("cm")}
                >
                  cm
                </h2>
              </div>
            </div>
            <label
              htmlFor="height"
              className="text-[#ffffff] my-4 text-lg font-bold"
              style={{ fontWeight: 600 }}
            >
              Height ({`${Unit == "cm" ? "cm" : "ft"}`})
            </label>
            <input
              id="height"
              type="text"
              placeholder={`${Unit === "cm" ? "__cm" : "__ft"}`}
              className={style.input}
              value={`${height}`}
              onChange={heightChangeHandler}
              style={{ fontFamily: "Inter,sans-serif" }}
            />
            {click && Unit === "cm" && (
              <p
                className={`${valid ? "hidden" : "flex"}  text-red-500`}
                style={{ fontWeight: 500 }}
              >
                {" "}
                Height should be between 100cm and 300cm
              </p>
            )}
            {click && Unit === "ft" && (
              <p
                className={`${valid ? "hidden" : "flex"}  text-red-500`}
                style={{ fontWeight: 500 }}
              >
                {" "}
                Height should be between 3ft and 9ft
              </p>
            )}
            {/* YOUR HEIGHT BUTTON   */}
            {/* 
            <h2 className={style.height}>
              Your Height: {height}
              {`${Unit === "cm" ? "cm" : "ft"}`}
            </h2> */}
          </div>
          <Link href={`${valid ? "/target-weight" : ""}`}>
            <div onClick={handleClick} className={`mt-72 md:mt-2`}>
              <Button
                text={"Continue"}
                dis={height.length > 0 ? false : true}
              />
            </div>
          </Link>
        </Animator>
      </div>
    </>
  );
};

export default Height;
