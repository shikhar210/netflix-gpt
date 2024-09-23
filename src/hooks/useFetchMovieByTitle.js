import { useEffect } from "react"
import { options } from "../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addSearchedMovies } from "../Redux/moviesSlice";

const useFetchMovieByTitle = () => {
    const dispatch = useDispatch();
    const searchedText = useSelector(store=>store.movies.searchedText);
    const searchedMovies = useSelector(store=>store.movies.searchedMovies);
    useEffect(()=> {
        const getSearchedMovies = async () => {
            const response = await fetch('https://api.themoviedb.org/3/search/movie?query='
                + searchedText +'&include_adult=false&language=en-US&page=1', options);
            const data = await response.json();
            data.results && dispatch(addSearchedMovies(data.results));
        }
        !searchedMovies && searchedText && getSearchedMovies();
    },[dispatch, searchedText, searchedMovies]);
}

export default useFetchMovieByTitle;