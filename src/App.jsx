import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
import AppLayout from "./pages/layout";
import Movies from "./pages/movies";
import TvShows from "./pages/tv-shows";
import PageNotFound from "./components/pnf/page-not-found";

const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const App = () => {
  return (
    <>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/movie" element={<Movies />} />
          <Route path="/tv" element={<TvShows />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
