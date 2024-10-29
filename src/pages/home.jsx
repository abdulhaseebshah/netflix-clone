import React, { useEffect, useState } from "react";
import Sidebar from "../components/side-navbar/sidebar";
import Banner from "../components/banner/banner";
import Slider from "../components/slider/slider";
import { fetchTrendingMovies, fetchTrendingTvShows } from "../api/moviedb";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [tvShowsData, setTvShowsData] = useState([]);
  const [bannerData, setBannerData] = useState([]);

  const location = useLocation();

  useEffect(() => {
    getTrendingMovies();
    getTrendingTvShows();
  }, [location.pathname]);

  const getTrendingMovies = async () => {
    const data = await fetchTrendingMovies();
    setMoviesData(data.results);
    if (data.results && data.results.length > 0) {
      const randomMovie =
        data.results[Math.floor(Math.random() * data.results.length)];
      setBannerData(randomMovie);
    }
  };

  const getTrendingTvShows = async () => {
    const data = await fetchTrendingTvShows();
    setTvShowsData(data.results);
  };

  return (
    <div className="main">
      <div className="searchBar"></div>
      <Banner bannerData={bannerData} />
      <Slider
        rowTitle={"Trending Movies"}
        moviesData={moviesData}
        exploreMore={"/movie"}
      />
      <Slider
        rowTitle={"Trending TV Shows"}
        moviesData={tvShowsData}
        exploreMore={"/tv"}
      />
    </div>
  );
};

export default Home;
