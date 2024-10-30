import React from "react";

const VideoPlayer = ({ videoId }) => {
  
  return (
    <div
      className="modal__iframe"
    //   style={{ width: "385px", height: "216.562px" }}
    >
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0&autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        style={{ width: "100%", height: "100%" }} // Make iframe responsive
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
