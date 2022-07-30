import React from "react";
import Image from "next/image";
const style = {
  wrapper: "my-28 bg1 py-12",
  para: "text-[#ffffff] text-lg my-8 w-[90%] md:w-[40%] lg:w-[35%] mx-auto flex items-center gap-4",
};
const FullPlan = () => {
  return (
    <div className={style.wrapper} style={{fontFamily:'Inter,sans-serif'}}>
      <h2 className="text-3xl md:text-4xl text-[#ffffff] text-center font-bold">Full Workout Plan</h2>
      <p className={style.para} style={{fontWeight:500}}>
        <Image src={"/tick.png"} width={20} height={20} />
        Build a habit & form correct exercising techniques
      </p>
      <p className={style.para} style={{fontWeight:500}}>
        <Image src={"/tick.png"} width={20} height={20} />
        Lose excessive body fat & improve workout intensity
      </p>
      <p className={style.para} style={{fontWeight:500}}>
        {" "}
        <Image src={"/tick.png"} width={20} height={20} />
        Achieve your goal and change your life forever
      </p>
    </div>
  );
};

export default FullPlan;
