import GPTSearchBar from './GPTSearchBar';
import GPTMovieSuggestions from './GPTMovieSuggestions';
import { BG_URL } from '../utils/constants';

const GPTSearch = () => {
  return (
    <div>
      <div className="fixed h-screen -z-10">
        <img className='h-screen w-screen object-cover' src={BG_URL} alt="background-image"></img>
      </div>
      <div className=''>
        <GPTSearchBar></GPTSearchBar>
        <GPTMovieSuggestions></GPTMovieSuggestions>
      </div>
    </div>
  );
};

export default GPTSearch;
