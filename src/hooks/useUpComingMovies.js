import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { options } from "../Utils/Constants";
import { addUpComingMovies } from "../Redux/moviesSlice";

const useUpComingMovies = () => {
    const dispatch = useDispatch();
    const upComingMovies = useSelector((store)=> store.movies?.upComingMovies);
    useEffect(()=>{
        const getUpComingMovies = async () => {
            const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', options);
            const data = await response.json();
            data.results && dispatch(addUpComingMovies(data.results));
        };

        !upComingMovies && getUpComingMovies();
    },[upComingMovies, dispatch]);
};

export default useUpComingMovies;