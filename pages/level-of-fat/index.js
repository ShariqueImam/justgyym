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
  const [value, setValue] = useState(20);
  const handleChange = (e, value, a) => {
    setValue(value);
  };
  props.which("home");
  const { width } = useWindowSize();
  return (
    <>
      <ProgressBar scrollLength={"12%"} val={3} link="/body-type" />
      <Animator>
        <div
          className={style.wrapper}
          style={{ fontFamily: "Inter,sans-serif" }}
        >
          <div className={style.left}>
            <Image src={`/Fat/${value}.${width>700?'webp':'png'}`} width={200} height={width>700?490:350} />
            {/* <Image src={`/Fat/bg.svg`} width={250} height={490} /> */}
          </div>
          <div className={style.right}>
            <div className="w-[50%]">
              <h2 className="text-2xl md:text-4xl text-gray-50 font-bold my-12">
                Choose your level of body fat
              </h2>
              {/* slide */}
              <div className="my-8 md:my-24 mx-auto flex flex-col items-center justify-center">
                <Box sx={{ width: "100%" }}>
                  <Slider
                    aria-label="Always-visible"
                    defaultValue={20}
                    getAriaValueText={valuetext}
                    valueLabelDisplay="on"
                    step={5}
                    marks
                    min={5}
                    onChange={handleChange}
                    max={40}
                    color="warning"
                  />
                </Box>
                <div className="text-orange-600 flex w-[85%] md:w-[65%]">
                  <p className="flex-1">5-9%</p>
                  <p className=""> &gt;40%</p>
                </div>
              </div>
              <Link href={"/problem-area"}>
                {/* setting the cookies to the fat that is provided by the user */}
                <div onClick={Cookies.set("level-of-fat", value)}>
                  <Button text={"Continue"} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Animator>
    </>
  );
};

export default LevelOfFat;
