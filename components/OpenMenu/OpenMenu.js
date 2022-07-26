import React from "react";
import { motion } from "framer-motion";
import MenuList from "./MenuList";
const variants = {
  initial: { x: 500 },
  show: { x: 0, transtion: { duration: 0.5 } },
  exit: { x: 500 },
};
const OpenMenu = (props) => {
  console.log(props.pos)
  const style = {
    wrapper:
      `${props.pos==='home2'?'mt-12':'mt-0'} flex z-10 font-bold bg-[#2a2a2a] w-[100vw] h-[90vh] text-[#ffffff]`,
    container1: "w-[0%] md:w-[0%] h-[90vh] font-bold mt-16 md:mt-24",
    container2: "w-[100%] md:w-[100%] text-stone-300 bg-[#2a2a2a] h-[90vh] font-bold mt-16 md:mt-24",
  };
  return (
    <motion.div
      className={style.wrapper}
      variants={variants}
      initial="initial"
      animate="show"
      exit="exit"
    >
      <div className={style.container1} onClick={() => props.menu()}></div>
      <div className={style.container2}>
        <MenuList menu={() => props.menu()} />
      </div>
    </motion.div>
  );
};

export default OpenMenu;
