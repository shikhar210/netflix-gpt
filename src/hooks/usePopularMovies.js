import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addPopularMovies } from "../Redux/moviesSlice";
import { options } from "../Utils/Constants";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector((store)=> store.movies.popularMovies);

    const getPopularMovies = useCallback(async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', options);
        const data = await response.json();
        data.results && dispatch(addPopularMovies(data.results));
    },[dispatch]);
    useEffect(() => {
        if (!popularMovies) {
            getPopularMovies();
        }
    }, [popularMovies,getPopularMovies]);

}

export default usePopularMovies