import React from "react";
import SingleCounter from "./SingleCounter";
import { Puff } from "react-loader-spinner";

const style = {
  singleContainer: "flex flex-col items-center justify-center",
  counterText: "text-gray-200 text-md sm:text-lg md:text-xl my-4 fading",
};
const Counter = (props) => {
  return (
    <div className={style.counterContainer}>
      <div className={style.singleContainer}>
        <Puff height="100" width="100" color="#ea580c" ariaLabel="loading" />
        <SingleCounter start={props.min} end={props.max} duration={2} ending={props.end}/>
        <p className={style.counterText}>Preparing your plans</p>
      </div>
    </div>
  );
};

export default Counter;
