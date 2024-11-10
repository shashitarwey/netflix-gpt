import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from '../utils/movieSlice';

const useMovieVideos = async (movieId) => {
  const dispatch = useDispatch();
  const trailer = useSelector(store => store.movies.trailerVideo)
  // Fetch Trailer Of Movie
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const json = await data.json();
    const filteredTrailers = json.results.filter(
      (video) => video.type === 'Trailer'
    );
    const trailer = filteredTrailers.length
      ? filteredTrailers[0]
      : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    if(!trailer) getMovieVideos();
  }, []);
};

export default useMovieVideos;
