import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

// Import our components
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";


function App() {
  const apiKey = "3a063c8e";
  const [movie, setMovie] = useState(null);

  const getMovie = async (searchFilm) => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );

    const data = await response.json();
    setMovie(data);
  };

  return (

    <div className="App">
      <Form movieSearch={getMovie} />
      <MovieDisplay movie={movie}/>
    </div>

  );
};

export default App;
