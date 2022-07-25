import React from "react";
import Image from "next/image";
import { MainHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import { BasicCard } from "../../components/UI/BasicCard";
import Link from "next/link";
import Animator from "../../components/UI/Animator";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

const LevelHormone = () => {
  return (
    <>
      <ProgressBar scrollLength={"72%"} val={18} link="/workout-duration"/>

      <Animator>
        <div className="flex flex-col items-center " style={{ fontFamily: "Inter,sans-serif" }}>
          <MainHeading text={"Level of Cortisol & Testosterone"} />
          <Image src="/level.webp" height={220} width={400} />
          <div className="flex flex-col text-gray-100 mt-8 w-[90%] md:w-[40%] lg:w-[30%] mx-auto">
            <h2 className="text-2xl text-center font-bold">
              Our workout plan was created to ensure a balanced
              testosterone/cortisol ratio.
            </h2>
            <p className="my-4">
              Both cortisol and testosterone levels increase linearly in
              response to physical exercise.
            </p>
            <p className="my-4">
              However, it is of vital importance to consider them in order to
              reach a specific threshold of exercise intensity.
            </p>
            <p className="my-4">
              Otherwise, physical stressors can result in excessive cortisol
              secretion, which decreases the production of testosterone.
            </p>
            <p className="my-4">
              Overtraining and susceptibility to certain diseases and disorders
              could be the result of an extreme stressor and a low level of
              testosterone.
            </p>
          </div>
          <Link href="/water">
            <div>
              <Button text={'Continue'}/>
            </div>
          </Link>
        </div>
      </Animator>
    </>
  );
};

export default LevelHormone;
