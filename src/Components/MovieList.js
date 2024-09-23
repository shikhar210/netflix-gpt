import MovieCard from "./MovieCard"

const MovieList = ({title, movies}) => {
  return (
    <div className="px-4 sm:px-6">
        <h1 className="text-xl sm:text-3xl py-4 text-white">{title}</h1>
        <div className="flex overflow-x-auto">
            <div className="flex space-x-4 sm:space-x-6">
                {movies?.map((movie)=>movie.poster_path &&(
                    <MovieCard key={movie.id} posterPath={movie.poster_path}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default MovieList