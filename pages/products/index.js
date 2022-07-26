import React, { useState } from "react";
import { MainHeading, SmallHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import { Switch } from "pretty-checkbox-react";
import "@djthoms/pretty-checkbox";
import Food from "../../components/Food/Food";
import Animator from "../../components/UI/Animator";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Cookies from "js-cookie";
import Link from "next/link";
const Products = () => {
  const [checked, setChecked] = useState(false);
  const [Click, setClick] = useState([]);

  return (
    <>
      <ProgressBar scrollLength={"84%"} val={23} link="/meal-prep-time"/>
      <Animator>
        <MainHeading text="Let us create a meal plan based on your preferences" />
        <SmallHeading text="You can always adjust a meal plan later" />
        <div style={{ fontFamily: "Inter,sans-serif" }} className="flex flex-col w-[90%] md:w-[32%] lg:w-[25%] mx-auto my-12 border-b-[1px] border-t-[1px] border-stone-700 py-3 my-4">
          <div className="flex items-center justify-between my-4">
            <div className="text-2xl text-gray-100 tracking-wide">
              LET MADMUSCLE CHOOSE
            </div>
            <Switch
              bigger
              color="warning"
              shape="slim"
              state={checked}
              setState={setChecked}
              onClick={() => setChecked((prev) => !prev)}
            ></Switch>
          </div>
          <p className="text-gray-200 text-xs">
            We create a balanced meal plan for you, which supplies you with the
            nutrients your body needs to work out effectively
          </p>
        </div>
        <Food auto={checked} valuess={(value) => setClick([...value])} />
        <Link href={`${Click.length > 0 || checked ? "/challenge" : ""}`}>
          <div>
            <Button dis={Click.length > 0 || checked ? false : true} text={'Continue'}/>
          </div>
        </Link>
      </Animator>
    </>
  );
};

export default Products;
