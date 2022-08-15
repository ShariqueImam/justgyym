import React, { useState } from "react";
import Image from "next/image";
import SinglePlanCard from "./SinglePlanCard";
import { Button } from "../../UI/Button";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import Link from "next/link";
import Timer from "./Timer";
import useWindowSize from "../../hooks/windowSize";
const style = {
  wrapper:
    "bg-neutral-900 px-3 md:px-12 py-8 md:py-12 mt-8 flex flex-col md:flex-row w-[95%] md:w-[80%] lg:w-[85%] mx-auto",
  left: "w-[95%] md:w-[50%] flex items-center justify-center flex-col",
  right: "w-[95%] md:w-[50%] ",
};
const Plan = () => {
  const [TimerEnd, setTimerEnd] = useState(false);
  const [isClick, setIsClick] = useState("1");
  const [item, setItem] = useState({
    name: "Just Gyym Plans",
    description: "Best Fitness Plan for your healthy life",
    image:
      "https://res.cloudinary.com/shariqcloud/image/upload/v1658561808/Just%20Gyym/logo_imfqah.webp",
    quantity: 1,
    price: 30,
  });
  const handleClick = (name, price) => {
    if (price == 29.99) {
      setIsClick("1");
    }
    setItem({
      name,
      price: TimerEnd ? price : price - 10,
      description: "Best Fitness Plan for your healthy life",
      image:
        "https://res.cloudinary.com/shariqcloud/image/upload/v1658561808/Just%20Gyym/logo_imfqah.webp",
      quantity: 1,
    });
  };
  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  const stripePromise = loadStripe(publishableKey);
  // setItem({ name: "One", price: val });
  const createCheckOutSession = async () => {
    const stripe = await stripePromise;
    const checkoutSession = await axios.post("/api/create-stripe-session", {
      item: item,
    });
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result.error) {
      alert(result.error.message);
    }
  };
  const handleEndTimer = () => {
    setTimerEnd(true);
  };
  const { width } = useWindowSize();
  return (
    <div className={style.wrapper} style={{ fontFamily: "Inter,sans-serif" }}>
      <div className={style.left}>
        {/* adding the counter */}
        <Timer endTimer={handleEndTimer} />
        <Image
          src={`${width > 700 ? "/final/a.webp" : "/final/apng.png"}`}
          height={width > 700 ? 460 : 230}
          width={width > 700 ? 200 : 160}
        />
      </div>
      <div className={style.right}>
        <h2 className="text-xl text-[#ffffff] md:text-4xl font-bold text-center md:text-left">
          Start your journey now
        </h2>
        <div onClick={() => handleClick("1-MONTH PLAN", 29.99)}>
          <SinglePlanCard
            text={"1-MONTH PLAN"}
            total={29.99}
            per={0.33}
            isClick={isClick === "1" ? true : false}
            TimerEnd={TimerEnd}
          />
        </div>

        <Link href="">
          <div onClick={createCheckOutSession}>
            <Button text={"Continue"} />
          </div>
        </Link>
        <p
          className="text-[#ffffff] text-xs my-12 font-normal"
          style={{ fontWeight: 500 }}
        >
          By continuing, you agree that if you don't cancel at least 24 hours
          prior to the end of the current period, you will automatically be
          charged 49.99 USD every 3 months until you cancel in settings. Learn
          more about our cancellation and refund policy in Subscription Terms
        </p>
        <div className="text-[#ffffff] text-xs font-normal">
          By continuing, I agree with{" "}
          <Link href="/info/terms">
            <span className="text-orange-600 cursor-pointer font-normal">
              Terms of service
            </span>
          </Link>
          ,
          <Link href="/info/privacy">
            <span className="text-orange-600 cursor-pointer font-normal">
              Privacy policy
            </span>
          </Link>
          ,
          <Link href="/info/refund">
            <span className="text-orange-600 cursor-pointer font-normal">
              Refund policy
            </span>
          </Link>
          ,
          <Link href="/info/subscription">
            <span className="text-orange-600 cursor-pointer font-normal">
              Subscription Terms
            </span>
          </Link>
          ,{" "}
          <Link href="/info/cookie">
            <span className="text-orange-600 cursor-pointer font-normal">
              Cookie policy
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Plan;

{
  /* <div onClick={() => handleClick("3-MONTH PLAN", 49.99)} className="">
          <S1
            text={"3-MONTH PLAN"}
            total={49.99}
            per={0.54}
            isClick={isClick === "3" ? true : false}
            TimerEnd={TimerEnd}
          />
        </div> */
}
{
  /* <div onClick={() => handleClick("1-MONTH PLAN", 29.99)}>
          <SinglePlanCard
            text={"1-MONTH PLAN"}
            total={29.99}
            per={1.0}
            isClick={isClick === "1" ? true : false}
            TimerEnd={TimerEnd}
          />
        </div> */
}
