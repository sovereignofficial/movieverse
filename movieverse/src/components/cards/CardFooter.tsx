import { useNavigate } from "react-router-dom";
import { FavoriteButton } from "~/components/buttons/FavoriteButton";
import { MovieComponent } from "~/types/movies";
import { isFavorited } from "~/utils/helpers";
export const CardFooter: MovieComponent = ({
  movie,
  handleFav,
  isLoading,
  user,
  moviesFromDb,
}) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-flow-col p-2 place-items-center">
      <FavoriteButton
        disabled={isLoading}
        isFavorited={isFavorited(movie.title, user, moviesFromDb)}
        onClick={()=>handleFav(movie,moviesFromDb.find(item=>item.movieId === movie.id))}
      />
      <button
        onClick={() => navigate(`/movie?m=${movie.id}`)}
        className="btn-primary"
      >
        Details
      </button>
    </div>
  );
};
