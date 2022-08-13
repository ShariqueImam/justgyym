import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../../components/UI/Button";
import Animator from "../../components/UI/Animator";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

const style = {
  wrapper: "flex flex-col md:flex-row overflow-y-hidden pb-20 scroll-smooth",
  left: "w-[100%] md:w-[50%] flex items-center justify-center",
  right:
    "w-[100%] md:w-[50%] bg-[#191919] h-[62vh] md:h-[100vh] text-[#ffffff] flex flex-col justify-center px-4 md:px-12 pb-8",
};
const Attention = (props) => {
  props.which("home2");
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="md:mb-0">
      {/* <Animator> */}
      <div className={style.wrapper} style={{ fontFamily: "Inter,sans-serif" }}>
        <div className={style.left}>
          <Image src={"/status.webp"} width={750} height={740} />
        </div>
        <div className={style.right}>
          <div className="w-[95%] md:w-[85%]">
            <h2
              className="text-3xl md:text-3xl lg:text-4xl my-7 text-[#ffffff] font-bold"
              style={{ fontFamily: "Inter,sans-serif" }}
            >
              We care about your health
            </h2>
            <p className="my-4 text-lg" style={{fontWeight:500}}>If you have any of the following conditions:</p>
            <ol>
              <li className="tracking-wide my-3 text-lg" style={{fontWeight:500}}>&#183; Heart disease</li>
              <li className="tracking-wide my-3 text-lg" style={{fontWeight:500}}>&#183; Severe scoliosis</li>
              <li className="tracking-wide my-3 text-lg" style={{fontWeight:500}}>&#183; Spinal damage</li>
              <li className="tracking-wide my-3 text-lg" style={{fontWeight:500}}>
                &#183; Benign or malignant tumor
              </li>
              <li className="tracking-wide my-3 text-lg" style={{fontWeight:500}}>&#183; Hypertension</li>
            </ol>
            <p className="my-3 text-[#ffffff] text-lg" style={{fontWeight:500}}>
              Please contact your physician before starting to follow the
              JustGyym program.
            </p>
            <Link href={"/push-ups"}>
              <div className="fixed bottom-[0px] left-[0px] md:relative border-t-[2px] w-[100vw] px-4 md:w-auto md:border-none border-stone-700 bg-[#1e1e1e] md:bg-transparent ">
                <Button text={"Got it"} />
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* </Animator> */}
    </div>
  );
};

export default Attention;
