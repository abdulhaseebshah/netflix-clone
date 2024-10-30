import React from "react";

const VideoPlayer = ({ videoId }) => {
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
