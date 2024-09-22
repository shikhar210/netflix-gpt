import { useEffect } from "react"
import { options } from "../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addOfficialTrailer } from "../Redux/moviesSlice";

const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();
    const officialTrailer = useSelector((store)=> store.movies?.officialTrailer);

    useEffect(()=>{
        !officialTrailer && getMovieTrailer();
    },[]);
    const getMovieTrailer = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', options);
        const data = await response.json();
        const trailers = data.results;
        if(trailers) {
            const officialTrailer = trailers.filter((trailer)=>trailer.name=="Official Trailer");
            officialTrailer && dispatch(addOfficialTrailer(officialTrailer[0]));
        }
    }
};

export default useMovieTrailer;