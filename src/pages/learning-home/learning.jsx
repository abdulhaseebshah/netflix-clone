import React, { useState } from "react";
import LearningBanner from "../../components/learning-banner/learningBanner";
import LearningSlider from "../../components/learning-slider/learning-slider";
import { courseDetails } from "../../api/learningdb";
import Footer from "../../components/footer/footer";
import Modal from "../../components/modal/modal";
import VideoPlayer from "../../components/video-player/video-player";

const Learning = () => {
  const [video, setVideo] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleWatchTrailer = (videoLink) => {
    setShowModal(true);

    setVideo(videoLink);
    // console.log()
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <LearningBanner handleWatchTrailer={handleWatchTrailer} />
      <Modal show={showModal} onClose={handleCloseModal}>
        <VideoPlayer videoId={video} />
      </Modal>
      <LearningSlider
        rowTitle={"Frontend Development"}
        courseData={courseDetails}
        handleWatchTrailer={handleWatchTrailer}
      />
      <Footer />
    </div>
  );
};

export default Learning;
