import React, { useState } from "react";
import SingleCounter from "./SingleCounter";
import { TailSpin } from "react-loader-spinner";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Test from "./Test";
const style = {
  singleContainer: "flex flex-col items-center justify-center",
  counterText: "text-gray-200 text-md sm:text-lg md:text-xl my-4",
};
const Counter = (props) => {
  const [Time, setTime] = useState(0);
  setTimeout(() => {
    setTime(1);
  }, 3500);

  return (
    <div className={style.counterContainer}>
      <div className={style.singleContainer}>
        {/* <TailSpin height="100" width="100" color="#ea580c" ariaLabel="loading" /> */}
        {/* <SingleCounter
          start={props.min}
          end={props.max}
          duration={3}
          ending={props.end}
        /> */}
        <Test ending={props.end} />
        {Time == 0 && (
          <p className={style.counterText} style={{ fontWeight: 500 }}>
            Analyzing Data
          </p>
        )}
        {Time == 1 && (
          <p className={style.counterText} style={{ fontWeight: 500 }}>
            Measuring Body Profiles
          </p>
        )}
      </div>
    </div>
  );
};

export default Counter;
