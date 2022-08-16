import React, { useState } from "react";
import { MainHeading, SmallHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import Link from "next/link";
import Animator from "../../components/UI/Animator";
import Cookies from "js-cookie";
import ProgressBar1 from "../../components/ProgressBar/ProgressBar1";
const style = {
  wrapper: "flex flex-col my-8 pb-12",
  container: "my-6 md:my-8",
  input:
    "my-3 ring-none outline-none px-5 py-3 bg-transparent border-[1px] border-stone-600 placeholder:font-thin placeholder:text-neutral-400 w-[100%] text-gray-200 bg-[#1E1E1E] text-lg focus:border-2 focus:border-orange-600",
};

const Name = (props) => {
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
  props.which('home1')
  React.useEffect(() => {
    window.scrollBy(0, -65);
  }, []);
  return (
    <>
      {/* <ProgressBar scrollLength={"92%"} val={23} /> */}
      <div className="w-[95%] md:w-[42%] lg:w-[33%] mx-auto mt-4" style={{fontFamily:'Inter,sans-serif'}}>
        <div className={style.wrapper}>
          <div className="bg-[#1e1e1e] mx-auto py-2 flex items-center mb-7">
            <p className="text-2xl ml-3">✅ </p>
            <p className="text-gray-50 tracking-wide text-lg md:text-md my-1 mx-5" style={{fontWeight:450}}>
              Your workout and meal plan are almost ready!
            </p>
          </div>
          <h2 className=" mx-auto text-gray-50 text-3xl md:text-3xl lg:text-4xl my-2 font-semibold">
            Let's create your account
          </h2>
          <div className={style.container}>
            <ProgressBar1 scrollLength={"33%"} val={1} />
          </div>

          <div
            className={style.container}
            style={{ fontFamily: "Inter,sans-serif" }}
          >
            <label htmlFor="name" className="text-gray-200 text-xl" style={{fontWeight:450}}>
              What should we call you?
            </label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              className={style.input}
              value={name}
              onChange={changeHandler}
              style={{fontWeight:400}}
            />
          </div>
          <Link href={`${name.length > 0 ? "/dob" : ""}`}>
            <div onClick={handleClick}  className="fixed bottom-[0px] left-[0px] md:relative border-t-[2px] w-[100vw] px-4 md:w-auto md:border-none border-stone-700 bg-[#1e1e1e] md:bg-transparent ">
              <Button dis={name.length > 0 ? false : true} text={"Continue"} />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Name;
