import React, { useContext, useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { MovieContext } from "../context/MovieContext";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MoviesGrid = () => {
  const navigate = useNavigate();
  const { fetchedMovies, setSelectedMovie, fetchMovieDetails } =
    useContext(MovieContext);

  const [viewMoreClicked, setViewMoreClicked] = useState(
    JSON.parse(localStorage.getItem("viewMoreClicked")) || false
  );

  useEffect(() => {
    localStorage.setItem("viewMoreClicked", JSON.stringify(viewMoreClicked));
  }, [viewMoreClicked]);

  useEffect(() => {
    fetchMovieDetails();
  }, [fetchedMovies, fetchMovieDetails]);

  const handlePosterClick = (movie) => {
    setSelectedMovie(movie.id);
    navigate(`/movie/${movie.id}`);
    console.log(movie);
  };

  const handleViewMore = () => {
    setViewMoreClicked((prev) => !prev);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 1000 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.3, type: "spring" }}
      exit={{ y: -10000, opacity: 0 }}
      className="movies-grid"
    >
      {fetchedMovies.slice(0, 9).map((movie, index) => (
        <MovieCard
          key={index}
          movie={movie}
          onClick={() => handlePosterClick(movie)}
        />
      ))}

      {viewMoreClicked &&
        fetchedMovies
          .slice(9, -1)
          .map((movie, index) => (
            <MovieCard
              key={index}
              movie={movie}
              onClick={() => handlePosterClick(movie)}
            />
          ))}

      <motion.button
        className="show-more-movies-button"
        initial={{ opacity: 0, x: 400 }}
        whileInView={{ opacity: 1, x: 0 }}
        whileHover={{ y: 10 }}
        transition={{ duration: 0.6, delay: 0.3, type: "spring", damping: 10 }}
        onClick={handleViewMore}
      >
        {viewMoreClicked ? "Show Less" : "Show More"}
      </motion.button>
    </motion.div>
  );
};

export default MoviesGrid;
