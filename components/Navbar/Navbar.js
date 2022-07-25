import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import Image from "next/image";
const style = {
  wrapper:
    "h-[10vh] w-[100%] md:w-[95%] lg:w-[90%] flex mx-auto items-center justify-between px-3",
  logo: "text-orange-500 text-2xl flex-1 cursor-pointer flex-1 max-w-fit",
  container: "flex items-center justify-center",
};
const Navbar = (props) => {
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
          className="text-[#FFF4ED] text-2xl cursor-pointer"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Navbar;
