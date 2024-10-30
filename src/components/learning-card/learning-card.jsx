import React from "react";
import { motion } from "framer-motion";
import "./learning-card.css";

const LearningCard = ({ course, handleWatchTrailer }) => {
  return (
    <div className="card learning__card">
      <a
        onClick={() => handleWatchTrailer(course.videoLink)}
        className="cursor-pointer"
      >
        <div className="card__img">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-full"
          />
        </div>
      </a>
      <div className="card__link hidden md:block">
        <h2 className="card__name">
          {course.title || course.name || "Untitled course"}
        </h2>
        {/* <div className="flex items-center gap-2">
          <p className="font-medium text-lg text-white">₹{course.price}</p>
          <p className="font-light line-through text-stone-500">
            ₹{course.orignal_price}
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default LearningCard;
