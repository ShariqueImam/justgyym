import { ProfilePageJsonLd } from "next-seo";
import React, { useState, useEffect } from "react";
import { AiFillClockCircle } from "react-icons/ai";

const style = {
  wrapper:
    "bg-[#1e1e1e] flex items-center justify-center border-2 border-stone-500 flex-col px-8 py-3",
};
const Timer = (props) => {
  let initialMinute = 10;
  let initialSeconds = 0;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });
  {
    minutes == 0 && seconds == 0 && props.endTimer();
  }

  return (
    <div className={style.wrapper} style={{ fontFamily: "Inter,sans-serif" }}>
      <h2 className="text-[#ffffff] font-bold">Discount expires in:</h2>
      <div className="flex items-center justify-center text-[#ff4400]">
        <p>
          {minutes === 0 && seconds === 0 ? (
            <h1 className=" text-[#ff4400] font-bold text-xl md:text-2xl mx-3">
              {'00'}:{'00'}
            </h1>
          ) : (
            <h1 className=" text-[#ff4400] font-bold text-xl md:text-2xl mx-3">
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </h1>
          )}
        </p>
        <AiFillClockCircle className="text-xl" />
      </div>
    </div>
  );
};

export default Timer;
