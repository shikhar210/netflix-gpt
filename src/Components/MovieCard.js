import { IMG_CDN_URL } from "../Utils/Constants"

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-28 sm:w-36 md:w-48 pr-2 sm:pr-4">
        <img alt="poster" src={IMG_CDN_URL+posterPath} className="w-full h-auto object-cover rounded-lg"/>
    </div>
  )
}

export default MovieCard