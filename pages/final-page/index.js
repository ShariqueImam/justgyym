import React from "react";
import FinalPage from "../../components/FinalPage/FinalPage";
import Footer from "../../components/Footer/Footer";
import Animator from "../../components/UI/Animator";
import { AiOutlineMail } from "react-icons/ai";
const index = (props) => {
  props.which("home1");
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* <a href={`${props.data[0].FileURL}?dl=latexhseet-a4.pdf`} className="text-gray-100">Download Me</a> */}
      <FinalPage />
      <Footer />
      <div className="mb-16 md:mb-0">
        <div
          className="bg-[#171717] text-[#8d8d8d] py-1 md:text-center font-normal scroll-smooth text-sm mx-5"
          style={{ fontFamily: "Inter,sans-serif", fontWeight: 300 }}
        >
          Any questions? We're here to help.
        </div>
        <div
          className="bg-[#2a2a2a] flex items-center md:justify-center font-bold pb-3"
          style={{ fontFamily: "Inter,sans-serif" }}
        >
          <a
            href="/"
            className=" block text-[#ffffff] py-3 text-sm md:text-lg flex items-end justify-end"
            style={{ fontWeight: 300 }}
          >
            <AiOutlineMail className="text-[#ffffff] mx-4 text-2xl" />
            <p className=" border-b-2" style={{fontWeight:500}}>support@justgyym.com</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default index;
