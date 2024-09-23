import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { options } from "../Utils/Constants";
import { addTopRatedMovies } from "../Redux/moviesSlice";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const topRatedMovies = useSelector((store)=> store.movies?.topRatedMovies);
    useEffect(()=>{
        const getTopRatedMovies = async () => {
            const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', options);
            const data = await response.json();
            data.results && dispatch(addTopRatedMovies(data.results));
        };

        !topRatedMovies && getTopRatedMovies();
    },[topRatedMovies, dispatch]);
};

export default useTopRatedMovies;