import { MoviesFromMovieverse, TMovieDetail } from "~/types/movies";
import { Stars } from "./Stars";
import { useFavoriteMovies } from "~/hooks/useFavoriteMovies";
import { FavoriteButton } from "./buttons/FavoriteButton";
import { isFavorited } from "~/utils/helpers";

export const Rates: React.FC<{
  favorites: number;
  vote_average: number;
  vote_count: number;
  movieFromDb: MoviesFromMovieverse | undefined;
  movieDetails: TMovieDetail;
}> = ({ favorites, vote_average, vote_count, movieDetails, movieFromDb }) => {
  const { handleFav, isLoading, user, moviesFromDb } = useFavoriteMovies();

  return (
    <div className="flex justify-between items-center ">
      <div className="flex gap-2 items-center">
        <FavoriteButton
          isFavorited={isFavorited(movieDetails?.title, user, moviesFromDb)}
          onClick={() =>
            handleFav(
              {
                ...movieDetails,
                genre_ids: [...movieDetails.genres.map((genre) => genre.id)],
              },
              movieFromDb
            )
          }
          disabled={isLoading}
        />
        <p>{favorites} users favorited.</p>
      </div>
      <div className="flex justify-end gap-2 items-center">
        <Stars vote_average={vote_average} />
        <p className="text-zinc-300">{vote_count} votes</p>
      </div>
    </div>
  );
};
