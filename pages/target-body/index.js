import React, { useEffect, useState } from "react";
import Shredded from "../../components/TargetBody/Shredded";
import Lose from "../../components/TargetBody/Lose";
import Gain from "../../components/TargetBody/Gain";
import Animator from "../../components/UI/Animator";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Cookies from "js-cookie";
const style = {
  wrapper: "mt-4",
  cardContainer: "flex flex-col",
};

const TargetBody = (props) => {
  const [handle, setHandle] = useState("lose");
  useEffect(() => {
    setHandle(Cookies.get("goal"));
  }, []);
  props.which("home1");
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ProgressBar scrollLength={"4%"} val={1} link="/" />
      <div className="w-[95%] md:w-[39%] lg:w-[36%] mx-auto">
        <Animator className={style.wrapper}>
          {handle === "Lose Weight" && <Lose />}
          {handle === "Gain Weight" && <Gain />}
          {handle === "Get Shredded" && <Shredded />}
        </Animator>
      </div>
    </>
  );
};

export default TargetBody;
export const getStaticProps = async () => {
  return {
    props: {},
  };
};
