import axios from "axios";

const APIKEY = import.meta.env.VITE_API_KEY;

const baseUrl = "https://api.themoviedb.org/3";

// All Movies Endpoints
const trendingMoviesEndpoint = `${baseUrl}/trending/movie/week?api_key=${APIKEY}`;
const popularMoviesEndpoint = `${baseUrl}/movie/popular?api_key=${APIKEY}`;
const topRatedMoviesEndpoint = `${baseUrl}/movie/top_rated?api_key=${APIKEY}`;
const upCommingMoviesEndpoint = `${baseUrl}/movie/upcoming?api_key=${APIKEY}`;
const nowPlayingMoviesEndpoint = `${baseUrl}/movie/now_playing?api_key=${APIKEY}`;

// All TV Shows Endpoints
const trendingTvShowsEndpoint = `${baseUrl}/trending/tv/week?api_key=${APIKEY}`;
const popularTvShowsEndpoint = `${baseUrl}/tv/popular?api_key=${APIKEY}`;
const topRatedTvShowsEndpoint = `${baseUrl}/tv/top_rated?api_key=${APIKEY}`;
const onTheAirTvShowsEndpoint = `${baseUrl}/tv/on_the_air?api_key=${APIKEY}`;
const airingTodayTvShowsEndpoint = `${baseUrl}/tv/airing_today?api_key=${APIKEY}`;

const apiCall = async (endpoint, params = {}) => {
  const options = {
    method: "GET",
    url: endpoint,
    params: { ...params },
  };

  try {
    const response = await axios.request(options);
    return response?.data;
  } catch (error) {
    console.log("Error", error);
    return null;
  }
};

// Fetch function for Movies (with pagination)
export const fetchTrendingMovies = (page = 1) => apiCall(trendingMoviesEndpoint, { page });
export const fetchPopularMovies = (page = 1) => apiCall(popularMoviesEndpoint, { page });
export const fetchTopRatedMovies = (page = 1) => apiCall(topRatedMoviesEndpoint, { page });
export const fetchUpCommingMovies = (page = 1) => apiCall(upCommingMoviesEndpoint, { page });
export const fetchNowPlayingMovies = (page = 1) => apiCall(nowPlayingMoviesEndpoint, { page });

// Fetch function for TV Shows (with pagination)
export const fetchTrendingTvShows = (page = 1) => apiCall(trendingTvShowsEndpoint, { page });
export const fetchPopularTvShows = (page = 1) => apiCall(popularTvShowsEndpoint, { page });
export const fetchTopRatedTvShows = (page = 1) => apiCall(topRatedTvShowsEndpoint, { page });
export const fetchOnTheAirTvShows = (page = 1) => apiCall(onTheAirTvShowsEndpoint, { page });
export const fetchAiringTodayTvShows = (page = 1) => apiCall(airingTodayTvShowsEndpoint, { page });
