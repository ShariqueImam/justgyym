import React from "react";
import { motion } from "framer-motion";
import MenuList from './MenuList'
const style = {
  wrapper:
    "flex z-10 bg-opacity-[0.5] bg-[rgba(0,0,0,0.7)] w-[100vw] h-[90vh] text-gray-100 ",
  container1: "w-[0%] md:w-[0%] h-[90vh]",
  container2: "w-[100%] md:w-[100%] text-stone-300 bg-neutral-800 h-[90vh]",
};
const variants ={
    initial:{x:500},
    show:{x:0,transtion:{duration:0.5}},
    exit:{x:500}
}
const OpenMenu = (props) => {
  return (
    <motion.div className={style.wrapper} variants={variants} initial="initial" animate="show" exit="exit">
      <div className={style.container1} onClick={() => props.menu()}></div>
      <div className={style.container2}>
        <MenuList menu={()=>props.menu()}/>
      </div>
    </motion.div>
  );
};

export default OpenMenu;
