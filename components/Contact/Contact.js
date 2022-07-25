import React from "react";
import ContactForm from "./ContactForm";
import { NextSeo } from "next-seo";
import { AiOutlineMail } from "react-icons/ai";
const style = {
  wrapper: "flex flex-col ",
  contactContainer:
    "px-3 md:px-5 py-5 md:py-6 w-[90%] md:w-[50%] lg:w-[40%] mx-auto my-16",
  smallHeading:
    "border-b-2 border-stone-200 text-2xl md:text-3xl max-w-fit mx-auto py-2 text-gray-200 my-6",
  singleContactContainer:
    "flex items-center text-gray-200 mx-auto justify-center",
  para: "text-gray-200 text-sm md:text-sm my-2 md:my-4 hover:text-stone-900",
  contactContent: "text-center",
};
const Contact = () => {
  return (
    <div
      className={style.wrapper}
      style={{fontFamily:'Inter,sans-serif'}}    >
      <NextSeo
        title={`Contact Us`}
        description="Contact online power ranger games free"
      />{" "}
      <div className={style.contactContainer}>
        <h2 className={style.smallHeading}>Contact Details</h2>

        <div className={style.singleContactContainer}>
          <a href="mailto:webmaster@example.com" className="flex">
          <AiOutlineMail className="text-gray-200 text-2xl mx-3"/>
            <h2 className={style.contactContent}>support@test.com</h2>
          </a>
        </div>
        {/* contact form */}
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
