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
  const [Got, setGot] = useState(true);
  console.log(
    props.data.sort(function (a, b) {
      return a.name - b.name;
    })
  );
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // 0-7
  if (Place == "Gym" && Got == true) {
    if (Goal == "Lose Wieght" || Goal == "Get Shredded") {
      if (Unit == "kg") {
        if (+Weight <= 65) {
          setCode(0);

          setGot(false);

        }
        if (+Weight > 65 && +Weight <= 74) {
          setCode(1);
          setGot(false);

        }
        if (+Weight > 74 && +Weight <= 84) {
          setCode(2);
          setGot(false);

        }
        if (+Weight > 84) {
          setCode(3);
          setGot(false);

        }
      }
      if (Unit == "lb") {
        if (+Weight * 0.4535 <= 65) {
          setCode(0);
          setGot(false);

        }
        if (+Weight * 0.4535 > 65 && +Weight * 0.4535 <= 74) {
          setCode(1);
          setGot(false);

        }
        if (+Weight * 0.4535 > 74 && +Weight * 0.4535 <= 84) {
          setCode(2);
          setGot(false);

        }
        if (+Weight * 0.4535 > 84) {
          setCode(3);
          setGot(false);

        }
      }
    }
    if (Goal == "Gain Weight") {
      if (Unit == "kg") {
        if (+Weight <= 65) {
          setCode(4);
          setGot(false);

        }
        if (+Weight > 65 && +Weight <= 74) {
          setCode(5);
          setGot(false);

        }
        if (+Weight > 74 && +Weight <= 84) {
          setCode(6);
          setGot(false);

        }
        if (+Weight > 84) {
          setCode(7);
          setGot(false);

        }
      }
      if (Unit == "lb") {
        if (+Weight * 0.4535 <= 65) {
          setCode(4);
          setGot(false);

        }
        if (+Weight * 0.4535 > 65 && +Weight * 0.4535 <= 74) {
          setCode(5);
          setGot(false);

        }
        if (+Weight * 0.4535 > 74 && +Weight * 0.4535 <= 84) {
          setCode(6);
          setGot(false);

        }
        if (+Weight * 0.4535 > 84) {
          setCode(7);
          setGot(false);

        }
      }
    }
  }
  // 8-15
  if (Place == "Home" && Got == true) {
    if (Goal == "Lose Wieght" || Goal == "Get Shredded") {
      if (Unit == "kg") {
        if (+Weight <= 65) {
          setCode(8);
          setGot(false);

        }
        if (+Weight > 65 && +Weight <= 74) {
          setCode(9);
          setGot(false);

        }
        if (+Weight > 74 && +Weight <= 84) {
          setCode(10);
          setGot(false);

        }
        if (+Weight > 84) {
          setCode(11);
          setGot(false);

        }
      }
      if (Unit == "lb") {
        if (+Weight * 0.4535 <= 65) {
          setCode(8);
          setGot(false);

        }
        if (+Weight * 0.4535 > 65 && +Weight * 0.4535 <= 74) {
          setCode(9);
          setGot(false);

        }
        if (+Weight * 0.4535 > 74 && +Weight * 0.4535 <= 84) {
          setCode(10);
          setGot(false);

        }
        if (+Weight * 0.4535 > 84) {
          setCode(11);
          setGot(false);

        }
      }
    }
    if (Goal == "Gain Weight") {
      if (Unit == "kg") {
        if (+Weight <= 65) {
          setCode(12);
          setGot(false);

        }
        if (+Weight > 65 && +Weight <= 74) {
          setCode(13);
          setGot(false);

        }
        if (+Weight > 74 && +Weight <= 84) {
          setCode(14);
          setGot(false);

        }
        if (+Weight > 84) {
          setCode(15);
          setGot(false);

        }
      }
      if (Unit == "lb") {
        if (+Weight * 0.4535 <= 65) {
          setCode(12);
          setGot(false);

        }
        if (+Weight * 0.4535 > 65 && +Weight * 0.4535 <= 74) {
          setCode(13);
          setGot(false);

        }
        if (+Weight * 0.4535 > 74 && +Weight * 0.4535 <= 84) {
          setCode(14);
          setGot(false);

        }
        if (+Weight * 0.4535 > 84) {
          setCode(15);
          setGot(false);

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
          Download your plan by clicking on the download button.
          </h2>
          (
          <button className="bg-orange-600 text-gray-50 px-6 md:px-8 py-3 md:py-4 max-w-fit mx-auto my-12 tracking-wide">
            <a
              href={`${props.data[Code].FileURL}?dl=JustGyym Plan.pdf`}
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
