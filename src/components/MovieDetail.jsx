import React from "react";
import { motion } from "framer-motion";

const MovieDetail = ({ movie, onClose }) => {
  const baseImageUrl = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
  const productionCompanies = movie.production_companies
    .map((company) => company.name)
    .join(", ");
  const languages = movie.spoken_languages
    .map((language) => language.name)
    .join(", ");

  return (
    <motion.div
      className="movie-detail"
      initial={{ opacity: 0, scale: 0.8, x: 1000 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.8, x: 1000 }}
      transition={{ duration: 0.5 }}
    >
      <section className="movie-detail__header">
        <motion.img
          src={baseImageUrl}
          alt={movie.title}
          className="movie-detail__backdrop"
        />
        <aside className="movie-detail__info">
          <h2>{movie.title}</h2>
          <h3>{movie.tagline}</h3>
          <p className="movie-detail__overview">{movie.overview}</p>
          <div className="movie-detail__meta">
            <p>
              <strong>Genres:</strong>{" "}
              {movie.genres.map((genre) => genre.name).join(", ")}
            </p>
            <p>
              <strong>Release Date:</strong> {movie.release_date}
            </p>
            <p>
              <strong>Rating:</strong> {movie.vote_average} / 10 (
              {movie.vote_count} votes)
            </p>
            <p>
              <strong>Revenue:</strong> ${movie.revenue.toLocaleString()}
            </p>
            <p>
              <strong>Runtime:</strong> {movie.runtime} min
            </p>
            <p>
              <strong>Languages:</strong> {languages}
            </p>
            <p>
              <strong>Production Companies:</strong> {productionCompanies}
            </p>
            <p>
              <strong>Country of Origin:</strong>{" "}
              {movie.origin_country.join(", ")}
            </p>
          </div>
          <a
            href={movie.homepage}
            className="movie-detail__homepage"
            target="_blank"
            rel="noopener noreferrer"
          >
            Official Website
          </a>
        </aside>
      </section>
      <button onClick={onClose} className="movie-detail__close-button">
        Close
      </button>
    </motion.div>
  );
};

export default MovieDetail;
