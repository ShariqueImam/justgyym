import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { TbGlassFull } from "react-icons/tb";
import Image from "next/image";
const style = {
  wrapper: "my-12 md:my-28 w-[95%] md:w-[55%] mx-auto font-bold",
  container: "mx-auto mt-16 bg-[#2a2a2a] px-5 md:px-12 py-8   font-bold",
  container1:
    "mx-auto my-1 py-3 flex flex-col md:flex-row items-center justify-center font-bold",
  side: "bg-[#2a2a2a] mx-2 flex flex-col pb-6 w-[100%] my-3 font-bold h-[28vh] md:h-[38vh]",
};

function valuetext(value) {
  return `${value}°C`;
}
const Summary = () => {
  // getting height in meter
  const [Height, setHeight] = useState(
    Cookies.get("height") ? Cookies.get("height") : "0"
  );
  const [Goal, setGoal] = useState(Cookies.get("goal") || "");
  const [Weight, setWeight] = useState(Cookies.get("target-weight") || "");
  const [WeightUnit, setWeightUnit] = useState(
    Cookies.get("target-weight-unit") || ""
  );
  const [Calorie, setCalorie] = useState("");

  const [BMI, setBMI] = useState("");
  let controller = Math.random() * 50;
  useEffect(() => {
    if (WeightUnit == "kg") {
      setWeight(Weight);
    }
    if (WeightUnit == "lb") {
      setWeight(Weight * 2.2);
    }
  }, []);
  useEffect(() => {
    let a = +Weight / (+Height * +Height);
    a = a.toFixed(1);
    setBMI(a);
  }, [Weight]);
  setTimeout(() => {
    setBMI((prev) => prev);
  }, 1000);

  // calculating the calories
  useEffect(() => {
    console.log(Goal);
    if (Goal == "Lose Weight" || Goal == "Get Shredded") {
      if (Weight < 65) {
        setCalorie(1553);
      } else if (Weight > 65 && Weight < 74) {
        setCalorie(1756);
      } else if (Weight > 74 && Weight < 84) {
        setCalorie(1960);
      } else if (Weight > 84) {
        setCalorie(2209);
      }
    }
    if (Goal == "Gain Weight") {
      if (Weight < 65) {
        setCalorie(2601);
      } else if (Weight > 65 && Weight < 74) {
        setCalorie(2923);
      } else if (Weight > 74 && Weight < 84) {
        setCalorie(3343);
      } else if (Weight > 84) {
        setCalorie(3754);
      }
    }
  }, [Weight, Goal]);

  return (
    <div className={style.wrapper} style={{ fontFamily: "Inter, sans-serif" }}>
      <h2 className="text-3xl md:text-5xl text-[#ffffff] font-bold">
        Personal summary based on your answers
      </h2>
      <div className={style.container}>
        <p className="text-[#ffffff] text-lg md:text-xl font-bold">
          Current BMI
        </p>
        <h1 className="text-[#ffffff] text-lg md:text-3xl font-bold">
          {BMI} BMI
        </h1>
        <div className="mt-8 md:mt-8 flex items-center justify-center font-bold">
          {BMI && (
            <input
              type="range"
              min={0}
              max={10}
              step={1}
              value={
                BMI < 18.4
                  ? 2
                  : BMI > 18.5 && BMI < 24.9
                  ? 5
                  : BMI > 25 && BMI < 39.89
                  ? 7
                  : 9
              }
              className="slider1"
              disabled
            />
          )}
        </div>
        <div className="flex items-center justify-between font-bold mt-2">
          <h2 className="text-[#ffffff] font-bold">Underwight</h2>
          <h2 className="text-[#ffffff] font-bold">Obese</h2>
        </div>
        <div>
          <h2 className="text-[#ff4400] text-2xl mt-8 font-bold"> BMI</h2>
          <p className="text-[#ffffff] mt-4 font-semibold">
            The body mass index (BMI) is a measure that uses your height and
            weight to work out if your weight is healthy.
          </p>
        </div>
      </div>
      {/* adding the next two boxes */}
      <div className={style.container1}>
        <div className={style.side}>
          <div className="flex flex-col mb-6 font-bold">
            <div className="border-2 border-[#ff4400] max-w-fit px-6 text-xs text-[#ff4400] py-1 ml-auto font-normal  mb-3">
              recommended
            </div>
            <div className="flex px-4">
              <h2 className="text-4xl md:text-5xl font-bold border-2 border-stone-500 px-3 py-3">
                🍔
              </h2>
              <div className="flex flex-col items-center justify-center mx-6 font-bold">
                <h2 className="text-[#ffffff] text-lg font-bold">
                  Daily calorie intake
                </h2>
                <p className="text-[#ffffff] text-2xl font-bold">
                  {Calorie}
                   Kcal
                </p>
              </div>
            </div>
          </div>
          <div className="flex my-1 font-bold flex items-center justify-between flex-col px-4">
            <input
              type="range"
              min={1000}
              max={5000}
              step={200}
              value={
                controller < 20
                  ? 1880
                  : (controller > 20) & (controller < 40)
                  ? 2540
                  : 3210
              }
              className="slider"
              disabled
            />
            <div className="flex items-center justify-between w-[100%] font-normal mt-2">
              <p className="text-[#ffffff]">1000kcal</p>
              <p className="text-[#ffffff]">5000kcal</p>
            </div>
          </div>
        </div>
        <div className={style.side}>
          <div className="flex flex-col mb-6 font-bold">
            <div className="border-2 border-[#ff4400] max-w-fit px-6 text-xs text-[#ff4400] py-1 ml-auto font-normal mb-3">
              recommended
            </div>
            <div className="flex px-4 py-1">
              <h2 className="text-4xl md:text-5xl border-2 border-stone-500 px-3 py-3">
                💧
              </h2>
              <div className="flex flex-col items-center justify-center mx-8 font-bold">
                <h2 className="text-[#ffffff] text-lg font-bold">
                  Daily Water intake
                </h2>
                <p className="text-[#ffffff] text-2xl font-bold">
                  {controller < 10
                    ? 2.1
                    : (controller > 10) & (controller < 30)
                    ? 2.3
                    : (controller > 30) & (controller < 50)
                    ? 2.4
                    : 2.6}
                  L
                </p>
              </div>
            </div>
          </div>
          <div className="flex my-1 mx-auto pb-3">
            <Image src={"/glass_full.svg"} height={50} width={50} />
            <Image src={"/glass_full.svg"} height={50} width={50} />
            <Image src={"/glass_full.svg"} height={50} width={50} />
            <Image src={"/glass_full.svg"} height={50} width={50} />
            <Image src={"/glass_full.svg"} height={50} width={50} />
            <Image src={"/glass_empty.svg"} height={50} width={50} />
            <Image src={"/glass_empty.svg"} height={50} width={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;

{
  /* <TbGlassFull className="text-3xl text-blue-300" />
            <TbGlassFull className="text-3xl text-blue-300" />
            <TbGlassFull className="text-3xl text-blue-300" />
            <TbGlassFull className="text-3xl text-blue-300" />
            <TbGlassFull className="text-3xl text-blue-300" />
            <TbGlassFull className="text-3xl text-gray-300" />
            <TbGlassFull className="text-3xl text-gray-300" /> */
}
