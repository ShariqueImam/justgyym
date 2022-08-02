import React, { useState } from "react";
import { SmallHeading, MainHeading } from "../../components/UI/Heading";
import { StartCard } from "..//UI/Card";
import { Button } from "..//UI/Button";
import Link from "next/link";
import Cookies from "js-cookie";
const Gain = () => {
  const [click, setClick] = useState(Cookies.get('target-body')||'');
  const handleClick = (value) => {
    setClick((prev) => {
      if (prev === value) return "";
      return value;
    });
  };
  return (
    <div>
      <SmallHeading text={"Ok, so your goal is to Gain Weight"} />
      <MainHeading text={"Choose the body you want"} />
      <Link href={`${click.length > 0 ? "/body-type" : ""}`}>
        <div
          onClick={() => {
            handleClick("athlete");
            Cookies.set("target-body", 'athlete');
          }}
        >
          <StartCard
            cardText={"Athlete"}
            imgUrl={"/ATHLETE.webp"}
            isClick={click === "athlete" ? true : false}
          />
        </div>
      </Link>
      <Link href={`${click.length > 0 ? "/body-type" : ""}`}>
        <div
          onClick={() => {
            handleClick("hero");
            Cookies.set("target-body", 'hero');
          }}
        >
          <StartCard
            cardText={"Hero"}
            imgUrl={"/HERO.webp"}
            isClick={click === "hero" ? true : false}
          />
        </div>
      </Link>

      <Link href={`${click.length > 0 ? "/body-type" : ""}`}>
        <div
          onClick={() => {
            handleClick("bodybuilder");
            Cookies.set("target-body", 'bodybuilder');
          }}
        >
          <StartCard
            cardText={"BodyBuilder"}
            imgUrl={"/BODYBUILDER.webp"}
            isClick={click === "bodybuilder" ? true : false}
          />
        </div>
      </Link>
    </div>
  );
};

export default Gain;
