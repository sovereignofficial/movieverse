import { TvShow } from "~/types/tvshow"
import { DetailImage } from "./images/DetailImage"
import { getTvShowImageUrl } from "~/utils/helpers"


export const TvShowDetail:React.FC<{tvShow:TvShow}> = ({ tvShow }) => {
  return (
    <div className=''>
      <DetailImage imgUrl={getTvShowImageUrl(tvShow.backdrop_path!)} alt={`${tvShow.name} poster`} />
      <h2>{tvShow.name}</h2>
      <p>{tvShow.overview}</p>
      <p>Rating: {tvShow.vote_average}</p>
      <p>First aired on: {tvShow.first_air_date}</p>
      <p>Genres: {tvShow.genre_ids.join(', ')}</p>
    </div>
  )
}
