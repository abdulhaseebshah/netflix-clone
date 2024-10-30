import React, { useEffect, useRef, useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";
import LearningCard from "../learning-card/learning-card";

const LearningSlider = ({courseData = [], rowTitle, handleWatchTrailer}) => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [courseCardWidth, setCourseCardWidth] = useState(0);
  const [isPrevVisible, setIsPrevVisible] = useState(false);
  const [isNextVisible, setIsNextVisible] = useState(true);

  useEffect(() => {
    if (sliderRef.current && courseData.length > 0) {
      updateProductWidth();
    }
    window.addEventListener("resize", updateProductWidth);
    return () => window.removeEventListener("resize", updateProductWidth);
  }, [courseData]);

  const updateProductWidth = () => {
    if (sliderRef.current) {
      const courseEl = sliderRef.current.querySelector(".card");
      const width = courseEl ? courseEl.clientWidth + 10 : 0;
      setCourseCardWidth(width);
      updateButtonVisibility(currentIndex, width);
    }
  };

  const slide = (direction) => {
    const visibleMovies = Math.floor(
      sliderRef.current.clientWidth / courseCardWidth
    );
    const maxIndex = courseData.length - visibleMovies;
    let newIndex = currentIndex + direction * visibleMovies;

    newIndex = Math.max(0, Math.min(newIndex, maxIndex));
    setCurrentIndex(newIndex);

    sliderRef.current.scrollTo({
      left: newIndex * courseCardWidth,
      behavior: "smooth",
    });
    updateButtonVisibility(newIndex, courseCardWidth);

    console.log(sliderRef.current);
  };

  const updateButtonVisibility = (index, width) => {
    const visibleMovies = Math.floor(sliderRef.current.clientWidth / width);
    setIsPrevVisible(index > 0);
    setIsNextVisible(index < courseData.length - visibleMovies);
  };
  return (
    <div className="listing listing--carousel learning--carousel">
      <div className="listing__head">
        <h2 className="listing__title">{rowTitle || "Trending Movies"}</h2>
      </div>
      <div className="carousel">
        {isPrevVisible && (
          <button
            className="carousel__nav carousel__nav--left"
            onClick={() => slide(-1)}
          >
            <RiArrowLeftSLine size={40} color="#fff" />
          </button>
        )}

        <div className="carousel__items" ref={sliderRef}>
          {courseData.map((movie, index) => (
            <LearningCard movie={movie} key={index} handleWatchTrailer={handleWatchTrailer} />
          ))}
        </div>
        {isNextVisible && (
          <button
            className="carousel__nav carousel__nav--right"
            onClick={() => slide(1)}
          >
            <RiArrowRightSLine size={40} color="#fff" />
          </button>
        )}
      </div>
    </div>
  );
};

export default LearningSlider;
