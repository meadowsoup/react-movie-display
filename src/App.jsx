import { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
import './index.css';

// Import our components
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";


function App() {
  const apiKey = "3a063c8e";
  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error(error);
      }
    };

  useEffect(() => {
    getMovie("Clueless");
  }, []);

  return (
    <div className="App">
      <h1>Movie Search Display</h1>
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
};

export default App;
