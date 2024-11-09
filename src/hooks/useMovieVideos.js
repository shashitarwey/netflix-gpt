import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from '../utils/movieSlice';

const useMovieVideos = async (movieId) => {
  const dispatch = useDispatch();
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
    getMovieVideos();
  }, []);
};

export default useMovieVideos;
