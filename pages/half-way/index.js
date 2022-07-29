import React from "react";
import Link from "next/link";
import { Button } from "../../components/UI/Button";
import Image from "next/image";
const style = {
  wrapper: "flex flex-col md:flex-row z-10",
  left: "w-[100%] md:w-[50%] flex items-center justify-center mt-4 half-animation",
  right:
    "w-[100%] md:w-[50%] bg-[#191919] h-[40vh] md:h-[100vh] flex flex-col md:px-8 lg:p-24 lg:py-36 justify-center",
};
const index = (props) => {
  props.which("home2");
  return (
    // <Animator>
    <div className={style.wrapper} style={{ fontFamily: "Inter,sans-serif" }}>
      <div className={style.left}>
        <Image src={`/img.webp`} width={470} height={600} />
      </div>
      <div className={style.right}>
        <div className="w-[95%] md:w-[85%]">
        <h2
              className="text-2xl md:text-3xl lg:text-4xl my-3 md:my-12  text-[#ffffff]"
              style={{ fontFamily: "Inter,sans-serif", fontWeight: 700 }}
            >
                Halfway there!
            </h2>
            <p className="my-4 text-lg font-bold text-[#ffffff]" style={{ fontWeight: 500 }}>
            We won’t promise you quick results. Our program’s primary goal is
            to change your lifestyle for the better.
            </p>
            <p
              className="my-3 text-[#ffffff] text-lg font-bold "
              style={{ fontWeight: 450 }}
            >
              You’ll achieve much more than just a few weeks of exercising.
            </p>
        
          <Link href={"additional-goals"}>
            <div className="mx-4">
              <Button text={"Continue "} />
            </div>
          </Link>
        </div>
      </div>
    </div>
    // </Animator>
  );
};

export default index;
