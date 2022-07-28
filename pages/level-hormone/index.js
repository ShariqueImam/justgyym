import React from "react";
import Image from "next/image";
import { MainHeading } from "../../components/UI/Heading";
import { Button } from "../../components/UI/Button";
import { BasicCard } from "../../components/UI/BasicCard";
import Link from "next/link";
import Animator from "../../components/UI/Animator";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

const LevelHormone = (props) => {
  props.which('home1')

  return (
    <>
      <div className="w-[95%] md:w-[39%] lg:w-[32%] mx-auto">
        <Animator>
          <div
            className="flex flex-col "
            style={{ fontFamily: "Inter,sans-serif" }}
          >
            <MainHeading text={"Level of Cortisol & Testosterone"} />
            <div className="flex mx-auto">
              <Image src="/level.webp" height={220} width={400} />
            </div>
            <div className="flex flex-col text-gray-50 mt-8 mx-auto" style={{ fontFamily: "Inter,sans-serif" }}>
              <h2 className="text-3xl font-bold my-4">
                Our workout plan was created to ensure a balanced
                testosterone/cortisol ratio.
              </h2>
              <p className="my-4 text-lg" style={{fontWeight:300}}>
                Both cortisol and testosterone levels increase linearly in
                response to physical exercise.
              </p>
              <p className="my-4 text-lg" style={{fontWeight:300}}>
                However, it is of vital importance to consider them in order to
                reach a specific threshold of exercise intensity.
              </p>
              <p className="my-4 text-lg" style={{fontWeight:300}}>
                Otherwise, physical stressors can result in excessive cortisol
                secretion, which decreases the production of testosterone.
              </p>
              <p className="my-4 text-lg" style={{fontWeight:300}}>
                Overtraining and susceptibility to certain diseases and
                disorders could be the result of an extreme stressor and a low
                level of testosterone.
              </p>
            </div>
            <Link href="/water">
              <div>
                <Button text={"Got it"} />
              </div>
            </Link>
          </div>
        </Animator>
      </div>
    </>
  );
};

export default LevelHormone;
