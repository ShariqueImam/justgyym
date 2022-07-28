import React, { useState } from "react";
import client from "../api/client";
import Animator from "../../components/UI/Animator";
import Cookies from "js-cookie";

const index = (props) => {
  const [Val, setVal] = useState(Cookies.get("target-body")||'slim');
  const [Code, setCode] = useState(-1);
  const [Got, setGot] = useState(false);
  props.which("home1");

  if (Val === "slim" && Got == false) {
    setCode(0);
    setGot(true);
  }
  if (Val === "slimshredded" && Got == false) {
    setCode(1);
    setGot(true);
  }
  if (Val === "athlete" && Got == false) {
    setCode(2);
    setGot(true);
  }
  if (Val === "hero" && Got == false) {
    setCode(3);
    setGot(true);
  }
  if (Val === "bodybuilder" && Got == false) {
    setCode(4);
    setGot(true);
  }
  if (Val === "beachbody" && Got == false) {
    setCode(5);
    setGot(true);
  }
  if (Val === "workoutbody" && Got == false) {
    setCode(6);
    setGot(true);
  }
  if (Val === "crossfitbody") {
    setCode(7);
    setGot(true);
  }
  return (
    <Animator>
      {!Code == -1 && (
        <div
          className=" w-[95%] md:w-[75%] lg:w-[45%] mx-auto flex flex-col"
          style={{ fontFamily: "Inter,sans-serif" }}
        >
          <h2 className="text-orange-600 text-6xl text-center my-8">
            Please make your payment{" "}
            <a href="/final-page" className="underline decoration-orange-500">
              here
            </a>
            .
          </h2>
          <h2 className="text-gray-50 text-lg text-center">
            Download You Plan after the payment.
          </h2>
          <button disabled className="cursor-not-allowed bg-orange-900 text-gray-50 px-6 md:px-8 py-3 md:py-4 max-w-fit mx-auto my-12 tracking-wide">
            Download Plan
          </button>
        </div>
      )}
      {Code > -1 && (
        <div
          className=" w-[95%] md:w-[75%] lg:w-[45%] mx-auto flex flex-col"
          style={{ fontFamily: "Inter,sans-serif" }}
        >
          <h2 className="text-orange-600 text-6xl text-center my-8">
            Payment Successful.
          </h2>
          <h2 className="text-gray-50 text-lg text-center">
            Download You Plan from the DOWNLOAD button.
          </h2>
          (
          <button className="bg-orange-600 text-gray-50 px-6 md:px-8 py-3 md:py-4 max-w-fit mx-auto my-12 tracking-wide">
            <a
              href={`${props.data[Code].FileURL}?dl=latexhseet-a4.pdf`}
              className="text-gray-100"
            >
              Download Plan
            </a>
          </button>
        </div>
      )}
    </Animator>
  );
};

export default index;
export async function getStaticProps() {
  const data = await client.fetch(`*[_type=='plans']{name,
  'FileURL':plan.asset->url
  }`);
  return { props: { data } };
}
