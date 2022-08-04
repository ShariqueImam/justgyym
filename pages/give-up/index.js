import React from "react";
import Image from "next/image";
import { Button } from "../../components/UI/Button";
import Link from "next/link";
import useWindowSize from "../../components/hooks/windowSize";

const style = {
  wrapper: "flex flex-col md:flex-row z-10",
  left: "w-[100%] md:w-[50%] flex items-center justify-center mt-24",
  right:
    "w-[100%] md:w-[50%] bg-[#191919] h-[60vh] md:h-[100vh] text-[#ffffff] flex flex-col justify-center px-4 md:px-12",
};
const GiveUp = (props) => {
  props.which("home2");
  const { width } = useWindowSize();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="pb-8 md:pb-0">
        <div
          className={style.wrapper}
          style={{ fontFamily: "Inter,sans-serif" }}
        >
          <div className={style.left}>
            <Image
              src={`${width < 700 ? "/final/cs.png" : "/final/c.webp"}`}
              width={200}
              height={width < 700 ? 300 : 450}
            />
          </div>
          <div className={style.right}>
            <div className="w-[95%] md:w-[85%]">
              <h2
                className="text-2xl md:text-3xl lg:text-4xl my-3 md:my-12 "
                style={{ fontFamily: "Inter,sans-serif", fontWeight: 700 }}
              >
                Why do people give up on exercise?
              </h2>
              <p className="my-4 text-lg font-thin" style={{ fontWeight: 700 }}>
                The #1 reason is starting too big too quickly
              </p>
              <p
                className="my-3 text-[#ffffff] text-lg font-bold "
                style={{ fontWeight: 450 }}
              >
                You’ll achieve much more than just a few weeks of exercising.
              </p>
              <p
                className="my-3 text-[#ffffff] text-lg font-bold"
                style={{ fontWeight: 450 }}
              >
                We won’t promise you quick results. Our program’s primary goal
                is to change your lifestyle for the better.
              </p>
              <Link href={"half-way"}>
                <div className="md:bg-transparent fixed bottom-[0px] left-[0px] md:relative border-t-[2px] w-[100vw] px-4 md:w-auto md:border-none border-stone-700 bg-[#1e1e1e] md:bg-transparent ">
                  <Button text={"Got it "} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GiveUp;
