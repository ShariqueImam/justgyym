import React, { useState, useEffect } from "react";
import useInput from "../hooks/validateInput";
import axios from "axios";
const style = {
  wrapper: "",
  smallHeading:
    "font-bold border-b-2 border-stone-200 text-2xl md:text-3xl max-w-fit mx-auto py-2 text-gray-200 my-8 md:my-10",
  formContainer: "flex flex-col",
  input:
    "px-3  md:px-4 py-2 md:py-3 placeholder:text-gray-900 ring-none outline-none bg-[rgba(7,0,41,0.03)]  my-4 w-[90%] md:w-[85%] mx-auto border-2 border-stone-400 bg-stone-200",
  btn: "bg-opacity-[0.8] hover:bg-opacity-[0.95] transition duration-[300ms] my-6 bg-orange-600 mx-auto px-8 md:px-12 py-2 md:py-3 text-gray-200 font-bold tracking-wide",
};

const ContactForm = () => {
  const tokenWithWriteAccess =
    "sk3lfKnxQJtTFd4mgLBG3YQ1C2O1gkbwkUHx8AMdQEWdJ5S4vbjsHZo8z2UiGLkoa6prTwndZioph4EeQkOZLZbFjwLVCjwz8KGkLzWCcAXDt78v9Q4oCeJx3faCHBHDnspIZ2XqXxVzJNkUpTiAdRiilVhlILODgZ8xSqlbwn7jcKvUs9NR";
  const [isError, setError] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const {
    value: email,
    valueIsValid: emailIsValid,
    hasError: emailHasError,
    inputChangeHandler: emailChangeHandler,
    reset: emailReset,
  } = useInput((val) => val.includes("@"));
  // for name setting
  const {
    value: name,
    valueIsValid: nameIsValid,
    hasError: nameHasError,
    inputChangeHandler: nameChangeHandler,
    reset: nameReset,
  } = useInput((val) => val.trim() !== "");
  const {
    value: message,
    valueIsValid: messageIsValid,
    hasError: messageHasError,
    inputChangeHandler: messageChangeHandler,
    reset: messageReset,
  } = useInput((val) => val.trim() !== "");
  useEffect(() => {
    if (nameIsValid && emailIsValid && messageIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [nameIsValid, emailIsValid, messageIsValid]);
  const submitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      setError(true);
      return;
    }
    const sendData = async () => {
      setIsSubmit(true);
      const { data } = await axios.post(
        `https://0kecb3ce.api.sanity.io/v2021-06-07/data/mutate/production?returnIds=true`,
        {
          mutations: [
            {
              create: {
                _type: "contact",
                createdAt: new Date().toISOString(),
                name: name,
                email: email,
                message: message,
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
      const flashTime = setTimeout(() => {
        setIsSubmit(false);
      }, 2000);
      return () => {
        clearTimeout(flashTime);
      };
    };
    sendData();
    messageReset();
    emailReset();
    nameReset();
    messageReset();
  };
  return (
    <div
      className={style.wrapper}
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <h2 className={style.smallHeading}>Send Message</h2>
      <form
        action="/"
        className={style.formContainer}
        onSubmit={submitHandler}
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <input
          type="name"
          className={style.input}
          placeholder="Your Name here..."
          value={name}
          onChange={nameChangeHandler}
        />
        <input
          type="email"
          className={style.input}
          placeholder="Your Email here... "
          value={email}
          onChange={emailChangeHandler}
        />
        <textarea
          rows="10"
          col="20"
          className={style.input}
          placeholder="Your Message here... "
          value={message}
          onChange={messageChangeHandler}
        ></textarea>
        <button className={style.btn} type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
