import React from "react";
import { MainHeading, SmallHeading } from "../../../components/UI/Heading";
import Animator from "../../../components/UI/Animator";

const style = {
  heading:
    "text-gray-200 w-[90%] md:w-[45%] lg:w-[40%] mx-auto my-8 font-bold text-xl",
  para: "text-gray-200 w-[90%] md:w-[45%] lg:w-[40%] mx-auto my-8",
};
const Privacy = (props) => {
  props.which('home1')

  return (
    <Animator>
      <div style={{ fontFamily: "Inter,sans-serif" }}>
        <MainHeading text={"Refund Policy"} />
        <h1 className={style.heading}>1. MONEY-BACK GUARANTEE RULES</h1>
        <p className={style.para}>
          In addition to refund rights available under applicable laws, if you
          made a purchase directly on our website and the money-back option was
          presented to you during the checkout, you are eligible to receive a
          refund provided that all of the following conditions are met.
        </p>

        <p className={style.para}>
          You contact us via email support@madmuscles.com within 30 days after
          your initial purchase and before the end of your subscription period;
          and
        </p>
        <h1 className={style.heading}>2. IMPORTANT DISCLAIMERS</h1>
        <p className={style.para}>
          You have followed the plan for at least 14 consecutive days within the
          first 30 days after the purchase.
        </p>
        <p className={style.para}>
          We will review your application and notify you (by email) whether your
          application is approved.
        </p>
        <h1 className={style.heading}>IMPORTANT STATEMENT</h1>
        <p className={style.para}>
          Please note that only fulfillment of all the above requirements allows
          you to receive a full Voluntary Refund under “Money-back guarantee”.
          For the sake of clarity, this “Money-back guarantee” does not apply to
          the following cases:
        </p>
        <p className={style.para}>
          1. Personal reasons (you don’t like the product, it did not meet your
          expectations etc.);
        </p>
        <p className={style.para}>
          2. Financial reasons (you did not expect that you will be charged,
          that the trial will be converted into subscription, that the
          subscription will automatically renew, or that the services are paid
          etc.).
        </p>
      </div>
    </Animator>
  );
};

export default Privacy;
