import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GPTMovieSuggestions = () => {
  const gptStore = useSelector((store) => store.gpt);
  const { movieResults, movieNames } = gptStore;
  if (!movieNames) return;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      {movieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={movieResults[index]}
        ></MovieList>
      ))}
      <MovieList title={movieNames[0]} movies={movieResults[0]}></MovieList>
    </div>
  );
};

export default GPTMovieSuggestions;
