import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BsEmojiNeutral } from "react-icons/bs";
import { BiLike, BiDislike } from "react-icons/bi";
import { useRouter } from "next/router";
import Animator from "../../components/UI/Animator";
import { MainHeading } from "../../components/UI/Heading";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

import { AnimatePresence, motion } from "framer-motion";
const style = {
  wrapper: "w-[90%] md:w-[50%] lg:w-[40%] mx-auto flex flex-col",
  buttonContainer: "flex items-center justify-around w-[100%] mt-12 md:mt-16",
  container:
    "flex flex-col px-6 py-4 bg-neutral-800 hover:bg-neutral-700 transition duration-[300ms] w-[60%] md:w-[25%] mx-auto items-center justify-center",
  text: "text-gray-200 my-3",
  imgContainer: "flex items-center justify-center my-5",
};
const index = () => {
  const router = useRouter();
  const [img, setImg] = useState(1);
  const handleClick = () => {
    setImg((prev) => prev + 1);
  };
  useEffect(() => {
    setTimeout(() => {
      img > 3 && router.push("/workouts");
    }, 100);
  }, [img]);
  const imgVariants = {
    hidden: { opacity: 0, y: -100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      y: -100,
    },
  };
  return (
    <>
      <ProgressBar scrollLength={"28%"} val={7} link="/level-of-fitness"/>

      <Animator>
        <div className={style.wrapper}>
          {/* adding the images */}
          <MainHeading text={"Like or dislike it."} />
          <AnimatePresence exitBeforeEnter>
            <div className={style.imgContainer} key={img}>
              <motion.div
                variants={imgVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className={`${img === 1 ? "flex" : "hidden"} `}
              >
                <Image src={"/loh/1.webp"} width={400} height={300} />
              </motion.div>
              <motion.div
                variants={imgVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className={`${img === 2 ? "flex" : "hidden"} `}
              >
                <Image src={"/loh/2.webp"} width={400} height={300} />
              </motion.div>
              <motion.div
                variants={imgVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className={`${img === 3 ? "flex" : "hidden"} `}
              >
                <Image src={"/loh/3.webp"} width={400} height={300} />
              </motion.div>
            </div>
          </AnimatePresence>

          {/* buttons */}
          <div className={style.buttonContainer} style={{ fontFamily: "Inter,sans-serif" }}>
            <div className={style.container} onClick={handleClick}>
              <BiDislike className="text-yellow-400 text-2xl md:text-3xl" />
              <p className={style.text}>DisLike</p>
            </div>
            <div className={style.container} onClick={handleClick}>
              <BsEmojiNeutral className="text-yellow-400 text-2xl md:text-3xl" />
              <p className={style.text}>Neutral</p>
            </div>
            <div className={style.container} onClick={handleClick}>
              <BiLike className="text-yellow-400 text-2xl md:text-3xl" />
              <p className={style.text}>Like</p>
            </div>
          </div>
        </div>
      </Animator>
    </>
  );
};

export default index;
