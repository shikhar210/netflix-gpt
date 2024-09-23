import { useSelector } from "react-redux"
import lang from "../Utils/LanguageContants"

const GptSearchBar = () => {
    const prefferedLanguage = useSelector((store)=> store.config.prefferedLanguage)
  return (
    <div className="pt-[10%] flex justify-center">
        <form className="bg-black w-1/2 grid grid-cols-12">
            <input type="text" className="p-4 m-4 col-span-9" placeholder={lang[prefferedLanguage].gptSearchPlaceholder}/>
            <button className="text-white m-4 py-2 px-4 col-span-3 bg-red-700 rounded-lg">{lang[prefferedLanguage].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar