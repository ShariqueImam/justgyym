import React, { useState } from "react";
import SingleCounter from "./SingleCounter";
import { Puff } from "react-loader-spinner";
import Test1 from "./Test1";
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
          duration={1.5}
          ending={props.end}
        /> */}
        <Test1 ending={props.end}/>
        {Time == 0 && (
          <p className={style.counterText} style={{ fontWeight: 500 }}>
            Building goal achievement path
          </p>
        )}
        {Time == 1 && (
          <p className={style.counterText} style={{ fontWeight: 500 }}>
            Suggesting workout wrogram
          </p>
        )}
        {/* {Time == 2 && (
          <p className={style.counterText} style={{ fontWeight: 500 }}>
            Meal planning
          </p>
        )}
        {Time == 3 && (
          <p className={style.counterText} style={{ fontWeight: 500 }}>
            Your personalized workout plan is ready
          </p>
        )} */}
      </div>
    </div>
  );
};

export default Counter;
