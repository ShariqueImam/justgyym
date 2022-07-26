import "../styles/globals.css";
import Head from "next/head";
import { AnimatePresence, PresenceContext } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import { useRouter } from "next/router";
import React, { useState } from "react";
import OpenMenu from "../components/OpenMenu/OpenMenu";
import Cookies from "js-cookie";
// import { ParallaxProvider } from "react-scroll-parallax";

function MyApp({ Component, pageProps }) {
  const { asPath } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [Which, setWhich] = useState("");
  const handleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  const handleData = ({ types, value }) => {
    Cookies.set(types, value);
  };
  const handelWhich = (value) => {
    setWhich(value);
  };

  return (
    <>
      <Head>
        <title key={"title"}>
          Just Gyym | You personalized workout program
        </title>
        {/* <link rel="icon" href="/logo.webp" className="transform scale-[0.5]"/> */}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="sharique Imam Portfolio sharique shariq sharriq"
        />
        <meta
          name="viewport"
          content="height=device-height, 
                      width=device-width, initial-scale=1.0, 
                      minimum-scale=1.0, maximum-scale=1.0, 
                      user-scalable=no, target-densitydpi=device-dpi"
        ></meta>
      </Head>
      <div
        className={`
           ${
             Which === "home" || Which === "home2" ? "home-bg" : "home-bg1"
           }  z-0 w-[100vw]`}
        style={{ fontDisplay: "swap", width: "calc(100% - 1px)" }}
      >
        {/* <AnimatePresence exitBeforeEnter> */}
        {/* <div key={asPath}> */}
        <Navbar menu={handleMenu} pos={Which} />
        {/* <ParallaxProvider> */}
        {isOpen && <OpenMenu menu={handleMenu} pos={Which} />}
        <div
          className="overflow-x-hidden w-[100vw]"
          style={{ fontDisplay: "swap", width: "calc(100% - 1px)" }}
        >
          {!isOpen && (
            <Component
              {...pageProps}
              onClick={handleMenu}
              setData={handleData}
              which={handelWhich}
            />
          )}
        </div>
        {/* </ParallaxProvider> */}
        {/* </div> */}
        {/* </AnimatePresence> */}
      </div>
    </>
  );
}

export default MyApp;
export const getStaticProps = async () => {
  return {
    props: {},
  };
};
