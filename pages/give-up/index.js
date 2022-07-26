import React from "react";
import Image from "next/image";
import { Button } from "../../components/UI/Button";
import Link from "next/link";
import Animator from "../../components/UI/Animator";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

const style = {
  wrapper: "flex flex-col md:flex-row",
  left: "w-[100%] md:w-[50%] flex items-center justify-center",
  right:
    "w-[100%] md:w-[50%] bg-neutral-900 h-[70vh] md:h-[90vh] text-gray-100 flex flex-col justify-center px-4 md:px-12",
};
const GiveUp = () => {
  return (
    <>
      <ProgressBar scrollLength={"40%"} val={11}  link="/workout-issue"/>
      <Animator>
        <div className={style.wrapper}  style={{fontFamily:'Inter,sans-serif'}}>
          <div className={style.left}>
            <Image src={`/final/c.webp`} width={300} height={550} />
          </div>
          <div className={style.right}>
            <h2
              className="text-2xl md:text-3xl lg:text-4xl my-7"
              style={{fontFamily:'Inter,sans-serif'}}            >
              Why do people give up on exercise?
            </h2>
            <p className="my-4">
              The #1 reason is starting too big too quickly
            </p>
            <p className="my-3 text-gray-300 w-[80%] md:w-[50%] ">
              You’ll achieve much more than just a few weeks of exercising.
            </p>
            <p className="my-3 text-gray-300 w-[80%] md:w-[50%] ">
              We won’t promise you quick results. Our program’s primary goal is
              to change your lifestyle for the better.
            </p>
            <Link href={"half-way"}>
              <div>
                <Button text={'Continue '}/>
              </div>
            </Link>
          </div>
        </div>
      </Animator>
    </>
  );
};

export default GiveUp;
