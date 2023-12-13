import { useNavigate } from "react-router-dom"
import { FavoriteButton } from "~/components/buttons/FavoriteButton"
import { MovieComponent } from "~/types/movies"

export const CardFooter:MovieComponent = ({movie,movies,user,favoriteMovies,unfavMovieFn,favoriteMovieFn,isLoading}) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-flow-col p-2 place-items-center">
        <FavoriteButton movies={movies} movie={movie} user={user} 
        favoriteMovies={favoriteMovies} favoriteMovieFn={favoriteMovieFn} 
        unfavMovieFn={unfavMovieFn} isLoading={isLoading}/>
        <button onClick={()=>navigate(`/movie?m=${movie.id}`)} className="btn-primary">Details</button>
    </div>
  )
}
