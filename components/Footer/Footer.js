import React from "react";
import Image from "next/image";

const style = {
  wrapper: "bg1 py-36",
  container: "flex items-center justify-center",
};
const Footer = () => {
  return (
    <div className={style.wrapper}>
      <div className="mx-auto flex items-center justify-center flex-col">
        <h2 className="text-2xl md:text-4xl text-gray-50 font-semibold my-6">Follow Us</h2>
        <p className="text-md tracking-wide md:text-lg text-stone-400" style={{fontWeight:300}}>to skyrocket your result!</p>
        {/* add the social icons */}
        <div className={style.container}>
          <div className="mx-4 my-4 rounded-full cursor-pointer p-5 flex items-center justify-center bg-stone-800">
            <Image src={"/new.png"} width={30} height={30} />
          </div>
          <div className="mx-4 my-4 rounded-full cursor-pointer p-5 flex items-center justify-center bg-stone-800">
            <Image src={"/new1.png"} width={30} height={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
