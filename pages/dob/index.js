import React, { useState } from "react";
import { Button } from "../../components/UI/Button";
import Link from "next/link";
import Cookies from "js-cookie";
import ProgressBar1 from "../../components/ProgressBar/ProgressBar1";
import NumberFormat from "react-number-format";

const DOB = (props) => {
  const [dob, setDob] = useState(Cookies.get("dob") ? Cookies.get("dob") : "");
  const [Error, setError] = useState(false);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = () => {
    console.log(+dob.slice(-4));
    if (2022 - +dob.slice(-4) > 13) {
      Cookies.set("dob", dob);
      setDob("");
      setError(false);
    } else {
      setError(true);
    }
  };
  const valid = 2022 - +dob.slice(-4) > 13;
  props.which("home1");
  const style = {
    container: "mx-auto my-6 md:my-10",
    input: `my-3 ring-none outline-none px-5 py-3 bg-transparent border-[1px] border-stone-600 placeholder:font-thin placeholder:text-neutral-400 w-[100%] text-gray-200 bg-[#1E1E1E] text-lg focus:border-2 focus:border-orange-600 ${
      Error && "border-[#ec3e4f]"
    }`,
  };
  return (
    <>
      {/* <ProgressBar scrollLength={"96%"} val={24} /> */}
      <div>
        <div
          className="w-[95%] md:w-[42%] lg:w-[37%] mx-auto mt-4 scroll-smooth"
          style={{ fontFamily: "Inter,sans-serif" }}
        >
          <div className="bg-[#1e1e1e] mx-auto py-2 flex items-center mb-7">
            <p className="text-2xl ml-3">✅ </p>
            <p
              className="text-gray-50 tracking-wide text-lg md:text-md my-1 mx-5"
              style={{ fontWeight: 450 }}
            >
              Your workout and meal plan are almost ready!
            </p>
          </div>
          <h2 className=" mx-auto text-gray-50 text-3xl md:text-3xl lg:text-4xl my-2 font-semibold">
            Let's create your account
          </h2>
          <div className={style.container}>
            <ProgressBar1 scrollLength={"66%"} val={2} />
          </div>

          <div
            className={style.container}
            style={{ fontFamily: "Inter,sans-serif" }}
          >
            <label
              htmlFor="name"
              className="text-gray-200 text-xl"
              style={{ fontWeight: 450 }}
            >
              What is your date of birth?
            </label>

            <NumberFormat
              format="## / ## / ####"
              placeholder="DD / MM / YYYY"
              mask={["D", "D", "M", "M", "Y", "Y", "Y", "Y"]}
              value={dob}
              thousandSeparator={true}
              onValueChange={(values) => {
                const { formattedValue, value } = values;
                setDob(formattedValue);
              }}
              className={style.input}
            />
            {Error && (
              <p
                className={`${
                  !Error ? "hidden" : "flex"
                }  text-[#ec3e4f] text-xs`}
                style={{ fontWeight: 400 }}
              >
                {" "}
                You must be 13 or over to use our product
              </p>
            )}
          </div>
          <Link href={`${dob.length > 0 && valid ? "/email" : ""}`}>
            <div
              onClick={handleClick}
              className="fixed bottom-[0px] left-[0px] md:relative border-t-[2px] w-[100vw] px-4 md:w-auto md:border-none border-stone-700 bg-[#1e1e1e] md:bg-transparent "
            >
              <Button
                dis={dob.length > 0  ? false : true}
                text={"Continue"}
                className="mt-64 md:mt-2"
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DOB;

{
  /* <input
              id="name"
              type="text"
              placeholder="DD / MM / YEAR"
              className={style.input}
              value={dob}
              onChange={dobChangeHandler}
            /> */
}
// const dobChangeHandler = (e) => {
//   if (
//     e.target.value.length < 11 &&
//     /^[ A-Za-z0-9_@./#&+-]*$/.test(e.target.value)
//   ) {
//     if (
//       e.target.value.length < 11 &&
//       e.target.length !== 2 &&
//       e.target.length !== 5
//     ) {
//       setDob(`${e.target.value}`);
//     }
//     if (e.target.value.length == 2) {
//       setDob(`${e.target.value}/`);
//     }
//     if (e.target.value.length == 5) {
//       setDob(`${e.target.value}/`);
//     }
//     if (e.target.value.length == 6) {
//       setDob((prev) => {
//         if (prev.slice(-1) == "/") {
//           return prev.slice(0, -1);
//         }
//         return prev;
//       });
//     }
//     if (e.target.value.length == 3) {
//       setDob((prev) => {
//         if (prev.slice(-1) == "/") {
//           return prev.slice(0, -1);
//         }
//         return prev;
//       });
//     }
//   }
// };
