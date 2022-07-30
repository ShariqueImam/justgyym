import React from "react";
import Goal from "./Goal";
import Image from "next/image";
import "@djthoms/pretty-checkbox";
import Link from "next/link";
import { BiErrorCircle } from "react-icons/bi";
import useWindowSize from "../hooks/windowSize";
// text-[#FFF4ED]
const style = {
  wrapper:
    "w-[95%] md:w-[90%] lg:w-[80%] mx-auto my-12 flex flex-col md:flex-row text-[#ffffff]",
  left: "md:w-[50%] flex-1 flex flex-col",
  right: "md:w-[45%]",
  tag: "flex flex-col flex-1 w-[95%] md:w-[80%]",
  heading:
    "leading-[50px] md:leading-[60px] lg:leading-[60px] mx-3 font-extrabold text-4xl md:text-5xl lg:text-5xl w-[80%] md:w-[85%] lg:w-[80%] my-4 md:my-12 tracking-wide",
  para: "text-sm mx-3",
  allow: "hidden md:flex flex-col ",
  allow1: "flex items-center my-4 w-[90%] md:w-[70%]",
  allowSmall: "flex md:hidden flex-col p-4",
  checkbox: "bg-transparent accent-[#ff4400]  a mx-3",
  recommend: "text-xs text-[#8d8d8d] my-2",
};
const Home = (props) => {
  const { width } = useWindowSize();
  const handleClick = (value) => {
    props.goal(value);
  };
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [Error, setError] = React.useState(false);
  const [Touch, setTouch] = React.useState(false);
  const handleTouch = (val) => {
    console.log(val);
    setError((val && !checked1) || !checked2);
    setTouch(true);
  };
  const handle1 = () => {
    setError(!checked1 && !checked2);
    setChecked1((prev) => !prev);
  };
  const handle2 = () => {
    setError(!checked1 && !checked2);
    setChecked2((prev) => !prev);
  };
  return (
    <div className={style.wrapper}>
      <div className={style.left}>
        <div className={style.tag}>
          <h2
            className={style.heading}
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            BUILD YOUR PERFECT BODY
          </h2>
          <p className={style.para} style={{ fontFamily: "Inter, sans-serif" }}>
            Get a personalized workout program
          </p>
        </div>
        <div
          className={style.allow}
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <div className={style.allow1}>
            <div onClick={handle1}>
              {checked1 ? (
                <Image src={"/type/tt.png"} height={23} width={28} />
              ) : (
                <Image src={"/type/nn.png"} height={23} width={28} />
              )}
            </div>
            <div onClick={handle1} className="mx-4 text-xs md:text-xs">
              By continuing, I agree with{" "}
              <Link href="/info/terms">
                <span className="text-[#ff4400] cursor-pointer">
                  Terms of service
                </span>
              </Link>
              ,{" "}
              <Link href="/info/privacy">
                <span className="text-[#ff4400] cursor-pointer">
                  Privacy policy
                </span>
              </Link>
              ,{" "}
              <Link href="/info/refund">
                <span className="text-[#ff4400] cursor-pointer">
                  Refund policy
                </span>
              </Link>
              ,{" "}
              <Link href="/info/subscription">
                <span className="text-[#ff4400] cursor-pointer">
                  Subscription Terms
                </span>
              </Link>
              ,{" "}
              <Link href="/info/cookie">
                <span className="text-[#ff4400] cursor-pointer">
                  Cookie policy
                </span>
              </Link>
            </div>
          </div>
          <div className={style.allow1}>
            <div onClick={handle2}>
              {checked2 ? (
                <Image src={"/type/tt.png"} height={23} width={28} />
              ) : (
                <Image src={"/type/nn.png"} height={23} width={28} />
              )}
            </div>
            <div onClick={handle2} className="mx-4 text-xs md:text-xs">
              {" "}
              I would like to receive updates about products, services, and
              special offers from MadMuscles via email
            </div>
          </div>
          {Error && Touch && (
            <div className="bg-[#e22336] px-4 py-3 flex items-center justify-center max-w-fit my-2">
              <BiErrorCircle className="text-[#ffffff] text-3xl mr-3" />
              <p className="text-[#ffffff]">
                To continue, please accept our terms and policies
              </p>
            </div>
          )}
          <p className={style.recommend}>
            We recommend that you consult with your physician before beginning
            any exercise program
          </p>
          {/* for error of the home page */}
        </div>
      </div>

      <div className={style.right}>
        <Goal
          goal={handleClick}
          isTrue={checked1 && checked2}
          touch={handleTouch}
        />
      </div>
      <div className={style.allowSmall}>
        <div className={style.allow1}>
          <div onClick={handle1}>
            {checked1 ? (
              <Image
                src={"/type/tt.png"}
                height={width < 700 ? 45 : 23}
                width={width < 700 ? 45 : 28}
              />
            ) : (
              <Image
                src={"/type/nn.png"}
                height={width < 700 ? 45 : 23}
                width={width < 700 ? 45 : 28}
              />
            )}
          </div>
          <div onClick={handle1} className="mx-4">
            By continuing, I agree with{" "}
            <Link href="/info/terms">
              <span className="text-[#ff4400] cursor-pointer">
                Terms of service
              </span>
            </Link>
            ,{" "}
            <Link href="/info/privacy">
              <span className="text-[#ff4400] cursor-pointer">
                Privacy policy
              </span>
            </Link>
            ,{" "}
            <Link href="/info/refund">
              <span className="text-[#ff4400] cursor-pointer">
                Refund policy
              </span>
            </Link>
            ,{" "}
            <Link href="/info/subscription">
              <span className="text-[#ff4400] cursor-pointer">
                Subscription Terms
              </span>
            </Link>
            ,{" "}
            <Link href="/info/cookie">
              <span className="text-[#ff4400] cursor-pointer">
                Cookie policy
              </span>
            </Link>
          </div>
        </div>
        <div className={style.allow1}>
          <div onClick={handle2}>
            {checked2 ? (
              <Image
                src={"/type/tt.png"}
                height={width < 700 ? 45 : 23}
                width={width < 700 ? 45 : 28}
              />
            ) : (
              <Image
                src={"/type/nn.png"}
                height={width < 700 ? 45 : 23}
                width={width < 700 ? 45 : 28}
              />
            )}
          </div>
          <div onClick={handle2} className="mx-4">
            {" "}
            I would like to receive updates about products, services, and
            special offers from MadMuscles via email
          </div>
        </div>
        {Error && Touch && (
          <div className="bg-[#e22336] px-4 py-3 flex items-center justify-center">
            <BiErrorCircle className="text-[#ffffff] text-3xl mr-3" />
            <p className="text-[#ffffff]">
              To continue, please accept our terms and policies
            </p>
          </div>
        )}
        <p className={style.recommend}>
          We recommend that you consult with your physician before beginning any
          exercise program
        </p>
        {/* for error of the home page */}
      </div>
    </div>
  );
};

export default Home;
