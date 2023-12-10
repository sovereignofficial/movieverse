import { useNavigate } from "react-router-dom"
import { FavoriteButton } from "~/components/buttons/FavoriteButton"
import { Movie, MoviesFromMovieverse } from "~/types/movies"
import { User } from "~/types/users";

export const CardFooter:React.FC<{movie:Movie | MoviesFromMovieverse,user:User}> = ({movie,user}) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-flow-col p-2 place-items-center">
        <FavoriteButton movie={movie} user={user}/>
        <button onClick={()=>navigate(`/movie/${movie.id}`)} className="btn-primary">Details</button>
    </div>
  )
}
