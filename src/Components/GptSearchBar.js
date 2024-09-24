import { useDispatch, useSelector } from "react-redux"
import lang from "../Utils/LanguageContants"
import { useRef } from "react";
import client from "../Utils/openai";
import useFetchMovieByTitle from "../hooks/useFetchMovieByTitle";
import { addSearchedText } from "../Redux/moviesSlice";

const GptSearchBar = () => {
    const prefferedLanguage = useSelector((store)=> store.config.prefferedLanguage);
    const searchedMovies = useSelector((store)=> store.movies.searchedMovies);
    const inputSearchRef = useRef(null);
    const dispatch = useDispatch();
    useFetchMovieByTitle();
    const handleSearch = async () => {
        const gptQuery =
        "Act as a Movie Recommendation system and suggest some movies for the query : " +
        inputSearchRef.current.value +
        ". only give me names of 5 movies, comma seperated like the example result given ahead."
        + "Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

        try {
            await client.chat.completions.create({
                messages: [{ role: 'user', content: gptQuery }],
                model: 'gpt-3.5-turbo',
            });
        } catch (error) {
            inputSearchRef.current.value && dispatch(addSearchedText(inputSearchRef.current.value));
            console.error(error);
        } finally {
            console.log(searchedMovies);
        }
    }
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
        <form className="w-full md:w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
            <input
                ref={inputSearchRef}
                type="text"
                className="p-4 m-4 col-span-9"
                placeholder={lang[prefferedLanguage].gptSearchPlaceholder}/>
            <button
                className="text-white m-4 py-2 px-4 col-span-3 bg-red-700 rounded-lg"
                onClick={handleSearch}>
                    {lang[prefferedLanguage].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar