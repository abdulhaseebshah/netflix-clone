import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { fetchTrendingMovies, fetchTrendingTvShows } from "../api/moviedb";
import { InView } from "react-intersection-observer";
import Card from "../components/card/card";

export default function ListByCategory() {
  const { category } = useParams();
  const { pathname } = useLocation();
  const [movieData, setMovieData] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const getTrendingItems = async (pageNum) => {
    try {
      setLoading(true);
      let data;
      if (pathname.includes("movie")) {
        data = await fetchTrendingMovies(pageNum);
      } else if (pathname.includes("tv")) {
        data = await fetchTrendingTvShows(pageNum);
        console.log("Hello")
      } else {
        setError("Invalid category. Please use 'movies' or 'tv'.");
        setHasMore(false);
        setLoading(false);
        return;
      }

      if (data?.results) {
        setMovieData((prevData) => [...prevData, ...data.results]);
        if (data.page >= data.total_pages) {
          setHasMore(false);
        }
      }
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch data. Please try again later.");
      setLoading(false);
    }
  };

  useEffect(() => {
    setMovieData([]); // Reset data when category changes
    setPage(1); // Reset page to 1 for new category
    setHasMore(true); // Reset hasMore for new category
    getTrendingItems(1); // Fetch the first page for the new category
  }, [category]);

  useEffect(() => {
    if (page > 1) {
      getTrendingItems(page);
    }
  }, [page]);

  const loadMore = () => {
    if (!loading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="listing">
      <div className="listing_head">
        <h2 className="listing__title mb-5">
          Trending {category.includes("movie") ? "Movies" : "TV Shows"}
        </h2>
      </div>
      <div className="listing__items">
        {movieData.map((movie, index) => (
          <Card movie={movie} key={index} />
        ))}
      </div>
      {hasMore && (
        <InView
          as="div"
          onChange={(inView) => {
            if (inView) {
              loadMore();
            }
          }}
        ></InView>
      )}
    </div>
  );
}
