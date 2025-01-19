import React, { useContext } from "react";
import { motion } from "framer-motion";
import { MovieContext } from "../context/MovieContext";
import MovieDetail from "../components/MovieDetail";
import { pageTransition } from "../animations/transitions";

const MoviePage = () => {
  const { selectedMovieDetails } = useContext(MovieContext);

  const handleClose = () => {
    window.history.back();
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      {selectedMovieDetails !== null && (
        <MovieDetail movie={selectedMovieDetails} onClose={handleClose} />
      )}
    </motion.div>
  );
};

export default MoviePage;
