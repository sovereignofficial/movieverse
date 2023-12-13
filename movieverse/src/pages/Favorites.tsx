import { MovieCards } from "~/components/cards/MovieCards"
import { useFavoriteMovies } from "~/hooks/useFavoriteMovies"
import { useUsers } from "~/hooks/useUsers";

export const Favorites = () => {
  const {favoriteMovies, favoriteMovieFn, unfavMovieFn, isLoading} = useFavoriteMovies();
  const {user} = useUsers();


  return (
    <div className="page">
      <div className="page-header">
          <h1>Favorites</h1>
      </div>
      <div className="page-body-cards">
        <MovieCards user={user} movies={favoriteMovies} movie={favoriteMovies[0]} favoriteMovies={favoriteMovies}
        favoriteMovieFn={favoriteMovieFn} unfavMovieFn={unfavMovieFn} isLoading={isLoading} />
      </div>
    </div>
  )
}
