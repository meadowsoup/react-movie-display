


function MovieDisplay({ movie }) {

  if (!movie) {
    return <h2>Search movie for details</h2>;
  }

  if (movie.response === "false") {
    return <h2>Movie not found. Try another title.</h2>
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <h2>Released: {movie.year}</h2>
      <img src={movie.poster} alt={movie.title} />
      <p>{movie.plot}</p>
      <h3>Genre: {movie.genre}</h3>
      <h4>Director: {movie.director}</h4>
    </div>
  )
     // The component must return some JSX
    //  return <h1>The MovieDisplay Component</h1>;
   };

   
   export default MovieDisplay;