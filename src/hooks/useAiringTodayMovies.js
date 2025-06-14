import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAiringTodayMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";


const useAiringTodayMovies = () =>{

  const dispatch = useDispatch();

  const getAiringTodayMovies = async () =>{
    const data = await fetch('https://api.themoviedb.org/3/tv/airing_today?page=1', API_OPTIONS );
    const json = await data.json();
    dispatch(addAiringTodayMovies(json.results));
  };

  useEffect(() => {
    getAiringTodayMovies();
  });
  //TopRated
  //Upcoming
  //AiringToday
};

export default useAiringTodayMovies;