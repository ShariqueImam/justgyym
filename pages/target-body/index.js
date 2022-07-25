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

const TargetBody = () => {
  const [handle, setHandle] = useState("lose");
  useEffect(() => {
    setHandle(Cookies.get("goal"));
  }, []);
  return (
    <>
      <ProgressBar scrollLength={"4%"} val={1} link="/"/>
      <Animator className={style.wrapper}>
        {handle === "Lose Weight" && <Lose />}
        {handle === "Gain Weight" && <Gain />}
        {handle === "Get Shredded" && <Shredded />}
      </Animator>
    </>
  );
};

export default TargetBody;
export const getStaticProps = async () => {
  return {
    props: {},
  };
};
