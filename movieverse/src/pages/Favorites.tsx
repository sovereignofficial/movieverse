import { MovieCards } from "~/components/cards/MovieCards"
import { useFavoriteMovies } from "~/hooks/useFavoriteMovies"
import { useUsers } from "~/hooks/useUsers";

export const Favorites = () => {
  const {moviesFromDb, handleFav, isLoading} = useFavoriteMovies();
  const {user} = useUsers();


  return (
    <div className="page">
      <div className="page-header">
          <h1>Favorites</h1>
      </div>
      <div className="page-body-cards">
        <MovieCards user={user} moviesFromTmdb={[...moviesFromDb.map(movie=>{
          return {
            ...movie,
            id:movie.movieId
          }
        })]} movie={moviesFromDb[0]} 
        isLoading={isLoading} handleFav={handleFav} moviesFromDb={moviesFromDb}  />
      </div>
    </div>
  )
}
