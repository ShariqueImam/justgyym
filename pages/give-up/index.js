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
    "w-[100%] md:w-[50%] bg-[#191919] h-[60vh] md:h-[100vh] text-gray-100 flex flex-col justify-center px-4 md:px-12",
};
const GiveUp = (props) => {
  props.which("home");

  return (
    <>
      <Animator>
        <div
          className={style.wrapper}
          style={{ fontFamily: "Inter,sans-serif" }}
        >
          <div className={style.left}>
            <Image src={`/final/c.webp`} width={200} height={450} />
          </div>
          <div className={style.right}>
            <div className="w-[95%] md:w-[60%]">
              <h2
                className="text-2xl md:text-3xl lg:text-4xl my-3 md:my-12"
                style={{ fontFamily: "Inter,sans-serif",fontWeight:600 }}
              >
                Why do people give up on exercise?
              </h2>
              <p className="my-4 text-lg" style={{fontWeight:500}}>
                The #1 reason is starting too big too quickly
              </p>
              <p className="my-3 text-gray-300 text-lg "style={{fontWeight:300}}>
                You’ll achieve much more than just a few weeks of exercising.
              </p>
              <p className="my-3 text-gray-300 text-lg"style={{fontWeight:300}}>
                We won’t promise you quick results. Our program’s primary goal
                is to change your lifestyle for the better.
              </p>
              <Link href={"half-way"}>
                <div className="mt-6">
                  <Button text={"Got it "} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Animator>
    </>
  );
};

export default GiveUp;
