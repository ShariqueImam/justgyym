import React, { useState, useEffect } from "react";

import Image from "next/image";
// import { Parallax } from "react-scroll-parallax";
const style = {
  wrapper: "",
  container: "w-[85%] md:w-[47%] mx-auto flex md:items-start",
  left: "w-[95%] md:w-[60%] mx-auto",
  right: "w-[95%] md:w-[45%] mx-auto flex items-center justify-center md:mt-24",
  singleGet: "my-24 flex flex-col items-start md:items-start",
  text: "text-[#ffffff] text-md md:text-xl my-8  font-extrabold",
};
const Get = () => {
  const [ShowImage, setShowImage] = useState("1");
  if (ShowImage === "1") {
    setTimeout(() => {
      setShowImage("2");
    }, 3000);
  }
  if (ShowImage === "2") {
    setTimeout(() => {
      setShowImage("3");
    }, 4000);
  }
  if (ShowImage === "3") {
    setTimeout(() => {
      setShowImage("4");
    }, 4000);
  }
  if (ShowImage === "4") {
    setTimeout(() => {
      setShowImage("5");
    }, 4000);
  }
  if (ShowImage === "5") {
    setTimeout(() => {
      setShowImage("6");
    }, 4000);
  }
  if (ShowImage === "6") {
    setTimeout(() => {
      setShowImage("7");
    }, 4000);
  }
  if (ShowImage === "7") {
    setTimeout(() => {
      setShowImage("8");
    }, 4000);
  }
  if (ShowImage === "8") {
    setTimeout(() => {
      setShowImage("9");
    }, 4000);
  }
  if (ShowImage === "9") {
    setTimeout(() => {
      setShowImage("10");
    }, 4000);
  }
  console.log(ShowImage);
  return (
    <div className={style.wrapper} style={{ fontFamily: "Inter,sans-serif" }}>
      <h2 className="text-3xl md:text-5xl text-[#ffffff] font-bold text-center font-bold ">
        What you get:
      </h2>
      <div className={style.container}>
        <div className={style.left}>
          {/* <Parallax speed={10}> */}
          <div className={style.singleGet}>
            <Image src={"/svg/0.svg"} height={60} width={60} />
            <h2 className={style.text}>Personalized workout program</h2>
          </div>
          <div className={style.singleGet}>
            <Image src={"/svg/2.svg"} height={60} width={60} />
            <h2 className={style.text}>
              Clear and easy to follow workout plan
            </h2>
          </div>
          <div className={style.singleGet}>
            <Image src={"/svg/3.svg"} height={60} width={60} />
            <h2 className={style.text}>Visible results after first month</h2>
          </div>

          <div className={style.singleGet}>
            <Image src={"/svg/1.svg"} height={60} width={60} />
            <h2 className={style.text}>Progress tracking and analysis</h2>
          </div>
          {/* </Parallax> */}
        </div>
        {/* adding the phone */}
        <div className={style.right}>
          {ShowImage == "1" && (
            <Image src={"/edited.png"} width={200} height={600} />
          )}
          {ShowImage == "3" && (
            <Image src={"/edited.png"} width={200} height={600} />
          )}
          {ShowImage == "5" && (
            <Image src={"/edited.png"} width={200} height={600} />
          )}
          {ShowImage == "7" && (
            <Image src={"/edited.png"} width={200} height={600} />
          )}
          {ShowImage == "9" && (
            <Image src={"/edited.png"} width={200} height={600} />
          )}
          {ShowImage == "2" && (
            <Image src={"/aaa.png"} width={200} height={600} />
          )}
          {ShowImage == "4" && (
            <Image src={"/aaa.png"} width={200} height={600} />
          )}
          {ShowImage == "6" && (
            <Image src={"/aaa.png"} width={200} height={600} />
          )}
          {ShowImage == "8" && (
            <Image src={"/aaa.png"} width={200} height={600} />
          )}
          {ShowImage == "10" && (
            <Image src={"/aaa.png"} width={200} height={600} />
          )}

          {/* {ShowImage == "2" ||
            ShowImage == "4" ||
            ShowImage == "6" ||
            ShowImage == "8" ||
            (ShowImage == "10" && (
              <Image src={"/aaa.png"} width={200} height={600} />
            ))} */}
        </div>
      </div>
    </div>
  );
};

export default Get;
