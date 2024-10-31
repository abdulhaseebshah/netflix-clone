import React from "react";
import ProgressBar from "../progressbar-loader/progressbar";

const VideoPlayer = ({ videoId }) => {
  // loader
  if (!videoId) {
    return <ProgressBar />;
  }
  return (
    <div
      className="modal__iframe"
      //   style={{ width: "385px", height: "216.562px" }}
    >
      <video src={`${videoId}`} controls autoPlay muted></video>
    </div>
  );
};

export default VideoPlayer;
