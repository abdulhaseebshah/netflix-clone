import React from "react";
import { RiPlayFill } from "@remixicon/react";
import { motion } from "framer-motion";
import { bannerData } from "../../api/learningdb";

const LearningBanner = ({ handleWatchTrailer }) => {
  return (
    <div className="heroBanner">
      <div className="movieImg">
        <div>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: [1, 0, 0, 1] }}
            src={bannerData.thumbnail}
            alt={bannerData?.title}
            className="movieImage"
          />
        </div>
      </div>
      <div className="txtBx">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="movieTitle">
            {bannerData?.title || bannerData?.name}
          </h1>
          <div className="movieDesc">
            {bannerData.overview}
            {bannerData.overview?.length < 30 && "..."}
          </div>
          <button
            className="button movieTrailerBtn"
            onClick={() => handleWatchTrailer(bannerData.videoLink)}
          >
            <RiPlayFill className="button--icon" />
            Watch Intro
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default LearningBanner;
