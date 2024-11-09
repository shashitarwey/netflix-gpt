import { useEffect, useState } from 'react';
import { API_OPTIONS } from '../utils/constants';

const VideoBackground = ({ movieId }) => {
  const [trailerId, setTrailerId] = useState(null);
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
    setTrailerId(trailer.key);
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
  return (
    <div>
      <iframe
        src={'https://www.youtube.com/embed/' + trailerId}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
