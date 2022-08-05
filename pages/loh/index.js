import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BsEmojiExpressionlessFill,BsFillHandThumbsDownFill,BsFillHandThumbsUpFill } from "react-icons/bs";
import { useRouter } from "next/router";
import Animator from "../../components/UI/Animator";
import { MainHeading } from "../../components/UI/Heading";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

import { AnimatePresence, motion } from "framer-motion";
const style = {
  wrapper: "mx-auto flex flex-col",
  buttonContainer: "flex items-center justify-between w-[100%] mt-12 md:mt-16",
  container:
    "flex flex-col px-6 py-3 bg-neutral-800 hover:bg-neutral-700 transition duration-[300ms] w-[60%] md:w-[25%] items-center justify-center mx-3 md:mx-0",
  text: "text-gray-200 mt-3",
  imgContainer: "flex items-center justify-center my-5",
};

const index = (props) => {
  const router = useRouter();
  const [img, setImg] = useState(1);
  const handleClick = () => {
    setImg((prev) => prev + 1);
  };
  props.which('home1')
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      img > 5 && router.push("/workouts");
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
      <ProgressBar scrollLength={"28%"} val={8} link="/level-of-fitness" />
      <div className="w-[95%] md:w-[38%] lg:w-[29%] mx-auto scroll-smooth">
        <div>
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
                  <Image src={"/loh/1.webp"} width={500} height={400} />
                </motion.div>
                <motion.div
                  variants={imgVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className={`${img === 2 ? "flex" : "hidden"} `}
                >
                  <Image src={"/loh/2.webp"} width={500} height={400} />
                </motion.div>
                <motion.div
                  variants={imgVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className={`${img === 3 ? "flex" : "hidden"} `}
                >
                  <Image src={"/loh/3.webp"} width={500} height={400} />
                </motion.div>
                <motion.div
                  variants={imgVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className={`${img === 4 ? "flex" : "hidden"} `}
                >
                  <Image src={"/loh/4.webp"} width={500} height={400} />
                </motion.div>
                <motion.div
                  variants={imgVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className={`${img === 5 ? "flex" : "hidden"} `}
                >
                  <Image src={"/loh/5.webp"} width={500} height={400} />
                </motion.div>
              </div>
            </AnimatePresence>

            {/* buttons */}
            <div
              className={style.buttonContainer}
              style={{ fontFamily: "Inter,sans-serif" }}
            >
              <div className={style.container} onClick={handleClick}>
                <BsFillHandThumbsDownFill className="text-yellow-400 text-2xl md:text-2xl" />
                <p className={style.text}>DisLike</p>
              </div>
              <div className={style.container} onClick={handleClick}>
                <BsEmojiExpressionlessFill className="text-yellow-400 text-2xl md:text-2xl" />
                <p className={style.text}>Neutral</p>
              </div>
              <div className={style.container} onClick={handleClick}>
                <BsFillHandThumbsUpFill className="text-yellow-400 text-2xl md:text-2xl" />
                <p className={style.text}>Like</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
