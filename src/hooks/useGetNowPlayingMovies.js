import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../Redux/moviesSlice";
import { options } from "../Utils/Constants";

const useGetNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector(
      (store) => store.movies.nowPlayingMovies
    );
    const getNowPlayingMovies = async () => {
        const response  = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", options);
        const data = await response.json();
        dispatch(addNowPlayingMovies(data.results));
    }
    useEffect(() => {
        !nowPlayingMovies && getNowPlayingMovies();
    }, []);
}

export default useGetNowPlayingMovies;