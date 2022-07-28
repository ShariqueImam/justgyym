import React, { useState } from "react";
import Image from "next/image";
import SinglePlanCard from "./SinglePlanCard";
import { Button } from "../../UI/Button";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import Link from "next/link";
const style = {
  wrapper:
    "bg-neutral-900 px-3 md:px-12 py-8 md:py-24 flex flex-col md:flex-row w-[95%] md:w-[80%] lg:w-[60%] mx-auto",
  left: "w-[95%] md:w-[50%] flex items-center justify-center",
  right: "w-[95%] md:w-[50%] ",
};
const Plan = () => {
  const [isClick, setIsClick] = useState("3");
  const [item, setItem] = useState({
    name: "Just Gyym Plans",
    description: "Best Fitness Plan for your healthy life",
    image:
      "https://res.cloudinary.com/shariqcloud/image/upload/v1658561808/Just%20Gyym/logo_imfqah.webp",
    quantity: 1,
    price: 30,
  });
  const handleClick = (name, price) => {
    if (price == 49.99) {
      setIsClick("3");
    }
    if (price == 59.99) {
      setIsClick("6");
    }
    if (price == 29.99) {
      setIsClick("1");
    }
    setItem({
      name,
      price,
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
  return (
    <div className={style.wrapper}>
      <div className={style.left}>
        <Image src={"/final/a.webp"} height={500} width={200} />
      </div>
      <div className={style.right}>
        <h2 className="text-xl text-[#ffffff] md:text-4xl font-semibold">
          Choose the best plan for you
        </h2>
        <div onClick={() => handleClick("3-MONTH PLAN", 49.99)}>
          {/* <Link href={"/download"}> */}
          <SinglePlanCard
            text={"3-MONTH PLAN"}
            total={49.99}
            per={0.54}
            isClick={isClick === "3" ? true : false}
          />
          {/* </Link> */}
        </div>
        <div onClick={() => handleClick("6-MONTH PLAN", 59.99)}>
          {/* <Link href={"/download"}> */}
          <SinglePlanCard
            text={"6-MONTH PLAN"}
            total={59.99}
            per={0.33}
            isClick={isClick === "6" ? true : false}
          />
          {/* </Link> */}
        </div>
        <div onClick={() => handleClick("1-MONTH PLAN", 29.99)}>
          {/* <Link href={"/download"}> */}
          <SinglePlanCard
            text={"1-MONTH PLAN"}
            total={29.99}
            per={1.0}
            isClick={isClick === "1" ? true : false}
          />
          {/* </Link> */}
        </div>

        <Link href="">
          <div onClick={createCheckOutSession}>
            <Button text={"Continue"} />
          </div>
        </Link>
        <p className="text-gray-200 text-xs my-12">
          By continuing, you agree that if you don't cancel at least 24 hours
          prior to the end of the current period, you will automatically be
          charged 49.99 USD every 3 months until you cancel in settings. Learn
          more about our cancellation and refund policy in Subscription Terms
        </p>
        <div className="text-gray-200 text-xs">
          By continuing, I agree with{" "}
          <Link href="/info/terms">
            <span className="text-orange-600 cursor-pointer">
              Terms of service
            </span>
          </Link>
          ,{" "}
          <Link href="/info/privacy">
            <span className="text-orange-600 cursor-pointer">
              Privacy policy
            </span>
          </Link>
          ,{" "}
          <Link href="/info/refund">
            <span className="text-orange-600 cursor-pointer">
              Refund policy
            </span>
          </Link>
          ,{" "}
          <Link href="/info/subscription">
            <span className="text-orange-600 cursor-pointer">
              Subscription Terms
            </span>
          </Link>
          ,{" "}
          <Link href="/info/cookie">
            <span className="text-orange-600 cursor-pointer">
              Cookie policy
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Plan;
