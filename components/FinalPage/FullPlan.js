import React from "react";
import Image from "next/image";
const style = {
  wrapper: "my-12 py-12 w-[90%] md:w-[47%] mx-auto",
  para: "text-[#ffffff] text-sm my-8 mx-auto flex items-center gap-4 mx-auto md:mx-24",
};
const FullPlan = () => {
  return (
    <div className={style.wrapper} style={{fontFamily:'Inter,sans-serif'}}>
      <h2 className="text-3xl md:text-4xl text-[#ffffff] text-center font-bold">Full Workout Plan</h2>
      <p className={style.para} style={{fontWeight:500}}>
        {/* <Image src={"/tick.png"} width={20} height={20} /> */}
        <h2>☑️</h2>
        Build a habit & form correct exercising techniques
      </p>
      <p className={style.para} style={{fontWeight:500}}>
        {/* <Image src={"/tick.png"} width={20} height={20} /> */}
        <h2>☑️</h2>
        Lose excessive body fat & improve workout intensity
      </p>
      <p className={style.para} style={{fontWeight:500}}>
        {" "}
        {/* <Image src={"/tick.png"} width={20} height={20} /> */}
        <h2>☑️</h2>
        Achieve your goal and change your life forever
      </p>
    </div>
  );
};

export default FullPlan;
