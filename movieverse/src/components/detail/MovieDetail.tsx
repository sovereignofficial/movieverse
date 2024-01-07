import { getMovieImageUrl, isFavorited } from "~/utils/helpers";
import { TMovieDetail } from "~/types/movies";
import { Extra } from "./Extra";
import { useFavorite } from "~/hooks/useFavorite";
import { useUsersStore } from "~/zustand/usersStore";
import { MediaDetail } from "./MediaDetail";
import { ExtraInfoItem } from "./ExtraInfoItem";
import { useEffect, useState } from "react";
import { useBests } from "~/hooks/useBests";
import { useMessageListener } from "~/hooks/useMessageListener";
import Toast from "../Toast";

export const MovieDetail: React.FC<{ movie: TMovieDetail }> = ({ movie }) => {
  const { handleFavMovie, getFavoritesCount, favCount } = useFavorite();
  const { favoriteMovies, userId, bests } = useUsersStore();
  const favorited =
    (favoriteMovies && movie && isFavorited(favoriteMovies, movie)) || false;
  const {
    pickBestFn,
    isBest,
    setIsBest,
    removeFromBestsFn,
    bestSuccess,
    unbestSuccess,
    bestError,
    unbestError,
  } = useBests();

  const [messages, setMessages] = useState<
    { name: string; value: string | null }[]
  >([]);

  useEffect(() => {
    setMessages([
      { name: "bestError", value: bestError?.message || null },
      {
        name: "bestSuccess",
        value: bestSuccess ? "Added to top picks." : null,
      },
      { name: "unbestError", value: unbestError?.message || null },
      {
        name: "unbestSuccess",
        value: unbestSuccess ? "Added to top picks." : null,
      },
    ]);
  }, [bestError, bestSuccess, unbestError, unbestSuccess]);

  const currentMessage = useMessageListener(messages);

  useEffect(() => {
    getFavoritesCount({ itemId: movie.id, itemType: "favoriteMovies" });
  }, [getFavoritesCount, movie.id]);

  useEffect(() => {
    if (bests) {
      const foundBest = bests.some((item) => item.id === movie.id);
      foundBest ? setIsBest(true) : setIsBest(false);
    }
  }, [bests, setIsBest, movie.id]);

  const handlePickBest = () => {
    isBest
      ? removeFromBestsFn({ userId, itemId: movie.id })
      : pickBestFn({ item: movie, userId });
  };

  return (
    <>
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
        pickBest={handlePickBest}
        isBest={isBest}
      />
      {currentMessage && (
        <Toast
          type={currentMessage.name.includes("Error") ? "error" : "success"}
          message={currentMessage.value}
        />
      )}
    </>
  );
};
