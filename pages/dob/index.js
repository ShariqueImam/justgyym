import React, { useState } from "react";
import { MainHeading, SmallHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import Link from "next/link";
import Animator from "../../components/UI/Animator";
import Cookies from "js-cookie";
import ProgressBar1 from "../../components/ProgressBar/ProgressBar1";

const style = {
  wrapper: "flex flex-col my-8",
  container: "w-[90%] md:w-[40%] lg:w-[25%] mx-auto my-6 md:my-2",
  input:
    "my-3 ring-none outline-none px-5 py-2 bg-transparent border-[1px] border-stone-600 placeholder:text-stone-300 w-[100%] text-gray-200 bg-stone-800",
};

const DOB = () => {
  const [dob, setDob] = useState(Cookies.get("dob") ? Cookies.get("dob") : "");

  const dobChangeHandler = (e) => {
    setDob(e.target.value);
  };
  const handleClick = () => {
    Cookies.set("dob", dob);
    setDob("");
  };

  return (
    <>
      {/* <ProgressBar scrollLength={"96%"} val={24} /> */}
      <Animator>
        <div className={style.wrapper}>
          <div className="bg-stone-800 w-[90%] md:w-[40%] lg:w-[25%] mx-auto py-3">
            <p className="font-thin text-gray-50 tracking-wide text-lg md:text-md my-1 mx-5 text-left md:text-center">
              ✅ Your workout and meal plan are almost ready!
            </p>
          </div>
          <h2 className="w-[70%] md:w-[75%] lg:w-[45%] mx-auto text-gray-50 text-3xl md:text-3xl lg:text-4xl mx-5 md:mx-auto text-left md:text-center my-5 font-bold">
            Let's create your account
          </h2>
          <div className={style.container}>

          <ProgressBar1 scrollLength={"100%"} val={2} />
          </div>

          <div
            className={style.container}
            style={{ fontFamily: "Inter,sans-serif" }}
          >
            <label htmlFor="name" className="text-gray-200 my-4">
              What is your date of birth?
            </label>
            <input
              id="name"
              type="text"
              placeholder="DD/MM/YEAR"
              className={style.input}
              value={dob}
              onChange={dobChangeHandler}
            />
          </div>
          <Link href={`${dob.length > 0 ? "/email" : ""}`}>
            <div onClick={handleClick}>
              <Button dis={dob.length > 0 ? false : true} text={'Continue'}/>
            </div>
          </Link>
        </div>
      </Animator>
    </>
  );
};

export default DOB;
