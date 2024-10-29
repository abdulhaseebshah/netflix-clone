import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
import AppLayout from "./pages/layout";
import Movies from "./pages/movies";
import TvShows from "./pages/tv-shows";

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
        </Route>
      </Routes>
      <div className="pt-[2rem] px-[1.5rem] pb-[6.5rem] text-[#80868b]">
        <p className="my-[.2rem] text-sm">© 2024 Abdul Haseeb. All rights reserved.</p>
        <p className="my-[.2rem] text-sm">Designed and built by me, data provided by <u>TMDb</u>.</p>
      </div>
    </>
  );
};

export default App;
