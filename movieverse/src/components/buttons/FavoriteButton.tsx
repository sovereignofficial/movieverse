import { MovieComponent, MoviesFromMovieverse } from "~/types/movies";
import { IoHeartOutline, IoHeart } from "react-icons/io5";


export const FavoriteButton: MovieComponent = ({
  movie,
  user,
  favoriteMovies,
  unfavMovieFn,
  favoriteMovieFn,
  isLoading
}) => {
  const handleFavoriteMovie = () => {
    if (
      favoriteMovies.some(
        (item: MoviesFromMovieverse) =>
          item.title === movie.title && item.favorited_from.includes(user.id!)
      )
    ) {
      console.log("will unfav");
      const index = favoriteMovies.findIndex(
        (favMovie) => favMovie.title === movie.title
      );
      unfavMovieFn({ movie: favoriteMovies[index], user });
    } else {
      console.log("will fav");
      favoriteMovieFn({ movie, user });
    }
  };
  console.log(movie,favoriteMovies);
  
  return (
    <button disabled={isLoading} onClick={handleFavoriteMovie}>
      {favoriteMovies?.length > 0 &&
      favoriteMovies.some(
        (item: MoviesFromMovieverse) =>
          item.title === movie.title && item.favorited_from.includes(user.id!)
      ) ? (
        <IoHeart style={{ color: "red" }} size={20} />
      ) : (
        <IoHeartOutline size={20} />
      )}
    </button>
  );
};
