import React, { useContext, useState } from "react";
import MovieCard from "./MovieCard";
import { MovieContext } from "../context/MovieContext";
import { motion } from "framer-motion";
import MovieDetail from "./MovieDetail";

const MoviesGrid = () => {
  const { fetchedMovies } = useContext(MovieContext);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [viewMoreClicked, setViewMoreClicked] = useState(false);

  const handlePosterClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseDetails = () => {
    setSelectedMovie(null);
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
        whileHover={{y:10}}
        transition={{ duration: 0.6, delay: 0.3, type: "spring", damping: 10 }}
        onClick={handleViewMore}
      >
        {viewMoreClicked ? "Show Less" : "Show More"}
      </motion.button>
    </motion.div>
  );
};

export default MoviesGrid;
