import React from "react";
import { motion } from "framer-motion";

const MovieDetail = ({ movie, onClose }) => {
  const baseImageUrl = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;

  return (
    <motion.div
      className="movie-detail"
      initial={{ opacity: 0, scale: 0.8, x: 1000 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.8, x: 1000 }}
      transition={{ duration: 0.5 }}
    >
      <button onClick={onClose} className="close-button">
        Close
      </button>
      <motion.img
        src={baseImageUrl}
        alt="abc"
        style={{ position: "absolute", top: 0, right: 0 }} // Position in the top right corner
      />
      {/* <h2>{movie.title}</h2>
      <p>{movie.overview}</p> */}
      {/* Add more movie details here */}
    </motion.div>
  );
};

export default MovieDetail;
