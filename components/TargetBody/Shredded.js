import React, { useState } from "react";
import { SmallHeading, MainHeading } from "../../components/UI/Heading";
import { StartCard } from "..//UI/Card";
import { Button } from "..//UI/Button";
import Cookies from "js-cookie";
import Link from "next/link";
const Shredded = () => {
  const [click, setClick] = useState(Cookies.get('target-body')||'');
  const handleClick = (value) => {
    setClick(value);
  };
  return (
    <div>
      <SmallHeading text={"Ok, so your goal is to Get Shredded"} />
      <MainHeading text={"Choose the body you want"} />
      <Link href={`${click.length > 0 ? "/body-type" : ""}`}>
        <div
          onClick={() => {
            handleClick("beachbody");
            Cookies.set("target-body", 'beachbody');
          }}
        >
          <StartCard
            cardText={"Beach Body"}
            imgUrl={"/BEACH_BODY.webp"}
            isClick={click === "beachbody" ? true : false}
          />
        </div>
      </Link>
      <Link href={`${click.length > 0 ? "/body-type" : ""}`}>
        <div
          onClick={() => {
            handleClick("workoutbody");
            Cookies.set("target-body", 'workoutbody');
          }}
        >
          <StartCard
            cardText={"Workout Body"}
            imgUrl={"/WORKOUT_BODY.webp"}
            isClick={click === "workoutbody" ? true : false}
          />
        </div>
      </Link>

      <Link href={`${click.length > 0 ? "/body-type" : ""}`}>
        <div
          onClick={() => {
            handleClick("crossfitbody");
            Cookies.set("target-body", 'crossfitbody');
          }}
        >
          <StartCard
            cardText={"Cross-fit Body"}
            imgUrl={"/CROSS_FIT_BODY.webp"}
            isClick={click === "crossfitbody" ? true : false}
          />
        </div>
      </Link>
    </div>
  );
};

export default Shredded;
