import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies) return;
  return (
    <div className="bg-black">
      <div className="-mt-56 pl-6 relative z-20">
        <MovieList title={'Now Playing'} movies={movies.nowPlayingMovies}></MovieList>
        <MovieList title={'Popular'} movies={movies.popularMovies}></MovieList>
        <MovieList title={'Trending'} movies={movies.nowPlayingMovies}></MovieList>
        <MovieList title={'Horror'} movies={movies.nowPlayingMovies}></MovieList>
        <MovieList
            title={'Upcoming Movies'}
            movies={movies.nowPlayingMovies}
        ></MovieList>
        <MovieList title={'Romance'} movies={movies.nowPlayingMovies}></MovieList>
      </div>
    </div>
  );
};

export default SecondaryContainer;
