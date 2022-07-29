import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../../components/UI/Button";
import Animator from "../../components/UI/Animator";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

const style = {
  wrapper: "flex flex-col md:flex-row",
  left: "w-[100%] md:w-[50%] flex items-center justify-center",
  right:
    "w-[100%] md:w-[50%] bg-[#181818] h-[60vh] md:h-[100vh] text-[#ffffff] flex flex-col justify-center px-4 md:px-12",
};
const Attention = (props) => {
  props.which("home2");

  return (
    <>
      {/* <Animator> */}
      <div className={style.wrapper} style={{ fontFamily: "Inter,sans-serif" }}>
        <div className={style.left}>
          <Image src={"/status.webp"} width={800} height={950} />
        </div>
        <div className={style.right}>
          <div className="w-[95%] md:w-[85%]">
            <h2
              className="text-3xl md:text-3xl lg:text-4xl my-7 text-[#ffffff] font-bold"
              style={{ fontFamily: "Inter,sans-serif" }}
            >
              We care about your health
            </h2>
            <p className="my-4 text-lg" style={{fontWeight:300}}>If you have any of the following conditions:</p>
            <ol>
              <li className="tracking-wide my-3 text-lg" style={{fontWeight:500}}>&#183; Heart disease</li>
              <li className="tracking-wide my-3 text-lg" style={{fontWeight:500}}>&#183; Severe scoliosis</li>
              <li className="tracking-wide my-3 text-lg" style={{fontWeight:500}}>&#183; Spinal damage</li>
              <li className="tracking-wide my-3 text-lg" style={{fontWeight:500}}>
                &#183; Benign or malignant tumor
              </li>
              <li className="tracking-wide my-3 text-lg" style={{fontWeight:500}}>&#183; Hypertension</li>
            </ol>
            <p className="my-3 text-[#ffffff] text-lg" style={{fontWeight:500}}>
              Please contact your physician before starting to follow the
              MadMuscles program.
            </p>
            <Link href={"/push-ups"}>
              <div>
                <Button text={"Got it"} />
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* </Animator> */}
    </>
  );
};

export default Attention;
