import React, { useEffect, useState, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";
import useHttp from "./hooks/use-http";

const DB_URL =
  "https://udemy-react-http-a7847-default-rtdb.firebaseio.com/movies.json";

function App() {
  const [movies, setMovies] = useState([]);

  const transformMovies = (movies) => {
    const loadedMovies = [];

    for (const key in movies) {
      loadedMovies.push({
        id: key,
        title: movies[key].title,
        openingText: movies[key].openingText,
        releaseDate: movies[key].releaseDate,
      });
    }

    setMovies(loadedMovies);
  };

  const { isLoading, error, sendRequest } = useHttp();

  useEffect(() => {
    sendRequest({ url: DB_URL }, transformMovies);
  }, [sendRequest]);

  let content = <p>Found no movies.</p>;

  console.log(movies);
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie />
      </section>
      <section>
        <button onClick={sendRequest}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
