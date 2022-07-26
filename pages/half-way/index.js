import React from "react";
import Link from "next/link";
import { Button } from "../../components/UI/Button";
import Image from "next/image";
import useWindowSize from "../../components/hooks/windowSize";
const style = {
  wrapper: "flex flex-col md:flex-row z-10",
  left: "w-[100%] md:w-[50%] flex items-center justify-center mt-3 md:mt-24",
  right:
    "w-[100%] md:w-[50%] bg-[#191919] h-[45vh] md:h-[100vh] text-[#ffffff] flex flex-col px-4 md:px-12 pt-7",
};

const index = (props) => {
  props.which("home2");
  const { width } = useWindowSize();
  React.useEffect(() => {
    window.scrollBy(0, -65);
  }, []);
  return (
    // <Animator>
    <div className={style.wrapper} style={{ fontFamily: "Inter,sans-serif" }}>
      <div className={style.left}>
        <Image src={`/hero/${width<700?'hero1':"HERO"}.png`} width={width<700?200:270} height={width<700?300:600} />
      </div>
      <div className={style.right}>
        <div className="w-[95%] md:w-[85%]">
          <h2
            className="text-2xl md:text-3xl lg:text-4xl my-3 md:my-12  text-[#ffffff]"
            style={{ fontFamily: "Inter,sans-serif", fontWeight: 700 }}
          >
            Halfway there!
          </h2>
          <p
            className="my-4 text-lg font-bold text-[#ffffff]"
            style={{ fontWeight: 500 }}
          >
            We won’t promise you quick results. Our program’s primary goal is to
            change your lifestyle for the better.
          </p>
          <p
            className="my-3 text-[#ffffff] text-lg font-bold "
            style={{ fontWeight: 450 }}
          >
            You’ll achieve much more than just a few weeks of exercising.
          </p>

          <Link href={"additional-goals"}>
            <div className="fixed bottom-[0px] left-[0px] md:relative border-t-[2px] w-[100vw] px-4 md:w-auto md:border-none border-stone-700 bg-[#1e1e1e] md:bg-transparent ">
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
