import React from "react";
import { MainHeading, SmallHeading } from "../../../components/UI/Heading";
import Animator from '../../../components/UI/Animator'
const style = {
  heading:
    "text-gray-200 w-[90%] md:w-[45%] lg:w-[40%] mx-auto my-8 font-bold text-xl",
  para: "text-gray-200 w-[90%] md:w-[45%] lg:w-[40%] mx-auto my-8",
};
const Privacy = () => {
  return (
    <Animator>
      <MainHeading text={"Do Not Sell My Personal Information"} />
      <p style={{ fontFamily: "Inter,sans-serif" }}className={style.para}>As a California resident, you have the right under the California Consumer Privacy Act of 2018 (“CCPA”) to opt-out of the sale of your personal information. Whereas we do not sell any personal information in return for money, we and our partners collect certain pieces of personal information to deliver interest-based advertising. Please review our Privacy Policy for a more detailed description of how we collect, use, and share the personal information of California residents, your privacy rights as a California resident and how to exercise them.</p>
      {/* <h1 className={style.heading}>COOKIES</h1> */}
      <p style={{ fontFamily: "Inter,sans-serif" }}className={style.para}>
      In effect, this will disable targeted advertising provided by our third-party partners, which means that we will no longer share your personal information with third-party partners to customize your advertising experience. Note that we may still deliver advertising to you that is not tailored to you based on your personal information, and that we may still use your personal information for other purposes such as analytics, measurement and attribution. Also we may continue to share your personal information if the transfers are not considered “sales” under the CCPA, for example when we send information to our service providers.
      </p>

     
      
    </Animator>
  );
};

export default Privacy;
