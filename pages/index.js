import React from "react";
import Home from "../components/Home/Home";
import Animator from "../components/UI/Animator";
const App = (props) => {
  const handleClick = (value) => {
    props.setData({ types: "goal", value: value });
  };
  props.which("home");
  return (
    <Animator className="overflow-x-hidden">
      <div className="">
        <Home goal={handleClick} />
      </div>
    </Animator>
  );
};

export default App;
