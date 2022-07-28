import React from "react";
import FinalPage from "../../components/FinalPage/FinalPage";
import Footer from "../../components/Footer/Footer";
import Animator from "../../components/UI/Animator";
import Cookies from "js-cookie";
import { AiOutlineMail } from "react-icons/ai";
const index = (props) => {
  props.which("home1");

  return (
    <Animator>
      {/* <a href={`${props.data[0].FileURL}?dl=latexhseet-a4.pdf`} className="text-gray-100">Download Me</a> */}
      <FinalPage />
      <Footer />
      <div
        className="bg-[#171717] text-[#8d8d8d] py-1 text-center"
        style={{ fontFamily: "Inter,sans-serif" }}
      >
        Any questions? We're here to help.
      </div>
      <div
        className="bg-[#2a2a2a] flex items-center justify-center"
        style={{ fontFamily: "Inter,sans-serif" }}
      >
        <a
          href="/"
          className="block underline text-[#ffffff] py-3 text-sm md:text-xl mx-8 md:mx-16 mb-10 flex items-center justify-center"
          style={{fontWeight:400}}
        >
          <AiOutlineMail className="text-[#ffffff] mx-4"/>
          support@test.com
        </a>
      </div>
    </Animator>
  );
};

export default index;
