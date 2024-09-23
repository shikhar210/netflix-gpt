import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
    const searchedMovies = useSelector((store)=> store.movies.searchedMovies);
  return (
    <div className="">
        <div className="pl-12 relative z-20">
            <MovieList title="Movie Suggesstions" movies={searchedMovies}/>
        </div>
    </div>
    )
}

export default GptMovieSuggestions