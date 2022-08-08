import React from "react";
import Image from "next/image";

const style = {
  wrapper: "bg1 py-36",
  container: "flex items-center justify-center",
};
const Footer = () => {
  return (
    <div className={style.wrapper} style={{fontFamily:'Inter,sans-serif'}}>
      <div className="mx-auto flex items-center justify-center flex-col">
        <h2 className="text-2xl md:text-4xl text-[#ffffff] font-bold my-6">Follow Us</h2>
        <p className="text-md tracking-wide md:text-lg text-[#b3b3b3]" style={{fontWeight:400}}>to skyrocket your result!</p>
        {/* add the social icons */}
        <div className={style.container}>
          <a href='https://www.instagram.com' target="_blank" className="mx-4 my-4 rounded-full cursor-pointer p-5 flex items-center justify-center bg-[#2a2a2a]">
            <Image src={"/new.png"} width={30} height={30} />
          </a>
          <a href='https://www.facebook.com' target="_blank" className="mx-4 my-4 rounded-full cursor-pointer p-5 flex items-center justify-center bg-[#2a2a2a] ">
            <Image src={"/new1.png"} width={30} height={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
