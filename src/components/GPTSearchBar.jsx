import { useDispatch, useSelector } from 'react-redux';
import lang from '../utils/languageConstants';
import { useRef } from 'react';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGPTMovieResult } from '../utils/gptSlice';

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovie = async (movieName) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const handleGptSearchClick = async () => {
    // Make an API Call to GPT API and get Movie Results

    const gptQuery =
      'Act as a Movie Recommendation System and suggest some movies for the query' +
      searchText.current.value +
      '. Only Give me name of 5 movies, comma separated like the example result given ahead. Example Result: Gadar,Sholay,Don,Golmaal,Koi Mil Gaya';
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
    if (!gptResults.choices) {
      // TODO handle error
      console.log('GPT API Failed');
    }
    // Chupke Chupke, Padosan, Gol Maal, Jaane Bhi Do Yaaro, Angoor
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(',');
    // ["Chupke Chupke", "Padosan", "Gol Maal", "Jaane Bhi Do Yaaro", "Angoor"]

    const promiseArray = gptMovies.map((movie) => searchMovie(movie));
    // [Promise1, Promise2, Promise3, Promise4, Promise5]

    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGPTMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 rounded-sm col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="m-4 py-2 px-4 bg-red-700 text-white rounded-md col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
