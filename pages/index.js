import React from "react";
import Home from "../components/Home/Home";
import Animator from "../components/UI/Animator";
const App = (props) => {
  const handleClick = (value) => {
    props.setData({ types: "goal", value: value });
  };
  props.which("home");
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="overflow-x-hidden scroll-smooth">
      <div className="">
        <Home goal={handleClick} />
      </div>
    </div>
  );
};

export default App;
