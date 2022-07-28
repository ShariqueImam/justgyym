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
    "w-[100%] md:w-[50%] bg-neutral-900 h-[60vh] md:h-[83vh] text-stone-200 flex flex-col justify-center px-4 md:px-12",
};
const Attention = (props) => {
  props.which("home1");

  return (
    <>
      <Animator>
        <div className={style.wrapper}  style={{fontFamily:'Inter,sans-serif'}}>
          <div className={style.left}>
            <Image src={"/status.webp"} width={700} height={700} />
          </div>
          <div className={style.right}>
            <h2
              className="text-3xl md:text-3xl lg:text-4xl my-7 text-gray-50 font-bold"
              style={{fontFamily:'Inter,sans-serif'}}            >
              We care about your health
            </h2>
            <p className="my-4">If you have any of the following conditions:</p>
            <ol>
              <li className="tracking-wide my-3">&#183; Heart disease</li>
              <li className="tracking-wide my-3">&#183; Severe scoliosis</li>
              <li className="tracking-wide my-3">&#183; Spinal damage</li>
              <li className="tracking-wide my-3">&#183; Benign or malignant tumor</li>
              <li className="tracking-wide my-3">&#183; Hypertension</li>
            </ol>
            <p className="my-3 text-stone-300">
              Please contact your physician before starting to follow the
              MadMuscles program.
            </p>
            <Link href={"/push-ups"}>
              <div>
                <Button text={'Continue'}/>
              </div>
            </Link>
          </div>
        </div>
      </Animator>
    </>
  );
};

export default Attention;
