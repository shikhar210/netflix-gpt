import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../Redux/moviesSlice";
import { options } from "../Utils/Constants";

const useGetNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store) => store.movies?.nowPlayingMovies);
    useEffect(() => {
        const getNowPlayingMovies = async () => {
            const response  = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options);
            const data = await response.json();
            data.results && dispatch(addNowPlayingMovies(data.results));
        }
        !nowPlayingMovies && getNowPlayingMovies();
    }, [nowPlayingMovies, dispatch]);
}

export default useGetNowPlayingMovies;