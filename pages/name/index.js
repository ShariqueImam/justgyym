import React, { useState } from "react";
import { MainHeading, SmallHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import Link from "next/link";
import Animator from "../../components/UI/Animator";
import Cookies from "js-cookie";
import ProgressBar1 from "../../components/ProgressBar/ProgressBar1";
const style = {
  wrapper: "flex flex-col my-8",
  container: "my-6 md:my-2",
  input:
    "my-3 ring-none outline-none px-5 py-4 bg-transparent border-[1px] border-stone-600 placeholder:text-stone-500 w-[100%] text-gray-200 bg-stone-800",
};

const Name = () => {
  const [name, setName] = useState(
    Cookies.get("name") ? Cookies.get("name") : ""
  );
  const changeHandler = (e) => {
    setName(e.target.value);
  };
  const handleClick = () => {
    Cookies.set("name", name);
    setName("");
  };
  return (
    <>
      {/* <ProgressBar scrollLength={"92%"} val={23} /> */}
      <div className="w-[95%] md:w-[34%] lg:w-[33%] mx-auto">
        <Animator className={style.wrapper}>
          <div className="bg-stone-800 mx-auto py-3">
            <p className="font-thin text-gray-50 tracking-wide text-lg md:text-md my-1 mx-5 text-left md:text-center">
              ✅ Your workout and meal plan are almost ready!
            </p>
          </div>
          <h2 className=" mx-auto  text-gray-50 text-3xl md:text-3xl lg:text-4xl  my-5 font-bold">
            Let's create your account
          </h2>
          <div className={style.container}>
            <ProgressBar1 scrollLength={"33%"} val={1} />
          </div>

          <div
            className={style.container}
            style={{ fontFamily: "Inter,sans-serif" }}
          >
            <label htmlFor="name" className="text-gray-200 my-4">
              What should we call you?
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className={style.input}
              value={name}
              onChange={changeHandler}
            />
          </div>
          <Link href={`${name.length > 0 ? "/dob" : ""}`}>
            <div onClick={handleClick} className="mt-64 md:mt-2">
              <Button dis={name.length > 0 ? false : true} text={"Continue"} />
            </div>
          </Link>
        </Animator>
      </div>
    </>
  );
};

export default Name;
