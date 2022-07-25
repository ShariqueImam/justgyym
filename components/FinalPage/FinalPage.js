import React, { useEffect,useState } from "react";
import MoneyBack from "./MoneyBack";
import FullPlan from "./FullPlan";
import Plan from "./Plan/Plan";
import Try from "./Try";
import Result from "./Result/Result";
import PlanFeatures from "./PlanFeatures/PlanFeatures";
import Get from "./Get/Get";
import Summary from "./Summary/Summary";
import Cookies from "js-cookie";

const style = {
  wrapper: "",
};
const FinalPage = () => {
  const [fat, setFat] = useState("25");
  useEffect(() => {
    setFat(Cookies.get("level-of-fat"));
  }, []);

  return (
    <div className={style.wrapper}>
      <Result fat={fat} />
      <Summary fat={fat} />
      <PlanFeatures fat={fat} />
      <Try fat={fat} />
      <Plan fat={fat} />
      <Get fat={fat} />
      <FullPlan fat={fat} />
      <MoneyBack fat={fat} />
    </div>
  );
};

export default FinalPage;
