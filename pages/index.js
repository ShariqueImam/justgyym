import React from "react";
import Home from "../components/Home/Home";
import Animator from "../components/UI/Animator";
const App = (props) => {
  const handleClick = (value) => {
    props.setData({ types: "goal", value: value });
  };

  return (
    <Animator className="overflow-x-hidden">
      <Home goal={handleClick} />
    </Animator>
  );
};

export default App;
