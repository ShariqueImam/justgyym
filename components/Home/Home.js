import React from "react";
import Goal from "./Goal";
import { Switch } from "pretty-checkbox-react";
import "@djthoms/pretty-checkbox";
import Link from "next/link";
// text-[#FFF4ED]
const style = {
  wrapper:
    " w-[95%] md:w-[80%] lg:w-[70%] mx-auto my-12 flex flex-col md:flex-row text-gray-200",
  left: "md:w-[50%] flex-1 flex flex-col",
  right: "md:w-[40%]",
  tag: "flex flex-col flex-1 mx-auto",
  heading:
    " text-5xl md:text-5xl lg:text-6xl mx-auto md:mx-0 w-[80%] md:w-[70%] my-4 md:my-12 tracking-wide",
  para: "text-sm text-center md:text-left",
  allow: "hidden md:flex flex-col ",
  allow1: "flex items-center my-4 w-[90%] md:w-[70%]",
  allowSmall: "flex md:hidden flex-col p-4",
  checkbox: "bg-transparent accent-orange-600  a mx-3",
  recommend: "text-xs text-stone-400 my-2",
};
const Home = (props) => {

  const handleClick = (value) => {
    props.goal(value);
  };
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);

  return (
    <div className={style.wrapper}  >
      <div className={style.left}>
     
        <div className={style.tag}>
          <h2 className={style.heading} style={{fontFamily:'Inter, sans-serif'}}>BUILD YOUR PERFECT BODY</h2>
          <p className={style.para} style={{fontFamily:'Inter, sans-serif'}}>Get a personalized workout program</p>
        </div>
        <div className={style.allow} style={{fontFamily:'Inter, sans-serif'}}>
          <div className={style.allow1}>
            <Switch
              bigger
              color="warning"
              shape="slim"
              state={checked1}
              setState={setChecked1}
              onChange={() => setChecked1((prev) => !prev)} 
            ></Switch>{" "}
            <div onClick={() => setChecked1((prev) => !prev)} className="mx-4">
              By continuing, I agree with{" "}
              <Link href="/info/terms">
              <span className="text-orange-600 cursor-pointer">
                Terms of service
              </span>
              </Link>
              ,{" "}
              <Link href="/info/privacy">
              <span className="text-orange-600 cursor-pointer">
                Privacy policy
              </span>
              </Link>
              ,{" "}
              <Link href="/info/refund">
              <span className="text-orange-600 cursor-pointer">
                Refund policy
              </span>
              </Link>
              ,{" "}
              <Link href="/info/subscription">
              <span className="text-orange-600 cursor-pointer">
                Subscription Terms
              </span>
              </Link>
              ,{" "}
              <Link href="/info/cookie">
              <span className="text-orange-600 cursor-pointer">
                Cookie policy
              </span>
              </Link>
            </div>
          </div>
          <div className={style.allow1}>
            <Switch
              bigger
              color="warning"
              shape="slim"
              state={checked2}
              setState={setChecked2}
              onChange={() => setChecked2((prev) => !prev)}
            ></Switch>
            <div onClick={() => setChecked2((prev) => !prev)} className="mx-4">
              {" "}
              I would like to receive updates about products, services, and
              special offers from MadMuscles via email
            </div>
          </div>
          <p className={style.recommend}>
            We recommend that you consult with your physician before beginning
            any exercise program
          </p>
        </div>
      </div>

      <div className={style.right}>
        <Goal goal={handleClick}/>
      </div>
      <div className={style.allowSmall}>
      <div className={style.allow1}>
            <Switch
              bigger
              color="warning"
              shape="slim"
              state={checked1}
              setState={setChecked1}
              onChange={() => setChecked1((prev) => !prev)}
            ></Switch>{" "}
            <div onClick={() => setChecked1((prev) => !prev)} className="mx-4">
              By continuing, I agree with{" "}
              <Link href="/info/terms">
              <span className="text-orange-600 cursor-pointer">
                Terms of service
              </span>
              </Link>
              ,{" "}
              <Link href="/info/privacy">
              <span className="text-orange-600 cursor-pointer">
                Privacy policy
              </span>
              </Link>
              ,{" "}
              <Link href="/info/refund">
              <span className="text-orange-600 cursor-pointer">
                Refund policy
              </span>
              </Link>
              ,{" "}
              <Link href="/info/subscription">
              <span className="text-orange-600 cursor-pointer">
                Subscription Terms
              </span>
              </Link>
              ,{" "}
              <Link href="/info/cookie">
              <span className="text-orange-600 cursor-pointer">
                Cookie policy
              </span>
              </Link>
            </div>
          </div>
          <div className={style.allow1}>
            <Switch
              bigger
              color="warning"
              shape="slim"
              state={checked2}
              setState={setChecked2}
              onChange={() => setChecked2((prev) => !prev)}
            ></Switch>
            <div onClick={() => setChecked2((prev) => !prev)} className="mx-4">
              {" "}
              I would like to receive updates about products, services, and
              special offers from MadMuscles via email
            </div>
          </div>
            <p className={style.recommend}>
            We recommend that you consult with your physician before beginning
            any exercise program
          </p>
        
         
      </div>
    </div>
  );
};

export default Home;
