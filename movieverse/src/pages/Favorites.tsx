import { MovieCards } from "~/components/cards/MovieCards"
import { useFavorite } from "~/hooks/useFavorite"
import { useUsersStore } from "~/zustand/usersStore";

export const Favorites = () => {
  const {handleFavMovie} = useFavorite();
  const {favoriteMovies} = useUsersStore();

  return (
    <div className="page">
      <div className="page-header">
          <h1>Favorites</h1>
      </div>
      <div className="page-body-cards">
         {favoriteMovies && <MovieCards moviesFromTmdb={favoriteMovies}  handleFav={handleFavMovie}/>}
      </div>
    </div>
  )
}
