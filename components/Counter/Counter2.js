import React, { useState } from "react";
import SingleCounter from "./SingleCounter";
import { Puff } from "react-loader-spinner";
import Test2  from "./Test2";
const style = {
  singleContainer: "flex flex-col items-center justify-center",
  counterText: "text-gray-200 text-md sm:text-lg md:text-xl my-4",
};
const Counter = (props) => {
  const [Time, setTime] = useState(0);
  setTimeout(() => {
    setTime(1);
  }, 3000);
  return (
    <div className={style.counterContainer}>
      <div className={style.singleContainer}>
        {/* <Puff height="100" width="100" color="#ea580c" ariaLabel="loading" />
        <SingleCounter
          start={props.min}
          end={props.max}
          duration={2}
          ending={props.end}
        /> */}
        <Test2 ending={props.end}/>
        {Time == 0 && (
          <p className={style.counterText} style={{ fontWeight: 500 }}>
            Meal Planning
          </p>
        )}
        {Time == 1 && (
          <p className={style.counterText} style={{ fontWeight: 500 }}>
            Your personalized workout plan is ready
          </p>
        )}
      </div>
    </div>
  );
};

export default Counter;
