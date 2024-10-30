import React from "react";
import { motion } from "framer-motion";
import "./learning-card.css";

const LearningCard = ({ movie, handleWatchTrailer }) => {
  return (
    <div className="card learning__card">
      <a onClick={() => handleWatchTrailer(movie.videoLink)} className="cursor-pointer">
        <div className="card__img">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            src={movie.thumbnail}
            alt={movie.title}
            className="w-full h-full"
          />
        </div>
      </a>
      <div className="card__link hidden md:block">
        <h2 className="card__name">
          {movie.title || movie.name || "Untitled Movie"}
        </h2>
      </div>
    </div>
  );
};

export default LearningCard;
