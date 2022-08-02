import React from "react";
import Image from "next/image";
import { MainHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import { BasicCard } from "../../components/UI/BasicCard";
import Link from "next/link";
import Animator from "../../components/UI/Animator";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

const LevelHormone = (props) => {
  props.which("home1");
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  return (
    <>
      <div className="w-[95%] md:w-[37%] lg:w-[35%] mx-auto">
        <div className="pb-24 md:pb-0">
          <div
            className="flex flex-col "
            style={{ fontFamily: "Inter,sans-serif" }}
          >
            <div className="w-[95%] md:w-[80%]">
              <MainHeading text={"Level of Cortisol & Testosterone"} />
            </div>
            <div className="flex mx-auto">
              <Image src="/level.webp" height={220} width={400} />
            </div>
            <div
              className="flex flex-col text-gray-50 mt-8 mx-auto"
              style={{ fontFamily: "Inter,sans-serif" }}
            >
              {/* <div className="w-[95%] md:w-[80%]"> */}
                <h2 className="text-3xl font-bold my-4">
                  Our workout plan was created to ensure a balanced
                  testosterone/cortisol ratio.
                </h2>
                <p className="my-4 text-lg" style={{ fontWeight: 450 }}>
                  Both cortisol and testosterone levels increase linearly in
                  response to physical exercise.
                </p>
                <p className="my-4 text-lg" style={{ fontWeight: 450 }}>
                  However, it is of vital importance to consider them in order
                  to reach a specific threshold of exercise intensity.
                </p>
                <p className="my-4 text-lg" style={{ fontWeight: 450 }}>
                  Otherwise, physical stressors can result in excessive cortisol
                  secretion, which decreases the production of testosterone.
                </p>
                <p className="my-4 text-lg" style={{ fontWeight: 450 }}>
                  Overtraining and susceptibility to certain diseases and
                  disorders could be the result of an extreme stressor and a low
                  level of testosterone.
                </p>
              {/* </div> */}
            </div>
            <Link href="/water">
              <div  className="fixed bottom-[0px] left-[0px] md:relative border-t-[2px] w-[100vw] px-4 md:w-auto md:border-none border-stone-700 bg-[#1e1e1e] md:bg-transparent">
                <Button text={"Got it"} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LevelHormone;
