import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import Filter from "../assets/funnel-outline";
import { MovieContext } from "../context/MovieContext";
import Loader from "./Loader";
import MoviesGrid from "./MoviesGrid";
import FilterPopUp from "./FilterPopUp";

const LogoSearchBar = () => {
  const { fetchMovies, fetchedMovies } = useContext(MovieContext);

  const [animateButtons, setAnimateButtons] = useState(false);
  const [filterPopUpShouldAppear, setFilterPopUpShouldAppear] = useState(
    JSON.parse(localStorage.getItem("filterPopUpShouldAppear")) || false
  );
  const [fetching, setFetching] = useState(false);
  const [gridShouldAppear, setGridShouldAppear] = useState(
    JSON.parse(localStorage.getItem("gridShouldAppear")) || false
  );

  useEffect(() => {
    localStorage.setItem(
      "filterPopUpShouldAppear",
      JSON.stringify(filterPopUpShouldAppear)
    );
  }, [filterPopUpShouldAppear]);

  useEffect(() => {
    localStorage.setItem("gridShouldAppear", JSON.stringify(gridShouldAppear));
  }, [gridShouldAppear]);

  const handleFetchMovies = async () => {
    setFetching(true);
    await fetchMovies();
    setGridShouldAppear(false);
    setTimeout(() => {
      setFetching(false);
      setGridShouldAppear(true);
    }, 5000);
  };

  const filterPopUp = () => {
    setFilterPopUpShouldAppear((prev) => !prev);
  };

  return (
    <motion.div
      initial={{ y: -1000 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, delay: 1, type: "spring", damping: 11 }}
      onAnimationComplete={() => setAnimateButtons(true)}
    >
      <h1 className="logo">Movie Match</h1>

      <div className="search-filter-btn-wrapper">
        <motion.button
          initial={{ scale: 0.1, opacity: 0 }}
          animate={animateButtons ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          className="searchbtn"
          onClick={handleFetchMovies}
        >
          Get Recommendation
        </motion.button>

        <motion.button
          initial={{ scale: 0.1, opacity: 0 }}
          animate={animateButtons ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          className="filter-btn"
          onClick={() => filterPopUp()}
        >
          <Filter />
        </motion.button>
      </div>

      <FilterPopUp
        shouldBeVisible={filterPopUpShouldAppear}
        setShouldBeVisible={setFilterPopUpShouldAppear}
      />
      {fetching && <Loader />}
      {gridShouldAppear && <MoviesGrid />}
    </motion.div>
  );
};

export default LogoSearchBar;
