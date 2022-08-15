import React, { useState } from "react";
import { SmallHeading, MainHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import { Card2 } from "../../components/UI/Card2";
import Animator from "../../components/UI/Animator";
import ProgessBar from "../../components/ProgressBar/ProgressBar";
import Cookies from "js-cookie";
import Link from "next/link";
import Image from "next/image";
const BodyType = (props) => {
  const [click, setClick] = useState(Cookies.get("body-type") || "");
  const handleClick = (value) => {
    setClick(value);
  };
  props.which("home1");
  React.useEffect(() => {
    window.scrollBy(0, -110);
  }, []);
  return (
    <>
      <ProgessBar scrollLength={"8%"} val={2} link="/target-body" />
      <div
        className="w-[95%] md:w-[38%] lg:w-[36%] mx-auto mb-24"
        style={{ fontFamily: "Inter,sans-serif" }}
      >
        <div>
          <div className="w-[95%] md:w-[80]">
            <MainHeading text={"Choose your body type"} />
            <SmallHeading text="Choose the one that is most similar to yours now. There are no good or bad body types." />
          </div>
          <Link href={`${"/level-of-fat"}`}>
            <div
              onClick={() => {
                handleClick("ectomorph");
                Cookies.set("body-type", "ectomorph");
              }}
              style={{ fontFamily: "Inter,sans-serif" }}
            >
              <Card2
                cardText={"Ectomorph"}
                para="Little body fat and muscle. Have a hard time gaining weight."
                imgUrl="/type/3.png"
                isClick={click === "ectomorph" ? true : false}
              />
            </div>
          </Link>
          <Link href={`${"/level-of-fat"}`}>
            <div
              onClick={() => {
                handleClick("mesomorph");
                Cookies.set("body-type", "mesomorph");
              }}
            >
              <Card2
                cardText={"Mesomorph"}
                para="Little body fat and muscle. Have a hard time gaining weight."
                imgUrl="/type/2.png"
                isClick={click === "mesomorph" ? true : false}
              />
            </div>
          </Link>
          <Link href={`${"/level-of-fat"}`}>
            <div
              onClick={() => {
                handleClick("endomorph");
                Cookies.set("body-type", "endomorph");
              }}
            >
              <Card2
                cardText={"Endomorph"}
                para="Little body fat and muscle. Have a hard time gaining weight."
                imgUrl="/type/1.png"
                isClick={click === "endomorph" ? true : false}
              />
            </div>
          </Link>
          <div className="rounded border-2 border-stone-700 mx-auto text-[#ffffff] px-6 py-8 ">
            <div className="flex items-center">
              <h2 className="text-2xl text-[#ffffff] font-bold">
                Test to determine your body type
              </h2>
              <Image
                src={"/determine-body-type.svg"}
                height={170}
                width={130}
              />
            </div>
            <p className="text-[#d6d3d1]  text-sm my-6">
              Grip your opposite wrist using the thumb and an index finger. If
              you’re right-handed, use your right hand to grab your left wrist.
            </p>
            <p className="text-[#ffffff] font-bold">Thumb and index finger:</p>
            <p className="text-[#ffffff] my-1 ">
              <span className="font-bold text-[#ffffff]">Ectomorph — </span>{" "}
              wrapping around with ease.
            </p>
            <p className="text-[#d6d3d1] my-1 ">
              <span className="font-bold text-[#ffffff]">Mesomorph — </span>{" "}
              touching each other.
            </p>
            <p className="text-[#d6d3d1] my-1 ">
              <span className="font-bold text-[#ffffff]">Endomorph — </span>{" "}
              doesn’t come into contact.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyType;
