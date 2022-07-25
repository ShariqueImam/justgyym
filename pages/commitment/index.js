import React, { useState } from "react";
import Counter from "../../components/Counter/Counter";
import { useRouter } from "next/router";
import { GiFlowers, GiCancel } from "react-icons/gi";
const style = {
  wrapper: "flex items-center justify-center mx-auto h-[80vh] w-[100vw]",
};
const index = () => {
  const [Show, setShow] = useState(false);
  const [Show1, setShow1] = useState(false);
 

  const router = useRouter();
  const handleEnd = () => {
    setShow(true);
  };
  const handleClick = () => {
    setShow(false);
    setShow1(true);
  };
  const handleEnd1 = () => {};

  if (Show1 === true) {
    setTimeout(() => {
      router.push("/final-page");
    }, 1800);
  }
  

  return (
    <div className={style.wrapper} style={{ fontFamily: "Inter,sans-serif" }}>
      {!Show && !Show1 && <Counter min={0} max={50} end={handleEnd} />}
      {Show && !Show1 && (
        <div className="bg-stone-900 w-[95vw] md:w-[25vw] h-[55vh] md:h-[44vh] px-7 py-8">
          <div className="flex items-center jusitfy-center">
            <div className="flex items-center  flex-1">
              <GiFlowers className="text-orange-600 text-2xl mx-3" />
              <h2 className="text-gray-50 font-bold">Almost Done</h2>
            </div>
            <div onClick={handleClick}>
              <GiCancel className="text-gray-50 text-4xl" />
            </div>
          </div>
          <h2 className="text-gray-50 text-xl my-7">
            <span className="text-orange-600">Are you ready</span> to make the
            commitment?
          </h2>
          <div className="my-5">
            <h2
              onClick={handleClick}
              className="hover:bg-stone-700 bg-stone-800 text-gray-50 font-thin my-4 py-4 px-5"
            >
              Yes, I will do my first workout today.
            </h2>
            <h2
              onClick={handleClick}
              className="hover:bg-stone-700 bg-stone-800 text-gray-50 font-thin my-4 py-4 px-5"
            >
              Yes, I will do my first workout tomorrow.
            </h2>
            <h2
              onClick={handleClick}
              className="hover:bg-stone-700 bg-stone-800 text-gray-50 font-thin my-4 py-4 px-5"
            >
              I am not ready for the commitment.
            </h2>
          </div>
        </div>
      )}

      {Show1 && <Counter min={55} max={100} end={handleEnd1} />}
    </div>
  );
};

export default index;
