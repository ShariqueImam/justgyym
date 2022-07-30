import React from "react";
import ContactForm from "./ContactForm";
import { NextSeo } from "next-seo";
import { AiOutlineMail } from "react-icons/ai";
const style = {
  wrapper: "flex flex-col w-[95%] md:w-[40%] mx-auto",
  contactContainer:
    "px-3 md:px-5 py-5 md:py-6 my-16",
  smallHeading:
    "border-stone-200 text-2xl md:text-3xl max-w-fit py-2 text-[#ffffff] my-6 font-bold",
  singleContactContainer:
    "flex items-center text-[#ffffff]",
  para: "text-[#ffffff] text-sm md:text-sm my-2 md:my-4 hover:text-stone-900",
  contactContent: "text-center font-bold",
};
const Contact = () => {
  return (
    <div
      className={style.wrapper}
      style={{fontFamily:'Inter,sans-serif'}}    >
      <NextSeo
        title={`Contact Us`}
        description="Contact online just gyym free"
      />{" "}
      <div className={style.contactContainer}>
        <h2 className={style.smallHeading}>Contact Details</h2>

        <div className={style.singleContactContainer}>
          <a href="mailto:webmaster@example.com" className="flex">
          <AiOutlineMail className="text-[#ffffff] text-2xl mx-3"/>
            <h2 className={style.contactContent}>support@justgyym.com</h2>
          </a>
        </div>
        {/* contact form */}
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
