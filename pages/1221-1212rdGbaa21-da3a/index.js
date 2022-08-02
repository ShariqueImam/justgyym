import React, { useState } from "react";
import client from "../api/client";
import Animator from "../../components/UI/Animator";
import Cookies from "js-cookie";

const index = (props) => {
  props.which("home1");
  const [Goal, setGoal] = useState(Cookies.get("goal"));
  const [Place, setPlace] = useState(Cookies.get("workout-place"));
  const [Weight, setWeight] = useState(Cookies.get("target-weight"));
  const [Unit, setUnit] = useState(Cookies.get("target-weight-unit"));
  const [Code, setCode] = useState(-1);
  // const [Got, setGot] = useState(false);
  console.log(
    props.data.sort(function (a, b) {
      return a.name - b.name;
    })
  );
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // 0-7
  if (Place == "gym") {
    if (Goal == "Lose Wieght" || Goal == "Get Shredded") {
      if (Unit == "kg") {
        if (+Weight <= 65) {
          setCode(0);
        }
        if (+Weight > 65 && +Weight <= 74) {
          setCode(1);
        }
        if (+Weight > 74 && +Weight <= 84) {
          setCode(2);
        }
        if (+Weight > 84) {
          setCode(3);
        }
      }
      if (Unit == "lb") {
        if (+Weight * 0.4535 <= 65) {
          setCode(0);
        }
        if (+Weight * 0.4535 > 65 && +Weight * 0.4535 <= 74) {
          setCode(1);
        }
        if (+Weight * 0.4535 > 74 && +Weight * 0.4535 <= 84) {
          setCode(2);
        }
        if (+Weight * 0.4535 > 84) {
          setCode(3);
        }
      }
    }
    if (Goal == "Gain Weight") {
      if (Unit == "kg") {
        if (+Weight <= 65) {
          setCode(4);
        }
        if (+Weight > 65 && +Weight <= 74) {
          setCode(5);
        }
        if (+Weight > 74 && +Weight <= 84) {
          setCode(6);
        }
        if (+Weight > 84) {
          setCode(7);
        }
      }
      if (Unit == "lb") {
        if (+Weight * 0.4535 <= 65) {
          setCode(4);
        }
        if (+Weight * 0.4535 > 65 && +Weight * 0.4535 <= 74) {
          setCode(5);
        }
        if (+Weight * 0.4535 > 74 && +Weight * 0.4535 <= 84) {
          setCode(6);
        }
        if (+Weight * 0.4535 > 84) {
          setCode(7);
        }
      }
    }
  }
  // 8-15
  if (Place == "home") {
    if (Goal == "Lose Wieght" || Goal == "Get Shredded") {
      if (Unit == "kg") {
        if (+Weight <= 65) {
          setCode(8);
        }
        if (+Weight > 65 && +Weight <= 74) {
          setCode(9);
        }
        if (+Weight > 74 && +Weight <= 84) {
          setCode(10);
        }
        if (+Weight > 84) {
          setCode(11);
        }
      }
      if (Unit == "lb") {
        if (+Weight * 0.4535 <= 65) {
          setCode(8);
        }
        if (+Weight * 0.4535 > 65 && +Weight * 0.4535 <= 74) {
          setCode(9);
        }
        if (+Weight * 0.4535 > 74 && +Weight * 0.4535 <= 84) {
          setCode(10);
        }
        if (+Weight * 0.4535 > 84) {
          setCode(11);
        }
      }
    }
    if (Goal == "Gain Weight") {
      if (Unit == "kg") {
        if (+Weight <= 65) {
          setCode(12);
        }
        if (+Weight > 65 && +Weight <= 74) {
          setCode(13);
        }
        if (+Weight > 74 && +Weight <= 84) {
          setCode(14);
        }
        if (+Weight > 84) {
          setCode(15);
        }
      }
      if (Unit == "lb") {
        if (+Weight * 0.4535 <= 65) {
          setCode(12);
        }
        if (+Weight * 0.4535 > 65 && +Weight * 0.4535 <= 74) {
          setCode(13);
        }
        if (+Weight * 0.4535 > 74 && +Weight * 0.4535 <= 84) {
          setCode(14);
        }
        if (+Weight * 0.4535 > 84) {
          setCode(15);
        }
      }
    }
  }

  return (
    <Animator>
      {Code == -1 && (
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
          <button
            disabled
            className="cursor-not-allowed bg-orange-900 text-gray-50 px-6 md:px-8 py-3 md:py-4 max-w-fit mx-auto my-12 tracking-wide"
          >
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
