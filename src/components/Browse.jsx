import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useNowPlayingmovies from '../hooks/useNowPlayingMovies'

const Browse = () => {
  useNowPlayingmovies();
  return (
    <div>
      <Header></Header>
      <MainContainer></MainContainer>
      <SecondaryContainer></SecondaryContainer>
      {/* 
        MainContainer
          - VideoBackground
          - Video Title
        SecondaryContainer
          - MovieList * n
            - Movie Card * n
      
      */}
    </div>
  );
};

export default Browse;
