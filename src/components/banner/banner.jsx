import React from "react";
import "./banner.css";
import { RiPlayFill } from "@remixicon/react";

const Banner = ({ bannerData }) => {
  const formatVoteCount = (vote_count) => {
    return vote_count >= 1000
      ? new Intl.NumberFormat().format(vote_count)
      : vote_count;
  };
  const formatVotePercentage = (vote_count) => {
    if (vote_count < 10) {
      const percentage = Math.floor(vote_count * 10);
      return `${percentage}%`;
    } else {
      const integerVoteCount = Math.floor(vote_count);
      return integerVoteCount >= 1000
        ? new Intl.NumberFormat().format(integerVoteCount)
        : integerVoteCount.toString();
    }
  };

  return (
    <div className="heroBanner">
      <div className="movieImg">
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w1280${bannerData.backdrop_path}`}
            alt={bannerData.title || bannerData.name}
            className="movieImage"
          />
        </div>
      </div>
      <div className="txtBx">
        <div>
          <h1 className="movieTitle">{bannerData.title || bannerData.name}</h1>
          <div className="movieMeta">
            <div className="movieReviews">
              <div className="card__rating">
                <div className="card__stars w-28 h-4">
                  <div
                    style={{
                      width: `${formatVotePercentage(bannerData.vote_average)}`,
                    }}
                  ></div>
                </div>
                {/* <div className="card__vote">{bannerData.vote_average}</div> */}
                <div>{formatVoteCount(bannerData.vote_count)} Reviews</div>
              </div>
            </div>
            <div className="movieInfo">
              <span>{bannerData.release_date?.split("-")[0]}</span>
              <span>1h 25min</span>
              <span>Cert. 18</span>
            </div>
          </div>
          <div className="movieDesc">{bannerData.overview}</div>
          <button className="button movieTrailerBtn">
            <RiPlayFill className="button--icon" />
            Watch Trailer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
