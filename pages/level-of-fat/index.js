import React, { useState } from "react";
import useWindowSize from "../../components/hooks/windowSize";
import Image from "next/image";
import Animator from "../../components/UI/Animator";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { Button } from "../../components/UI/Button";
import Link from "next/link";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Cookies from "js-cookie";
const style = {
  wrapper: "flex flex-col md:flex-row",
  left: " w-[100%] md:w-[50%] flex items-center justify-center mt-4 ",
  right:
    " w-[100%] md:w-[50%] bg-[#191919] h-[50vh] md:h-[85vh] flex items-start justify-center md:justify-start md:px-8 lg:p-12",
};

function valuetext(value) {
  return `${value}-${value - 5}`;
}
const LevelOfFat = (props) => {
  const [value, setValue] = useState(
    Cookies.get("level-of-fat") ? +Cookies.get("level-of-fat") : 20
  );
  const handleChange = (e, value, a) => {
    setValue(value);
  };
  props.which("home");
  const { width } = useWindowSize();
  React.useEffect(() => {
    window.scrollBy(0, -65);
  }, []);
  return (
    <>
      <ProgressBar scrollLength={"12%"} val={3} link="/body-type" />
      <div className="">
        <div
          className={style.wrapper}
          style={{ fontFamily: "Inter,sans-serif" }}
        >
          <div className={style.left}>
            <Image
              src={`/Fat/${value}.${width > 700 ? "webp" : "png"}`}
              width={200}
              height={width > 700 ? 490 : 280}
            />
            {/* <Image src={`/Fat/bg.svg`} width={250} height={490} /> */}
          </div>
          <div className={style.right}>
            <div className="w-[70%] md:w-[78%]">
              <h2 className="text-2xl md:text-4xl text-gray-50 font-bold my-12">
                Choose your level of body fat
              </h2>
              {/* slide */}
              <div className="my-8 md:my-24 mx-auto flex flex-col items-center justify-center">
                <Box sx={{ width: "100%" }}>
                  <Slider
                    sx={{
                      color: "#ff4400",
                    }}
                    aria-label="Always-visible"
                    defaultValue={value}
                    getAriaValueText={valuetext}
                    valueLabelDisplay="on"
                    step={5}
                    marks
                    min={5}
                    onChange={handleChange}
                    max={40}
                    // color="warning"
                  />
                </Box>
                <div className="text-white flex w-[85%] md:w-[100%]">
                  <p className="flex-1">5-9%</p>
                  <p className=""> &gt;40%</p>
                </div>
              </div>
              <Link href={"/problem-area"}>
                {/* setting the cookies to the fat that is provided by the user */}
                <div
                  onClick={Cookies.set("level-of-fat", value)}
                  className="md:bg-transparent fixed bottom-[0px] left-[0px] md:relative border-t-[2px] w-[100vw] px-4 md:w-auto md:border-none border-stone-700 bg-[#1e1e1e]"
                >
                  <Button text={"Continue"} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LevelOfFat;
