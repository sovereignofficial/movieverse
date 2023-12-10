import { useFavoriteMovies } from "~/hooks/useFavoriteMovies";
import { Movie, MoviesFromMovieverse } from "~/types/movies";
import { User } from "~/types/users";
import { IoHeartOutline, IoHeart } from "react-icons/io5";

export const FavoriteButton: React.FC<{ movie: Movie | MoviesFromMovieverse; user: User }> = ({
  movie,
  user,
}) => {
  const { favoriteMovieFn, favoriteMovies,unfavMovieFn, isLoading} = useFavoriteMovies();

  const handleFavoriteMovie = () => {
      if(favoriteMovies.some((item:MoviesFromMovieverse)=> item.movieId === movie.id && item.favorited_from.includes(user.id!))){
        console.log("will unfav");
        const index = favoriteMovies.findIndex(favMovie => favMovie.movieId === movie.id);
        unfavMovieFn({movie:favoriteMovies[index],user});
      }else{
        console.log("will fav");
        favoriteMovieFn({ movie:{...movie,original_title:movie.title}, user })
      }
  }

  return (
    <button disabled={isLoading} className="disabled:bg-blue-500 rounded-full"  onClick={handleFavoriteMovie}>
      { favoriteMovies?.length > 0 &&  favoriteMovies.some((item:MoviesFromMovieverse) => item.movieId === movie.id && item.favorited_from.includes(user.id!)) ? <IoHeart style={{color:"red"}} size={20}  /> : <IoHeartOutline size={20} />}
    </button>
  );
};
