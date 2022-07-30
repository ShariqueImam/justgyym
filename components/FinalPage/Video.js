import React from "react";
import YouTube from "react-youtube";
import useWindowSize from "../hooks/windowSize";
const Video = () => {
  const { width } = useWindowSize();
  const opts = {
    height: `${width < 700 ? 390 : width > 1500 ? 800 : 500}`,
    width: `${width < 700 ? 430 : width > 1500 ? 1000 : 690}`,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleReady = (e) => {
    e.target.pauseVideo();
  };
  return (
    <div
      className="flex flex-col my-12 w-[90%] md:w-[55%] mx-auto"
      style={{ fontFamily: "Inter,sans-serif" }}
    >
      <h2 className="text-[#ffffff] font-bold text-4xl text-4xl lg:text-5xl  ">
        Start reaching your goals with our workouts
      </h2>
      <p className="text-[#ffffff] my-12  text-sm font-bold">
        Try exercises designed to help you build your dream body. Each workout
        combines different training according to your level and problem areas.
      </p>
      <YouTube videoId={"sM7tdlFGpUA"} opts={opts} onReady={handleReady} />
    </div>
  );
};

export default Video;
