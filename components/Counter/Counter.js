import React, { useState } from "react";
import SingleCounter from "./SingleCounter";
import { Puff } from "react-loader-spinner";

const style = {
  singleContainer: "flex flex-col items-center justify-center",
  counterText: "text-gray-200 text-md sm:text-lg md:text-xl my-4",
};
const Counter = (props) => {
  const [Time, setTime] = useState(0);
  setTimeout(() => {
    setTime(1);
  }, 1500);
  
  return (
    <div className={style.counterContainer}>
      <div className={style.singleContainer}>
        <Puff height="100" width="100" color="#ea580c" ariaLabel="loading" />
        <SingleCounter
          start={props.min}
          end={props.max}
          duration={3}
          ending={props.end}
        />
        {Time==0 && <p className={style.counterText} style={{fontWeight:250}}>Analyzing Data</p>}
        {Time==1 && <p className={style.counterText} style={{fontWeight:250}}>Measuring Body Profiles</p>}
        
      </div>
    </div>
  );
};

export default Counter;
