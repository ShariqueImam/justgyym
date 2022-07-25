import React from "react";
import { MainHeading, SmallHeading } from "../UI/Heading";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
const style = {
  wrapper: "bg py-36",
  container:'flex items-center justify-center'
};
const Footer = () => {
  return (
    <div className={style.wrapper}>
      <div>
        <MainHeading text={"Follow Us"} />
        <SmallHeading text={"to skyrocket your result!"} />
        <h2>aafd</h2>
        {/* add the social icons */}
        <div className={style.container}>
          <AiFillFacebook className="hover:text-orange-600 hover:border-orange-600 text-gray-200 text-5xl md:text-5xl mx-4 my-4 border-2 rounded-full p-2 hover:scale-[1.1] transtion duration-[300ms] cursor-pointer"/>
          <AiFillInstagram className="hover:text-orange-600 hover:border-orange-600 text-gray-200 text-5xl md:text-5xl mx-4 my-4 border-2 rounded-full p-2 hover:scale-[1.1] transtion duration-[300ms] cursor-pointer"/>
          <AiFillTwitterCircle className="hover:text-orange-600 hover:border-orange-600 text-gray-200 text-5xl md:text-5xl mx-4 my-4 border-2 rounded-full p-2 hover:scale-[1.1] transtion duration-[300ms] cursor-pointer"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
