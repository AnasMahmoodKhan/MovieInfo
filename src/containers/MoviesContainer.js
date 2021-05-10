import React from "react";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";

const MoviesContainer = ({ movies }) => (
  <div className="row">
    {movies.Response === "True"
      ? movies.Search.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))
      : null}
  </div>
);

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps)(MoviesContainer);
