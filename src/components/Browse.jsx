import Header from './Header';
import useNowPlayingmovies from '../hooks/useNowPlayingMovies'

const Browse = () => {
  useNowPlayingmovies();
  return (
    <div>
      <Header></Header>
    </div>
  );
};

export default Browse;
