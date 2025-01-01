import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
import AppLayout from "./pages/layout";
import Movies from "./pages/movies";
import TvShows from "./pages/tv-shows";
import PageNotFound from "./components/pnf/page-not-found";
import Search from "./pages/search/search";
import ListByCategory from "./pages/list-by-category";

const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ScrollTop />
      <Routes>
        <Route
          path="/"
          element={<AppLayout isOpen={isOpen} setIsOpen={setIsOpen} />}
        >
          <Route index element={<Home />} />
          <Route path="/movie" element={<Movies />} />
          <Route path="/tv" element={<TvShows />} />
          <Route path="/search" element={<Search />} />
          <Route path="/:type/category/:category" element={<ListByCategory />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
