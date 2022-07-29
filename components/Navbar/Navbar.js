import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import Image from "next/image";
const Navbar = (props) => {
  const style = {
    wrapper:
      `z-1 ${props.pos==='home2'?'absolute':'relative'} h-[7vh] w-[100%] md:w-[98%] lg:w-[98%] flex mx-auto items-center justify-between px-3 mt-2 font-bold`,
    logo: "cursor-pointer flex-1 max-w-fit font-bold",
    container: "flex items-center justify-center font-bold",
  };
  const handleClick = () => {
    props.menu();
  };
  return (
    <div
      className={style.wrapper}
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <Link href="/">
        <div className={style.logo}>
          <Image src={'/logo.webp'} width={150} height={30}/>
        </div>
      </Link>
      <div className={style.container}>
        {/* <h2 className="text-[#FFF4ED] mx-5 cursor-pointer">English</h2> */}
        <GiHamburgerMenu
          className="text-[#FFF4ED] text-2xl cursor-pointer font-bold"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Navbar;
