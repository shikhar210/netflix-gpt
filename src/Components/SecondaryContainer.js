import { useSelector } from "react-redux";
import MovieList from "./MovieList"

const SecondaryContainer = () => {
    
    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);
    const popularMovies = useSelector((store)=> store.movies.popularMovies);
    const topRatedMovies = useSelector((store)=> store.movies.topRatedMovies);
  return (
    <div className="bg-black">
        <div className="-mt-52 pl-12 relative z-20">
            <MovieList title="Now Playing" movies={nowPlayingMovies}/>
            <MovieList title="Popular" movies={popularMovies}/>
            <MovieList title="Top Rated" movies={topRatedMovies}/>
            <MovieList title="Upcoming" movies={nowPlayingMovies}/>
        </div>
    </div>
  )
}

export default SecondaryContainer