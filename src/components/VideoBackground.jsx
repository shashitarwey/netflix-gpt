import { useSelector } from 'react-redux';
import useMovieVideos from '../hooks/useMovieVideos';

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieVideos(movieId);
  return (
    <div>
      <iframe
        src={'https://www.youtube.com/embed/' + trailerVideo?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
