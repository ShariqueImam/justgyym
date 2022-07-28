import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { MainHeading } from "../../UI/Heading";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { MdFastfood } from "react-icons/md";
import { GiWaterDrop } from "react-icons/gi";
import { TbGlassFull } from "react-icons/tb";
const style = {
  wrapper: "my-12 md:my-28 w-[95%] md:w-[55%] mx-auto",
  container: "mx-auto mt-16 bg-[#212121] px-12 py-8 ",
  container1:
    "mx-auto my-4 py-8 flex flex-col md:flex-row items-center justify-center",
  side: "bg-[#212121] mx-2 px-4  flex flex-col py-6 w-[100%] my-3",
};

function valuetext(value) {
  return `${value}°C`;
}
const Summary = () => {
  const [Height, setHeight] = useState(1);
  const [Weight, setWeight] = useState(1);
  const [BMI, setBMI] = useState(0);
  useEffect(() => {
    setHeight(Cookies.get("height"));
    setWeight(Cookies.get("target-weight"));
  }, []);
  useEffect(() => {
    setBMI((+Weight / (0.01 * +Height * 0.01 * +Height)).toFixed(1));
  }, [Height, Weight]);

  return (
    <div
      className={style.wrapper}
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <h2 className="text-3xl md:text-5xl text-gray-50 font-semibold">Personal summary based on your answers</h2>
      <div className={style.container}>
        <p className="text-gray-400 text-lg md:text-xl">Current BMI</p>
        <h1 className="text-gray-100 text-lg md:text-3xl">{BMI} BMI</h1>
        <div className="mt-8 md:mt-8 w-[85%] md:w-[90%] mx-auto flex items-center justify-center">
          <Box sx={{ width: 650 }}>
            <Slider
              aria-label="Fat"
              defaultValue={
                Weight > 100 ? 6 : Weight < 100 && Weight > 80 ? 5 : 3
              }
              getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              step={1}
              min={1}
              max={9}
              color="warning"
              disabled
            />
          </Box>
        </div>
        <div className="w-[85%] md:w-[90%] mx-auto flex items-center justify-between">
          <h2 className="text-blue-600">Underwight</h2>
          <h2 className="text-red-600">Obese</h2>
        </div>
        <div>
          <h2 className="text-orange-600 text-2xl mt-8"> BMI</h2>
          <p className="text-gray-400 mt-4">
            The body mass index (BMI) is a measure that uses your height and
            weight to work out if your weight is healthy.
          </p>
        </div>
      </div>

      {/* adding the next two boxes */}
      <div className={style.container1}>
        <div className={style.side}>
          <div className="flex mb-6">
            <h2 className="text-4xl md:text-5xl">🍔</h2>
            <div className="flex flex-col items-center justify-center mx-8">
              <h2 className="text-gray-100 text-sm">Daily calorie intake</h2>
              <p className="text-gray-100 text-xl">2335 kcal</p>
            </div>
          </div>
          <div className="flex my-1 mx-auto py-[0.8rem]">
            <p className="w-[6vw] md:w-[1.5vw] bg-orange-500 h-[0.5vh] mx-1"></p>
            <p className="w-[6vw] md:w-[1.5vw] bg-orange-500 h-[0.5vh] mx-1"></p>
            <p className="w-[6vw] md:w-[1.5vw] bg-orange-500 h-[0.5vh] mx-1"></p>
            <p className="w-[6vw] md:w-[1.5vw] bg-orange-900 h-[0.5vh] mx-1"></p>
            <p className="w-[6vw] md:w-[1.5vw] bg-orange-900 h-[0.5vh] mx-1"></p>
          </div>
        </div>
        <div className={style.side}>
          <div className="flex mb-6">
            <h2 className="text-4xl md:text-5xl">💧</h2>
            <div className="flex flex-col items-center justify-center mx-8">
              <h2 className="text-gray-100 text-sm">Daily Water intake</h2>
              <p className="text-gray-100 text-xl">1.7L</p>
            </div>
          </div>
          <div className="flex my-1 mx-auto">
            <TbGlassFull className="text-3xl text-blue-600" />
            <TbGlassFull className="text-3xl text-blue-600" />
            <TbGlassFull className="text-3xl text-blue-600" />
            <TbGlassFull className="text-3xl text-blue-600" />
            <TbGlassFull className="text-3xl text-blue-600" />
            <TbGlassFull className="text-3xl text-gray-600" />
            <TbGlassFull className="text-3xl text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
