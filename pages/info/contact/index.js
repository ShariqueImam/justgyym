import React from "react";
import Animator from "../../../components/UI/Animator";
import Contact from "../../../components/Contact/Contact";
const index = (props) => {
  props.which("home1");
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Animator>
      <Contact />
    </Animator>
  );
};

export default index;
