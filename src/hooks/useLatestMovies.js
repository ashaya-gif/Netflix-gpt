import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addLatestMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";


const useLatestMovies = () =>{

  const dispatch = useDispatch();

  const getLatestMovies = async () =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS );
    const json = await data.json();
    dispatch(addLatestMovies(json.results));
  };

  useEffect(() => {
    getLatestMovies();
  });
  //TopRated
  //Upcoming
};

export default useLatestMovies;