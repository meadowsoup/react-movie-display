import { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";

// Import our components
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";


function App() {
  const apiKey = "3a063c8e";
  const [movie, setMovie] = useState(null);

  const getMovie = async (searchFilm) => {
    try {
        const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchFilm}`
        );
  
        const data = await response.json();
        setMovie(data);
      } catch (e) {
        console.error("Error fetching movie:", e);
      }
    };

  useEffect(() => {
    const movies = ["Waiting", "Shrek", "Austin Powers", "Men In Black", "Zack and Miri Make A Porno"];
    const randomMovie = movies[Math.floor(Math.random() * movies.length)];
    getMovie(randomMovie);
  }, []);

  return (

    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie}/>
    </div>

  );
};

export default App;
