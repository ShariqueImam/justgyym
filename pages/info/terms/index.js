import React from "react";
import { MainHeading, SmallHeading } from "../../../components/UI/Heading";
import Animator from "../../../components/UI/Animator";

const Privacy = (props) => {
  props.which("home1");
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Animator>
      <div className="w-[90%] md:w-[44%] mx-auto">
        <MainHeading text={"Terms Of Service"} />
        <SmallHeading
          text={
            "PLEASE READ THESE TERMS OF SERVICE CAREFULLY BEFORE COMPLETING A PURCHASE."
          }
        />
        <p
          style={{ fontFamily: "Inter,sans-serif" }}
          className="text-[#ffffff]  my-8 font-semibold"
        >
          Right after payment you will instantly access your plan. Please,
          follow the instructions after payment.
        </p>
        <h1
          style={{ fontFamily: "Inter,sans-serif" }}
          className="text-[#ffffff] my-8 font-bold text-xl"
        >
          1. LEGALLY BINDING AGREEMENT; AMENDMENTS
        </h1>
        <p
          style={{ fontFamily: "Inter,sans-serif" }}
          className="text-[#ffffff] mx-auto my-8"
        >
          1.1. MadMuscles as a service and the content available via our
          websites and mobile apps is developed, operated and distributed by
          Amomama Media Limited, a legal entity incorporated under the laws of
          the Republic of Cyprus, having its registered office at 1st Floor,
          Georgiou Christoforou 8, 2012, Strovolos, Nicosia, Cyprus (“we” “us”
          “our” or the “Company”). The service delivered, the content, tools,
          transactions available by using the MadMuscles, are collectively
          referred to as the “Service”.
        </p>
        <h1
          style={{ fontFamily: "Inter,sans-serif" }}
          className="text-[#ffffff] mx-auto my-8 font-bold text-xl"
        >
          2. IMPORTANT DISCLAIMERS
        </h1>
        <p
          style={{ fontFamily: "Inter,sans-serif" }}
          className="text-[#ffffff] mx-auto my-8"
        >
          2.1. THE COMPANY DOES NOT OFFER OR PROVIDE ANY KIND OF MEDICAL ADVICE,
          HEALTH INSURANCE OR OTHER HEALTHCARE SERVICE, INCLUDING WITHOUT
          LIMITATION, ANY COUNSELING, TESTING, EVALUATION, PRESCRIPTION,
          PROCEDURE OR THERAPY RELATED TO EXERCISE, NUTRITION, WEIGHT LOSS OR
          WELLNESS OR RELATED TO THE AVOIDANCE, PREVENTION, DIAGNOSIS OR
          TREATMENT OF ANY INJURY, ILLNESS, DISEASE OR CONDITION (COLLECTIVELY,
          “HEALTHCARE SERVICES”).
        </p>
      </div>
    </Animator>
  );
};

export default Privacy;
