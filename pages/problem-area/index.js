import React, { useState } from "react";
import { MainHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import { Card3 } from "../../components/UI/Card3";
import Link from "next/link";
import Animator from "../../components/UI/Animator";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Cookies from "js-cookie";
const ProblemArea = (props) => {
  const [click, setClick] = useState([]);
  const handleClick = (value) => {
    const index = click.indexOf(value);
    if (index > -1) {
      click.splice(index, 1);
      setClick([...click]);
    } else {
      setClick([...click, value]);
    }
  };
  props.which('home1')

  return (
    <>
      <ProgressBar  scrollLength={"12%"} val={4} link="/level-of-fat" />
      <div className="w-[95%] md:w-[34%] lg:w-[32%] mx-auto">
        <Animator>
          <MainHeading text="Select problem areas" />
          <div onClick={() => handleClick("weakchest")}>
            <Card3
              cardText={"Weak chest"}
              imgUrl="/chest.webp"
              isClick={click.includes("weakchest") ? true : false}
            />
          </div>
          <div onClick={() => handleClick("slimarms")}>
            <Card3
              cardText={"Slim arms"}
              imgUrl="/arms.webp"
              isClick={click.includes("slimarms") ? true : false}
            />
          </div>
          <div onClick={() => handleClick("beerbelly")}>
            <Card3
              cardText={"Beer belly"}
              imgUrl="/tummy.webp"
              isClick={click.includes("beerbelly") ? true : false}
            />
          </div>
          <div onClick={() => handleClick("slimlegs")}>
            <Card3
              cardText={"Slim legs"}
              imgUrl="/legs.webp"
              isClick={click.includes("slimlegs") ? true : false}
            />
          </div>
          <Link href={`${click.length > 0 ? "/height" : ""}`}>
            <div
              onClick={() => Cookies.set("problem-area", JSON.stringify(click))}
            >
              <Button dis={click.length > 0 ? false : true} text={"Continue"} />
            </div>
          </Link>
        </Animator>
      </div>
    </>
  );
};

export default ProblemArea;
