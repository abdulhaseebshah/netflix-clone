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
const topRatedTvShowsEndpoint = `${baseUrl}/tv/top_rated?api_key=${APIKEY}`
const onTheAirTvShowsEndpoint = `${baseUrl}/tv/on_the_air?api_key=${APIKEY}`;
const airingTodayTvShowsEndpoint = `${baseUrl}/tv/airing_today?api_key=${APIKEY}`;

const apiCall = async (endpoint, params) => {
  const options = {
    method: "GET",
    url: endpoint,
    params: params ? params : {},
  };
  try {
    const response = await axios.request(options);
    return response?.data;
  } catch (error) {
    console.log("Error", error);
  }
};

// All fetch fucntion for Movies
export const fetchTrendingMovies = () => apiCall(trendingMoviesEndpoint);
export const fetchPopularMovies = () => apiCall(popularMoviesEndpoint);
export const fetchTopRatedMovies = () => apiCall(topRatedMoviesEndpoint);
export const fetchUpCommingMovies = () => apiCall(upCommingMoviesEndpoint);
export const fetchNowPlayingMovies = () => apiCall(nowPlayingMoviesEndpoint);

// Fetch function for TV Shows
export const fetchTrendingTvShows = () => apiCall(trendingTvShowsEndpoint);
export const fetchPopularTvShows = () => apiCall(popularTvShowsEndpoint);
export const fetchTopRatedTvShows = () => apiCall(topRatedTvShowsEndpoint);
export const fetchOnTheAirTvShows = () => apiCall(onTheAirTvShowsEndpoint);
export const fetchAiringTodayTvShows = () => apiCall(airingTodayTvShowsEndpoint);