import MovieCard from "../movieCard";

function MoviesDisplay({ movies }) {
  return (
    <div>
      <h1>Список фильмов</h1>
      <ul>
        {movies.map((movies) => (
          <MovieCard key={movies.id} {...movies} />
        ))}
      </ul>
    </div>
  );
}

export default MoviesDisplay;
