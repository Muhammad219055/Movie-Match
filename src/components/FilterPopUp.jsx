import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import GenreButton from "./GenreButton";
import { MovieContext } from "../context/MovieContext";
import Close from "../assets/close-outline";

const FilterPopUp = ({ shouldBeVisible, setShouldBeVisible }) => {
  const { genresList, setSelectedGenre } = useContext(MovieContext);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, pointerEvents: "none" }}
      animate={
        shouldBeVisible ? { opacity: 1, scale: 1, pointerEvents: "unset" } : {}
      }
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.4 }}
      className="filter-window"
    >
      <h5>Select the Movie type</h5>
      <motion.button
        className="filter-window-close-button"
        initial={{ rotate: 0, scale:1.4 }}
        whileHover={{ rotate: 180, scale: 1.8 }}
        transition={{ duration: 0.3, delay: 0, origin: "right" }}
        onClick={() => {
          setShouldBeVisible(false);
        }}
      >
        <Close />
      </motion.button>
      <div className="genre-selection">
        {genresList.map((genre, index) => (
          <GenreButton name={genre.name} key={index} gid={genre.id} />
        ))}
      </div>
    </motion.div>
  );
};

export default FilterPopUp;
