import { MovieCards } from "~/components/cards/MovieCards"
import { useFavoriteMovies } from "~/hooks/useFavoriteMovies"

export const Favorites = () => {
  const {user,favoriteMovies} = useFavoriteMovies();
  
  return (
    <div>
      <div>

      </div>
      <div>
        <MovieCards user={user} movies={favoriteMovies}/>
      </div>
    </div>
  )
}
