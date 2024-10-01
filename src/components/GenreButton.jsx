import React, { useContext, useEffect, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import { motion } from "framer-motion";
const GenreButton = ({ name, gid }) => {
  const [clicked, setClicked] = useState(false);
  const { setSelectedGenre, selectedGenre } = useContext(MovieContext);
  const handleClick = (event) => {
    const gid = parseInt(event.target.value);
    console.log(gid);
    if (clicked === false) {
      setSelectedGenre((prev) => [...prev, gid]);
      setClicked(true);
    } else {
      setSelectedGenre((prev) => prev.filter((genre) => genre !== gid));
      setClicked(false);
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0, border: "0.5px solid transparent" }}
      animate={{ opacity: 1, border: "0.5px solid #121212" }}
      transition={{ duration: 0.4, delay: 0 }}
      className={`g-button ${clicked ? " clicked-g" : ""}`}
      onClick={handleClick}
      value={gid}
    >
      {name}
    </motion.button>
  );
};

export default GenreButton;
