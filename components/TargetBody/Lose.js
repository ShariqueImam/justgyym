import React, { useState } from "react";
import { SmallHeading, MainHeading } from "../../components/UI/Heading";
import { StartCard } from "..//UI/Card";
import { Button } from "..//UI/Button";
import Link from "next/link";
import Cookies from "js-cookie";
const Lose = () => {
  const [click, setClick] = useState(Cookies.get('target-body')||'');
  const handleClick = (val) => {
    setClick(val);
  };

  return (
    <div>
      <SmallHeading text={"Ok, so your goal is to Lose Weight"} />
      <MainHeading text={"Choose the body you want"} />
      <Link href={`${click.length > 0 ? "/body-type" : ""}`}>
        <div
          onClick={() => {
            handleClick("slim");
            Cookies.set("target-body", 'slim');
          }}
        >
          <StartCard
            cardText={"Slim Body"}
            imgUrl={"/SLIM_BODY.webp"}
            isClick={click === "slim" ? true : false}
          />
        </div>
      </Link>
      <Link href={`${click.length > 0 ? "/body-type" : ""}`}>
        <div
          onClick={() => {
            handleClick("slimshredded");
            Cookies.set("target-body", 'slimshredded');
          }}
        >
          <StartCard
            cardText={"Slim Shredded Body"}
            imgUrl={"/SLIM_SHREDDED_BODY.webp"}
            isClick={click === "slimshredded" ? true : false}
          />
        </div>
      </Link>
    </div>
  );
};

export default Lose;
