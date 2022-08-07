import React, { useState } from "react";
import Counter from "../../components/Counter/Counter";
import Counter1 from "../../components/Counter/Counter1";
import Counter2 from "../../components/Counter/Counter2";
import { useRouter } from "next/router";
import { ImCross } from "react-icons/im";
import Image from "next/image";
const style = {
  wrapper:
    "flex items-center justify-center mx-auto h-[80vh] w-[100vw] scroll-smooth",
};
const index = (props) => {
  const [Show, setShow] = useState(false);
  const [Show1, setShow1] = useState(false);
  const [Show2, setShow2] = useState(false);
  props.which("home1");
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const router = useRouter();
  const handleEnd = () => {
    setShow(true);
  };
  const handleClick = () => {
    setShow(false);
    setShow1(true);
  };
  const handleEnd1 = () => {
    setShow2(true);
  };
  const handleEnd2 = () => {};

  if (Show1 === true) {
    setTimeout(() => {
      router.push("/final-page");
    }, 2700);
  }
  return (
    <div className={style.wrapper} style={{ fontFamily: "Inter,sans-serif" }}>
      {!Show && !Show1 && (
        <Counter min={0} max={40} end={handleEnd} text={"Analyzing Data"} />
      )}
      {Show && !Show1 && (
        <div className="bg-[#1e1e1e] w-[95vw] md:w-[62vw] lg:w-[45vw] h-[75vh] md:h-[80vh] lg:h-[80vh] px-7 py-8 md:px-20">
          <div className="flex items-center jusitfy-center">
            <div className="flex items-center flex-1 ">
              <div className="bg-[#2a2a2a] p-2 flex items-center justify-center">
                <Image src="/j.png" width={50} height={50} />
              </div>
              <h2
                className="text-[#ffffff] text-sm ml-4"
                style={{ fontWeight: 600 }}
              >
                ALMOST DONE!
              </h2>
            </div>
            <div onClick={handleClick}>
              <ImCross className="text-[#ffffff] text-2xl font-thin hover:text-stone-300 cursor-pointer" />
            </div>
          </div>
          <h2 className="text-[#ffffff] text-3xl my-7 font-bold">
            <span className="text-[#ff4400]">Are you ready</span> to make the
            commitment?
          </h2>
          <div className="my-5">
            <h2
              onClick={handleClick}
              className="hover:bg-neutral-500 bg-[#393939] text-[#ffffff] my-4 py-4 px-5 cursor-pointer font-bold"
            >
              Yes, I will do my first workout today👌.
            </h2>
            <h2
              onClick={handleClick}
              className="hover:bg-neutral-500 bg-[#393939] text-[#ffffff] my-4 py-4 px-5 cursor-pointer font-bold"
            >
              Yes, I will do my first workout tomorrow😎.
            </h2>
            <h2
              onClick={handleClick}
              className="hover:bg-neutral-500 bg-[#393939] text-[#ffffff]   my-4 py-4 px-5 cursor-pointer font-bold"
            >
              I am not ready for the commitment.
            </h2>
          </div>
        </div>
      )}

      {Show1 && !Show2 && <Counter1 min={41} max={70} end={handleEnd1} />}
      {Show2 && <Counter2 min={71} max={100} end={handleEnd2} />}
    </div>
  );
};

export default index;
