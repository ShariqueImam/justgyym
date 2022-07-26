import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import SingleCounter from "./SingleCounter";
import SingleCounter1 from "./SingleCounter1";
import Image from "next/image";
const style = {
  wrapper: "my-12 md:my-28 w-[85%] md:w-[48%] mx-auto font-bold",
  container: "mx-auto mt-10 bg-[#2a2a2a] px-3 md:px-7 py-4 font-bold",
  container1:
    " my-1 py-3 flex flex-col md:flex-row items-center justify-between font-bold",
  side: "bg-[#2a2a2a] flex flex-col pb-1 w-[100%] md:w-[48%] my-3 font-bold h-[22vh] md:h-[33vh]",
};
function valuetext(value) {
  return `${value}°C`;
}
const Summary = (props) => {
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
        <div className="flex">
          <div className="flex-1">
            <p className="text-[#ffffff] text-sm md:text-sm font-semibold">
              Current BMI
            </p>
            <h1 className="text-[#ffffff] text-lg md:text-3xl font-bold">
              <SingleCounter start={0} end={BMI} duration={2} />
            </h1>
          </div>
          <p onClick={() => props.handlePop()}>
            <AiOutlineExclamationCircle className="text-3xl text-gray-400 cursor-pointer" />
          </p>
        </div>
        <div className="mt-2 md:mt-2 flex items-center justify-center font-bold">
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
          <h2 className="text-[#ffffff] font-thin md:font-normal text-sm">
            Underweight
          </h2>
          <h2 className="text-[#ffffff] font-thin md:font-normal text-sm">
            Obese
          </h2>
        </div>
        {/* THIS NEEDS TO BE CHANGES ACCORDING TO THE BMI VALUE */}
        <div>
          {BMI <= 18.5 && (
            <h2 className="text-blue-600 text-md font-bold mt-3">
              Underweight
            </h2>
          )}
          {BMI > 18.5 && BMI < 24.9 && (
            <h2 className="text-green-600 text-md font-bold mt-3">Normal</h2>
          )}
          {BMI > 25 && BMI < 29.9 && (
            <h2 className="text-[#5a91c7] text-md font-bold mt-3">
              Slightly Overweight
            </h2>
          )}
          {BMI > 30 && BMI < 34.9 && (
            <h2 className="text-red-600 text-md font-bold mt-3">Overweight</h2>
          )}
          {BMI > 35 && (
            <h2 className="text-red-600 text-md font-bold mt-3">Obese</h2>
          )}

          <p
            className="text-[#ffffff] mt-0 font-normal text-xs"
            style={{ fontWeight: 350 }}
          >
            The body mass index (BMI) is a measure that uses your height and
            weight to work out if your weight is healthy.
          </p>
        </div>
      </div>
      {/* adding the next two boxes */}
      <div className={style.container1}>
        <div className={style.side}>
          <div className="flex flex-col mb-6 font-bold">
            <div className="border-[1px] border-[#ff7c4b] max-w-fit px-2 text-xs text-[#ff7c4b] py-0 ml-auto font-thin mb-2">
              recommended
            </div>
            <div className="flex px-4">
              <h2 className="text-3xl md:text-4xl font-bold border-2 border-neutral-700 px-3 py-3">
                🍔
              </h2>
              <div className="flex flex-col items-start justify-center mx-6 font-bold">
                <h2 className="text-[#ffffff] text-sm font-bold">
                  Daily calorie intake
                </h2>
                <p className="text-[#ffffff] text-2xl font-bold">
                  <SingleCounter1 start={0} end={Calorie} duration={2} />
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
            <div className="flex items-center justify-between w-[100%]  mt-2">
              <p className="text-[#ffffff] text-sm font-thin md:font-normal">
                1000kcal
              </p>
              <p className="text-[#ffffff] text-sm font-thin md:font-normal">
                5000kcal
              </p>
            </div>
          </div>
        </div>
        <div className={style.side}>
          <div className="flex flex-col mb-6 font-bold">
            <div className="border-[1px] border-[#ff7c4b] max-w-fit px-2 text-xs text-[#ff7c4b] py-0 ml-auto font-thin mb-3">
              recommended
            </div>
            <div className="flex px-4 py-1">
              <h2 className="text-3xl md:text-4xl border-2 border-neutral-700 px-3 py-3">
                💧
              </h2>
              <div className="flex flex-col items-start justify-center mx-8 font-bold">
                <h2 className="text-[#ffffff] text-sm font-bold">
                  Daily Water intake
                </h2>
                <p className="text-[#ffffff] text-2xl font-bold flex text">
                  {controller < 10
                    ? 2.1
                    : (controller > 10) & (controller < 30)
                    ? 2.3
                    : (controller > 30) & (controller < 50)
                    ? 2.4
                    : 2.6}
                  <p className="ml-1">l</p>
                </p>
              </div>
            </div>
          </div>
          <div className="flex my-1 mx-auto pb-3">
            <Image src={"/glass_full.svg"} height={35} width={35} />
            <Image src={"/glass_full.svg"} height={35} width={35} />
            <Image src={"/glass_full.svg"} height={35} width={35} />
            <Image src={"/glass_full.svg"} height={35} width={35} />
            <Image src={"/glass_full.svg"} height={35} width={35} />
            <Image src={"/glass_full.svg"} height={35} width={35} />
            <Image src={"/glass_empty.svg"} height={35} width={35} />
            <Image src={"/glass_empty.svg"} height={35} width={35} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
