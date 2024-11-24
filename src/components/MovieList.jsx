import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  return (
    <div className='px-2 md:px-6 text-white'>
      <h1 className='text-lg md:text-3xl py-4'>{title}</h1>
      <div className='flex overflow-x-scroll'>
        <div className='flex'>
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
            ></MovieCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
