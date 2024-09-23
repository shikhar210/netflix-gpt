import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
    const searchedMovies = useSelector((store)=> store.movies.searchedMovies);
  return (
    <div className="w-full p-4 sm:p-6 lg:p-8 bg-gradient-to-b from-black">
            <div className="relative z-20">
                {searchedMovies && searchedMovies.length > 0 ? (
                    <MovieList title="Movie Suggestions" movies={searchedMovies} />
                ) : (
                    <p className="text-center text-gray-500">No movie suggestions available.</p>
                )}
            </div>
        </div>
    )
}

export default GptMovieSuggestions