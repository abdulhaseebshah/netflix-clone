import React, { useEffect, useState } from "react";
import { RiPlayFill } from "@remixicon/react";
import { motion } from "framer-motion";
import { courseDetails } from "../../api/learningdb";
import { useLocation } from "react-router-dom";

const LearningBanner = ({ handleWatchTrailer }) => {
  const { pathname } = useLocation();
  const [bannerData, setBannerData] = useState([]);

  const randomBannerData = () => {
    const randomIndex = Math.floor(Math.random() * courseDetails.length);
    return courseDetails[randomIndex];
  };

  useEffect(() => {
    const data = randomBannerData();
    setBannerData(data);
  }, [pathname]);

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
