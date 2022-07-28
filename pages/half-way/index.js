import React from "react";
import Animator from "../../components/UI/Animator";
import Link from "next/link";
import { Button } from "../../components/UI/Button";
import Image from "next/image";
const style = {
  wrapper: "flex flex-col md:flex-row ",
  left: "w-[100%] md:w-[50%] flex items-center justify-center mt-4 half-animation",
  right:
    "w-[100%] md:w-[50%] bg-[#191919] h-[35vh] md:h-[100vh] flex flex-col md:px-8 lg:p-24 lg:py-36 justify-center",
};
const index = (props) => {
  props.which("home1");

  return (
    <Animator>
      <div className={style.wrapper} style={{ fontFamily: "Inter,sans-serif" }}>
        <div className={style.left}>
          <Image src={`/half.webp`} width={470} height={600} />
        </div>
        <div className={style.right}>
          <div className="w-[95%] md:w-[60%] flex flex-col justify-center">
            <h2
              className="text-2xl md:text-3xl lg:text-3xl font-bold my-7 text-gray-50"
              style={{ fontFamily: "Inter,sans-serif" }}
            >
              Halfway there!
            </h2>
            <p className="my-4 text-gray-50">
              TWe won’t promise you quick results. Our program’s primary goal is
              to change your lifestyle for the better.
            </p>
            <p className="my-3 text-gray-300 w-[80%] md:w-[50%] ">
              You’ll achieve much more than just a few weeks of exercising.
            </p>
            <Link href={"additional-goals"}>
              <div>
                <Button text={"Continue "} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Animator>
  );
};

export default index;
