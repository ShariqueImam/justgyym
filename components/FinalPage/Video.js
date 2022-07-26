import React from "react";
import YouTube from "react-youtube";

const Video = () => {
  const opts = {
    height: "390",
    width: "450",
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
      className="flex items-center justify-center flex-col my-12"
      style={{ fontFamily: "Inter,sans-serif" }}
    >
      <h2 className="text-gray-100 font-bold text-4xl text-4xl lg:text-5xl text-center w-[90%] md:w-[30%] mx-auto">
        Start reaching your goals with our workouts
      </h2>
      <p className="text-gray-100 my-12 text-center w-[90%] md:w-[30%] mx-auto text-sm">
        Try exercises designed to help you build your dream body. Each workout
        combines different training according to your level and problem areas.
      </p>
      <YouTube
        videoId={"sM7tdlFGpUA"}
        opts={opts} // defaults -> ''
        onReady={handleReady}
      />
    </div>
  );
};

export default Video;
