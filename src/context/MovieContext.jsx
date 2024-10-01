import React, { createContext, useState, useCallback, useEffect } from "react";
import axios from "axios";
export const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [fetchedMovies, setFetchedMovies] = useState([]);
  const URI = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&sort_by=popularity.desc`;
  useEffect(() => {
    console.log(selectedGenre);
  }, [selectedGenre]);
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
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 35, name: "Comedy" },
    { id: 18, name: "Drama" },
    { id: 10749, name: "Romance" },
    { id: 10402, name: "Music" },
    { id: 27, name: "Horror" },
    { id: 53, name: "Thriller" },
    { id: 37, name: "Western" },
  ];

  async function fetchMovies() {
    const url = selectedGenre.length <= 0 
      ? URI
      : `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=${selectedGenre.join(',')}`;
  
    try {
      const response = await axios.get(url);
      console.log(response.data);
      setFetchedMovies(response.data.results);
      return response.data;
    } catch (error) {
      console.error(error);
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
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
