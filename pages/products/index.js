import React, { useState } from "react";
import { MainHeading, SmallHeading } from "../../components/UI/Heading";
import { Button1 } from "../../components/UI/Button1";
import { Switch } from "pretty-checkbox-react";
import "@djthoms/pretty-checkbox";
import Food from "../../components/Food/Food";
import Animator from "../../components/UI/Animator";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Cookies from "js-cookie";
import Link from "next/link";
const Products = (props) => {
  const [checked, setChecked] = useState(false);
  const [Click, setClick] = useState([]);
  props.which('home1')
  React.useEffect(() => {
    window.scrollBy(0, -65);
  }, []);
  return (
    <div className="mb-28 md:mb-0">
      <ProgressBar scrollLength={"84%"} val={20} link="/meal-prep-time" />
      <div className="w-[95%] md:w-[34%] lg:w-[33%] mx-auto">
        <div>
          <MainHeading text="Let us create a meal plan based on your preferences" />
          <SmallHeading text="You can always adjust a meal plan later" />
          <div
            style={{ fontFamily: "Inter,sans-serif" }}
            className="flex flex-col mx-auto my-12 border-b-[1px] border-t-[1px] border-stone-700 py-3 my-4"
          >
            <div className="flex items-center justify-between my-4">
              <div className="text-lg text-gray-100 font-bold">
                Let JustGyym choose
              </div>
              <Switch
                bigger
                color="warning"
                shape="fill"
                state={checked}
                setState={setChecked}
                onClick={() => setChecked((prev) => !prev)}
              ></Switch>
            </div>
            <p className="text-gray-200 text-xs font-semibold">
              We create a balanced meal plan for you, which supplies you with
              the nutrients your body needs to work out effectively
            </p>
          </div>
          <Food auto={checked} valuess={(value) => setClick([...value])} />
          <Link href={`${Click.length > 0 || checked ? "/challenge" : ""}`}>
            <div  className="fixed bottom-[0px] left-[0px] md:relative border-t-[2px] w-[100vw] px-4 md:w-auto md:border-none border-stone-700 bg-[#1e1e1e] md:bg-transparent ">
              <Button1
                dis={Click.length > 0 || checked ? false : true}
                text={"Continue"}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
