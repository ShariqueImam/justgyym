import React, { useState, useEffect } from "react";
import { Button } from "../../components/UI/Button";
import Link from "next/link";
import Animator from "../../components/UI/Animator";
import ProgressBar1 from "../../components/ProgressBar/ProgressBar1";
import axios from "axios";
import Cookies from "js-cookie";
const style = {
  wrapper: "flex flex-col my-8",
  container: "mx-auto my-6 md:my-10",
  input:
    "my-3 ring-none outline-none px-5 py-3 bg-transparent border-[1px] border-stone-600 placeholder:font-thin placeholder:text-neutral-400 w-[100%] text-gray-200 bg-[#1E1E1E] text-lg focus:border-2 focus:border-orange-600",
};
const Email = (props) => {
  props.which("home1");

  const [email, setEmail] = useState(
    Cookies.get("email") ? Cookies.get("email") : ""
  );
  // getting the user data to send to the database
  const [Data, setData] = useState({
    name: Cookies.get("name"),
    dob: Cookies.get("dob"),
    email: Cookies.get("email"),
  });
  // token to store data in the sanity
  const tokenWithWriteAccess =
    "sk3lfKnxQJtTFd4mgLBG3YQ1C2O1gkbwkUHx8AMdQEWdJ5S4vbjsHZo8z2UiGLkoa6prTwndZioph4EeQkOZLZbFjwLVCjwz8KGkLzWCcAXDt78v9Q4oCeJx3faCHBHDnspIZ2XqXxVzJNkUpTiAdRiilVhlILODgZ8xSqlbwn7jcKvUs9NR";
  const [Checked, setChecked] = useState(false);
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  React.useEffect(() => {
    window.scrollBy(0, -65);
  }, []);
  const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  console.log(Data.email);
  const handleClick = () => {
    const sendData = async () => {
      const { data } = await axios.post(
        `https://0kecb3ce.api.sanity.io/v2021-06-07/data/mutate/production?returnIds=true`,
        {
          mutations: [
            {
              create: {
                _type: "user",
                createdAt: new Date().toISOString(),
                name: Data.name,
                email: email,
                dob: Data.dob,
              },
            },
          ],
        },
        {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${tokenWithWriteAccess}`,
          },
        }
      );
    };

    sendData();
    setChecked(true);
    Cookies.set("email", email);
  };

  return (
    <>
      {/* <ProgressBar scrollLength={"100%"} val={25} /> */}

      <div>
        <div
          className="w-[95%] md:w-[42%] lg:w-[37%] mx-auto mt-4"
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
            <ProgressBar1 scrollLength={"100%"} val={3} />
          </div>

          <div
            className={style.container}
            style={{ fontFamily: "Inter,sans-serif" }}
          >
            <label
              htmlFor="name"
              className="text-gray-200 my-4"
              style={{ fontWeight: 450 }}
            >
              Email
            </label>
            <input
              id="name"
              type="text"
              placeholder="name@example.com"
              className={style.input}
              value={email}
              onChange={emailChangeHandler}
              style={{ fontFamily: "Inter,sans-serif" }}
            />

            {Checked && (
              <p className={`${valid ? "hidden" : "flex"}  text-red-500`}>
                Enter a valid email
              </p>
            )}
            <h2
              className="text-gray-100 text-lg mt-10 tracking-wide"
              style={{ fontWeight: 450 }}
            >
              We respect your privacy and take protecting it very seriously — no
              spam
            </h2>
          </div>
          <Link href={`${valid > 0 ? "/commitment" : ""}`}>
            <div
              onClick={handleClick}
              className="fixed bottom-[0px] left-[0px] md:relative border-t-[2px] w-[100vw] px-4 md:w-auto md:border-none border-stone-700 bg-[#1e1e1e] md:bg-transparent "
            >
              <Button dis={email.length > 0 ? false : true} text={"Continue"} />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Email;
