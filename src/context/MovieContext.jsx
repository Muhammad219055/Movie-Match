import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [selectedGenre, setSelectedGenre] = useState(
    JSON.parse(localStorage.getItem("selectedGenre")) || []
  );
  const [fetchedMovies, setFetchedMovies] = useState(
    JSON.parse(localStorage.getItem("fetchedMovies")) || []
  );
  const [selectedMovie, setSelectedMovie] = useState(
    JSON.parse(localStorage.getItem("selectedMovie")) || null
  );
  const [selectedMovieDetails, setSelectedMovieDetails] = useState(
    JSON.parse(localStorage.getItem("selectedMovieDetails")) || null
  );

  const URI = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
  };

  useEffect(() => {
    // Store the state in localStorage whenever selectedGenre changes
    localStorage.setItem("selectedGenre", JSON.stringify(selectedGenre));
  }, [selectedGenre]);

  useEffect(() => {
    // Store the state in localStorage whenever fetchedMovies changes
    localStorage.setItem("fetchedMovies", JSON.stringify(fetchedMovies));
  }, [fetchedMovies]);

  useEffect(() => {
    // Store the state in localStorage whenever selectedMovie changes
    localStorage.setItem("selectedMovie", JSON.stringify(selectedMovie));
  }, [selectedMovie]);

  useEffect(() => {
    // Store the state in localStorage whenever selectedMovieDetails changes
    localStorage.setItem(
      "selectedMovieDetails",
      JSON.stringify(selectedMovieDetails)
    );
  }, [selectedMovieDetails]);

  useEffect(() => {
    fetchMovies();
  }, [selectedGenre]);

  useEffect(() => {
    if (selectedMovie !== null) {
      fetchMovieDetails();
    }
  }, [selectedMovie]);

  const genresList = [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 53, name: "Thriller" },
    { id: 10770, name: "TV Movie" },
    { id: 37, name: "Western" },
  ];

  async function fetchMovieDetails() {
    if (selectedMovie !== null) {
      const url = `https://api.themoviedb.org/3/movie/${selectedMovie}`;
      try {
        const response = await axios.get(url, options);
        setSelectedMovieDetails(response.data); // Corrected: No 'results' field for a single movie
        console.log(response.data); // Display movie details
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    }
  }

  async function fetchMovies() {
    const url =
      selectedGenre.length <= 0
        ? URI
        : `https://api.themoviedb.org/3/discover/movie?with_genres=${selectedGenre.join(
            ","
          )}`;

    try {
      const response = await axios.get(url, options);
      setFetchedMovies(response.data.results);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }

  return (
    <MovieContext.Provider
      value={{
        fetchMovies,
        fetchedMovies,
        genresList,
        setSelectedGenre,
        selectedGenre,
        selectedMovie,
        setSelectedMovie,
        selectedMovieDetails,
        fetchMovieDetails,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
