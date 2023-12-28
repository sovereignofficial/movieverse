import { getMovieImageUrl, isFavorited } from "~/utils/helpers";
import { TMovieDetail } from "~/types/movies";
import { Extra } from "./Extra";
import { useFavorite } from "~/hooks/useFavorite";
import { useUsersStore } from "~/zustand/usersStore";
import { MediaDetail } from "./MediaDetail";
import { ExtraInfoItem } from "./ExtraInfoItem";
import { useEffect } from "react";

export const MovieDetail: React.FC<{movie: TMovieDetail}> = ({ movie }) => {
  const { handleFavMovie, getFavoritesCount, favCount } = useFavorite();
  const { favoriteMovies } = useUsersStore();
  const favorited =(favoriteMovies && movie &&  isFavorited(favoriteMovies, movie)) || false;

  useEffect(() => {
    getFavoritesCount({ itemId: movie.id, itemType: "favoriteMovies" });
  }, [getFavoritesCount, movie.id]);

  return (
    <MediaDetail
      media={movie}
      detailImage={{
        imgUrl: getMovieImageUrl(movie.poster_path),
        alt: `${movie.title} poster`,
      }}
      renderInfo={() => (
        <>
          <h5>{movie.genres?.map((item) => item?.name).join(", ")}</h5>
          <p>{movie?.overview}</p>
          <Extra>
            <ExtraInfoItem>${movie.budget} budget</ExtraInfoItem>
            <ExtraInfoItem>{movie.runtime} min</ExtraInfoItem>
            <ExtraInfoItem>{movie.revenue}M revenue</ExtraInfoItem>
            <ExtraInfoItem>{movie.release_date}</ExtraInfoItem>
          </Extra>
        </>
      )}
      handleFav={() => handleFavMovie(movie)}
      favorited={favorited}
      favorites={favCount}
    />
  );
};
