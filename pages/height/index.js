import React, { useState } from "react";
import { MainHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import Link from "next/link";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Cookies from "js-cookie";
import NumberFormat from "react-number-format";

const Height = (props) => {
  props.which("home1");
  const [Unit, setUnit] = useState("cm");
  const [height, setHeight] = useState(Cookies.get("height") || "");
  const [click, setClick] = useState(false);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let val = height.replace("cm", "");
  const valid =
    Unit === "cm"
      ? /^[0-9]+$/.test(val) && +val < 300 && +val > 100
      : (/^[0-9]+$/.test(height[0]) && +height[0] < 9 && +height[0] > 3) ||
        (/^[0-9]+$/.test(height[1]) && +height[1] < 9 && +height[1] > 3);

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
  const style = {
    wrapper: "flex flex-col",
    container: "",
    input: `bg-[#1E1E1E] my-4 ring-none outline-none px-5 py-3 bg-transparent border-[1px] placeholder:font-thin placeholder:text-neutral-400 w-[100%] text-[#ffffff] border-stone-500    ${
      !valid && click && "border-[#ec3e4f]"
    }`,
    height: "text-[#ffffff] my-8 mx-6",
  };

  return (
    <>
      <ProgressBar scrollLength={"16%"} val={5} link="/problem-area" />
      <div className="w-[95%] md:w-[39%] lg:w-[36%] mx-auto font-normal">
        <div className={style.wrapper}>
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
            <NumberFormat
              format={Unit == "ft" ? "# ft ## in" : false}
              value={height}
              thousandSeparator={true}
              suffix={"cm"}
              onValueChange={(values) => {
                const { formattedValue, value } = values;
                setHeight(formattedValue);
              }}
              className={style.input}
              placeholder={Unit == "cm" ? "_cm" : "_ft _in"}
            />
            {click && Unit === "cm" && (
              <p
                className={`${
                  valid ? "hidden" : "flex"
                }  text-[#ec3e4f] text-xs`}
                style={{ fontWeight: 400 }}
              >
                {" "}
                Height should be between 100cm and 300cm
              </p>
            )}
            {click && Unit === "ft" && (
              <p
                className={`${
                  valid ? "hidden" : "flex"
                }  text-[#ec3e4f] text-xs`}
                style={{ fontWeight: 400 }}
              >
                {" "}
                Height should be between 3ft and 9ft
              </p>
            )}
            {/* YOUR HEIGHT BUTTON   */}
          </div>
          <Link href={`${valid ? "/target-weight" : ""}`}>
            <div
              onClick={handleClick}
              className="md:bg-transparent fixed bottom-[0px] left-[0px] md:relative border-t-[2px] w-[100vw] px-4 md:w-auto md:border-none border-stone-700 bg-[#1e1e1e]"
            >
              <Button
                text={"Continue"}
                dis={height.length > 0 ? false : true}
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Height;
