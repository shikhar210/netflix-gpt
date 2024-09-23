import { useSelector } from "react-redux";
import MovieList from "./MovieList"

const SecondaryContainer = () => {
    
    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);
    const popularMovies = useSelector((store)=> store.movies.popularMovies);
    const topRatedMovies = useSelector((store)=> store.movies.topRatedMovies);
  return (
    <div className="bg-black min-h-screen">
        <div className="relative z-20 px-4 sm:px-8 lg:px-12 -mt-32 sm:-mt-48 lg:-mt-52">
            <MovieList title="Now Playing" movies={nowPlayingMovies}/>
            <MovieList title="Popular" movies={popularMovies}/>
            <MovieList title="Top Rated" movies={topRatedMovies}/>
            <MovieList title="Upcoming" movies={nowPlayingMovies}/>
        </div>
    </div>
  )
}

export default SecondaryContainer