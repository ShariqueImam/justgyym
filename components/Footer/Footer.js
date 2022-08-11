import React from "react";
import Image from "next/image";

const style = {
  wrapper: "bg2 py-16 md:py-36",
  container: "flex items-center justify-center",
};
const Footer = () => {
  return (
    <div className={style.wrapper} style={{ fontFamily: "Inter,sans-serif" }}>
      <div className="mx-auto flex items-center justify-center flex-col">
        <h2 className="text-2xl md:text-3xl text-[#ffffff] font-bold my-6">
          Follow Us
        </h2>
        <p
          className="text-md tracking-wide md:text-lg text-[#b3b3b3]"
          style={{ fontWeight: 400 }}
        >
          to skyrocket your result!
        </p>
        {/* add the social icons */}
        <div className={style.container}>
          <a
            href="https://www.instagram.com"
            target="_blank"
            className="border-[1px] border-neutral-700 shadow-2xl  mx-4 my-4 rounded-full cursor-pointer p-5 flex items-center justify-center bg-[#2a2a2a]"
            style={{ boxShadow: "5px 20px 80px 1px #000000" }}
          >
            <Image src={"/new.png"} width={30} height={30} />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            className="border-[1px] border-neutral-700 shadow-xl mx-4 my-4 rounded-full cursor-pointer p-5 flex items-center justify-center bg-[#2a2a2a]"
            style={{ boxShadow: "5px 20px 80px 1px #000000" }}
          >
            <Image src={"/new1.png"} width={30} height={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
