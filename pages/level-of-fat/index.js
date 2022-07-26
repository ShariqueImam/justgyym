import React, { useState } from "react";
import { MainHeading } from "../../components/UI/Heading";
import Image from "next/image";
import Animator from "../../components/UI/Animator";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { Button } from "../../components/UI/Button";
import Link from "next/link";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Cookies from "js-cookie";
const style = {
  wrapper: "flex flex-col md:flex-row mt-12",
  left: "w-[100%] md:w-[50%] flex items-start justify-center mt-4 ",
  right:
    "w-[100%] md:w-[50%] bg-neutral-900 h-[35vh] md:h-[80vh] flex items-start justify-start md:px-8 lg:p-12",
};
function valuetext(value) {
  return `${value}°C`;
}
const LevelOfFat = () => {
  const [value, setValue] = useState(5);
  const handleChange = (e, value, a) => {
    setValue(value);
  };
  return (
    <>
      <ProgressBar scrollLength={"12%"} val={3} link="/body-type" />
      <Animator>
        <div
          className={style.wrapper}
          style={{ fontFamily: "Inter,sans-serif" }}
        >
          <div className={style.left}>
            <Image src={`/Fat/${value}.webp`} width={250} height={490} />
            {/* <Image src={`/Fat/bg.svg`} width={250} height={490} /> */}
          </div>
          <div className={style.right}>
            <div className="">
              <MainHeading text={"Choose your level of body fat"} />
              {/* slide */}
              <div className="my-8 md:my-24 mx-auto flex flex-col items-center justify-center">
                <Box sx={{ width: 300 }}>
                  <Slider
                    aria-label="Fat"
                    defaultValue={5}
                    getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
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
