import React, { useState, useEffect } from "react";

import Image from "next/image";
// import { Parallax } from "react-scroll-parallax";
const style = {
  wrapper: "",
  container: "w-[95%] md:w-[43%] mx-auto flex ",
  left: "w-[95%] md:w-[50%] mx-auto",
  right: "w-[95%] md:w-[45%] mx-auto flex items-center justify-center",
  singleGet: "my-24 flex flex-col items-center md:items-start",
  text: "text-[#ffffff] text-xl md:text-xl my-8  font-extrabold",
};
const Get = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={style.wrapper} style={{ fontFamily: "Inter,sans-serif" }}>
      <h2 className="text-3xl md:text-5xl text-[#ffffff] font-bold text-center font-bold ">
        What you get:
      </h2>
      <div className={style.container}>
        <div className={style.left}>
          {/* <Parallax speed={10}> */}
          <div className={style.singleGet}>
            <Image src={"/svg/0.svg"} height={50} width={50} />
            <h2 className={style.text}>Personalized workout program</h2>
          </div>
          <div className={style.singleGet}>
            <Image src={"/svg/2.svg"} height={50} width={50} />
            <h2 className={style.text}>
              Clear and easy to follow workout plan
            </h2>
          </div>
          <div className={style.singleGet}>
            <Image src={"/svg/3.svg"} height={50} width={50} />
            <h2 className={style.text}>Visible results after first month</h2>
          </div>

          <div className={style.singleGet}>
            <Image src={"/svg/1.svg"} height={50} width={50} />
            <h2 className={style.text}>Progress tracking and analysis</h2>
          </div>
          {/* </Parallax> */}
        </div>
        {/* adding the phone */}
        <div className={style.right}>
          <Image src={"/edited.png"} width={200} height={500} />
        </div>
      </div>
    </div>
  );
};

export default Get;
