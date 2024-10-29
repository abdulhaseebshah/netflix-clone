import React, { useState, useEffect, useRef } from "react";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiStarFill,
} from "@remixicon/react";
import "./slider.css";
import { NavLink } from "react-router-dom";

const Slider = ({ rowTitle, moviesData = [], exploreMore }) => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [movieCardWidth, setMovieCardWidth] = useState(0);
  const [isPrevVisible, setIsPrevVisible] = useState(false);
  const [isNextVisible, setIsNextVisible] = useState(true);

  useEffect(() => {
    if (sliderRef.current && moviesData.length > 0) {
      updateProductWidth();
    }
    window.addEventListener("resize", updateProductWidth);
    return () => window.removeEventListener("resize", updateProductWidth);
  }, [moviesData]);

  const updateProductWidth = () => {
    if (sliderRef.current) {
      const movieEl = sliderRef.current.querySelector(".card");
      const width = movieEl ? movieEl.clientWidth + 10 : 0;
      setMovieCardWidth(width);
      updateButtonVisibility(currentIndex, width);
    }
  };

  const slide = (direction) => {
    const visibleMovies = Math.floor(
      sliderRef.current.clientWidth / movieCardWidth
    );
    const maxIndex = moviesData.length - visibleMovies;
    let newIndex = currentIndex + direction * visibleMovies;

    newIndex = Math.max(0, Math.min(newIndex, maxIndex));
    setCurrentIndex(newIndex);

    sliderRef.current.scrollTo({
      left: newIndex * movieCardWidth,
      behavior: "smooth",
    });
    updateButtonVisibility(newIndex, movieCardWidth);

    console.log(sliderRef.current);
  };

  const updateButtonVisibility = (index, width) => {
    const visibleProducts = Math.floor(sliderRef.current.clientWidth / width);
    setIsPrevVisible(index > 0);
    setIsNextVisible(index < moviesData.length - visibleProducts);
  };

  return (
    <div className="listing listing--carousel">
      <div className="listing__head">
        <h2 className="listing__title">{rowTitle || "Trending Movies"}</h2>
        <NavLink to={exploreMore} className="listing__explore">
          <strong>Explore All</strong>
        </NavLink>
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
          {moviesData.map((movie, index) => (
            <div className="card" key={index}>
              <a href="#">
                <div className="card__img">
                  <img
                    src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${movie.poster_path}`}
                    alt={movie.title || "Movie Poster"}
                    className="w-full h-full"
                  />
                </div>
              </a>
              <div className="card__link hidden md:block">
                <h2 className="card__name">
                  {movie.title || movie.name || "Untitled Movie"}
                </h2>
                <div className="card__rating">
                  <div className="card__stars">
                    <div
                      style={{
                        width: `${movie.vote_average * 10}%`,
                      }}
                    ></div>
                  </div>
                  <div className="card__vote">{movie.vote_average.toFixed(1)}</div>
                </div>
              </div>
            </div>
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

export default Slider;
