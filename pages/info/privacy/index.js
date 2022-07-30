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
        <div>
          <MainHeading text={"Privacy Policy"} />
          <SmallHeading text={"IMPORTANT PRIVACY INFORMATION"} />
          <p
            style={{ fontFamily: "Inter,sans-serif" }}
            className="text-[#ffffff] mx-auto my-8 font-semibold"
          >
            In order to provide the service, we will ask you to enter your date
            of birth, gender, current weight and height, target weight, fitness
            level, problem areas, workouts, and food preferences, as well as
            answer certain lifestyle-related questions. We also automatically
            collect from your device language settings, IP address, time zone,
            type and model of a device, device settings, operating system,
            Internet service provider, mobile carrier, hardware ID, Facebook ID,
            and other unique identifiers (such as IDFA and AAID). We need this
            data to provide our services, analyze how our customers use the
            service, to serve ads.
          </p>
          <p
            style={{ fontFamily: "Inter,sans-serif" }}
            className="text-[#ffffff] mx-auto my-8 font-semibold"
          >
            For improving our service and serving ads, we use third party
            solutions. As a result, we may process data using solutions
            developed by Amplitude, Facebook, Google, Twitter, Pinterest,
            Verizon Media. As a result, some of the data is stored and processed
            on servers of such third parties. This enables us to (1) analyze
            different interactions (how often users make subscriptions, the
            average weight and height of our users, how many users chose a
            particular area for improvement); (2) serve ads (and are able to
            show them only to a particular group of users, for example, to users
            who have already made a purchase). Consequently, we, in particular,
            better understand in what of our features and content you see the
            most value and are able to focus on them to enhance your experience
            and increase the quality of our products.
          </p>
          <p
            style={{ fontFamily: "Inter,sans-serif" }}
            className="text-[#ffffff] mx-auto my-8 font-semibold"
          >
            BY USING THE SERVICE, YOU PROMISE US THAT (I) YOU HAVE READ,
            UNDERSTAND AND AGREE TO THIS PRIVACY POLICY, AND (II) YOU ARE OVER
            16 YEARS OF AGE (OR HAVE HAD YOUR PARENT OR GUARDIAN READ AND AGREE
            TO THIS PRIVACY POLICY FOR YOU). If you do not agree, or are unable
            to make this promise, you must not use the Service.
          </p>
        </div>
      </div>
    </Animator>
  );
};

export default Privacy;
