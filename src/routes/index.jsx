import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import MoviePage from "../pages/MoviePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MoviePage />} />
    </Routes>
  );
};

export default AppRoutes;
