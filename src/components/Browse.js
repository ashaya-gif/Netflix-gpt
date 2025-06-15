import { useSelector } from 'react-redux';
import useAiringTodayMovies from '../hooks/useAiringTodayMovies.js';
import useLatestMovies from '../hooks/useLatestMovies.js';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies.js';
import usePopularMovies from '../hooks/usePopularMovies.js';
import useTopRatedMovies from '../hooks/useTopRatedMovies.js';
import useUpcomingMovies from '../hooks/useUpcomingMovies.js';
import GptSearch from './GptSearch.js';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useAiringTodayMovies();
  useLatestMovies();
  
  return (
    <div>
      <Header />
      {showGptSearch ? (<GptSearch />) : 
      (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )
      }
    </div>
  );
};

export default Browse;