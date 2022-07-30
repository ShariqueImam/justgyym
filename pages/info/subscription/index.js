import React from "react";
import { MainHeading, SmallHeading } from "../../../components/UI/Heading";
import Animator from "../../../components/UI/Animator";

const style = {
  heading:
    "text-[#ffffff] w-[90%] md:w-[45%] lg:w-[40%] mx-auto my-8 font-bold text-xl",
  para: "text-[#ffffff] w-[90%] md:w-[45%] lg:w-[40%] mx-auto my-8 font-semibold",
};
const Privacy = (props) => {
  props.which("home1");

  return (
    <Animator>
      <div style={{ fontFamily: "Inter,sans-serif" }}>
        <div className="flex items-center justify-center flex-col">
          <MainHeading text={"Subscription Terms"} />
        </div>
        <h1 className={style.heading}>Free trial</h1>
        <p className={style.para}>
          We may offer a free trial subscription for service. Unless you cancel
          at least 24 hours before the end of the free trial, you will be
          automatically charged a price indicated on the payment screen for a
          chosen subscription period.
        </p>
        <h1 className={style.heading}>Subscription</h1>

        <p className={style.para}>
          The subscription begins from the first payment and renews
          automatically at the end of each period (each week, month, 6 months,
          year, or otherwise, depending on the option selected by you at the
          time of purchase) until you cancel.
        </p>
        <h1 className={style.heading}>Payment method</h1>
        <p className={style.para}>
          Payment will be charged to the payment method you submitted at the
          time of purchase at confirmation of purchase. You authorize us to
          charge the applicable subscription fees to the payment method that you
          submit.
        </p>
        <h1 className={style.heading}>Cancellation</h1>

        <p className={style.para}>
          Canceling your subscription means that the automatic renewal will be
          disabled, but you will still have access to all your subscription
          features for the remaining time of your then-current period. Note that
          deleting the app does not cancel your subscriptions.
        </p>
        <h1 className={style.heading}>Changes</h1>
        <p className={style.para}>
          To the maximum extent permitted by applicable laws, we may change
          subscription fees at any time. We will give you reasonable notice of
          any such pricing changes by posting the new prices on the app and/or
          by sending you an email notification, or in other prominent way. If
          you do not wish to pay the new fees, you can cancel the applicable
          subscription prior to the change going into effect.
        </p>
        <h1 className={style.heading}>Refunds</h1>

        <p className={style.para}>
          If you purchased a subscription or enabled free trial on App Store: If
          you are eligible for a refund, you’ll have to request it directly from
          Apple. To request a refund, follow these instructions from the Apple
          support page Please take a screenshot of this information for your
          reference. This may help you to control your subscriptions.
        </p>
      </div>
    </Animator>
  );
};

export default Privacy;
