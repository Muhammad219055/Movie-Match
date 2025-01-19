import React, { useState } from "react";
import { motion } from "framer-motion";

const MovieCard = ({ movie, onClick }) => {
  const baseImageUrl = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;

  return (
    <motion.div
      initial={{ opacity: 0, x: 100, y: 100 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.2, delay: 0.1 }}
    >
      <motion.img
        initial={{ scale: 1, boxShadow: "0px 0px 10px transparent" }}
        whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px black" }}
        transition={{ duration: 0.3, type: "spring" }}
        exit={{ y: -10000, opacity: 0 }}
        onClick={onClick}
        src={baseImageUrl}
        className="moviePoster"
        alt=""
      />
    </motion.div>
  );
};

export default MovieCard;
