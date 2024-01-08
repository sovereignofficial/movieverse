import { MovieCards } from "~/components/cards/MovieCards";
import { useMovies } from "~/hooks/useMovies";
import { MenuSideBar } from "./MenuSideBar";
import { useFavorite } from "~/hooks/useFavorite";
import { DataNotFound } from "./DataNotFound";
import { useScrollPosition } from "~/hooks/useScrollPosition";
import { useInfiniteScrollForMovies } from "~/hooks/useInfiniteScrollForMovies";
import { useEffect } from "react";
import { Spinner } from './Spinner'

export const MoviesMedia: React.FC = () => {
  const { moviesFromTmdb, currentFilter } = useMovies();
  const { handleFavMovie } = useFavorite();
  const { isBottom } = useScrollPosition();

  const { fetchNextPage, isFetchingNextPage } = useInfiniteScrollForMovies(currentFilter)

  useEffect(() => {
    if (isBottom) {
      fetchNextPage();
    }
  }, [isBottom])

  return (
    <div className="space-y-5 lg:grid lg:grid-cols-12">
      <div className="lg:col-span-1 sm:hidden lg:block">
        <MenuSideBar />
      </div>

      {moviesFromTmdb.length > 0 ? (
        <div className="page-body-cards lg:col-span-11">

          <MovieCards
            moviesFromTmdb={moviesFromTmdb}
            handleFav={handleFavMovie}
          />
          {isFetchingNextPage && <Spinner />}
        </div>
      ) : (
        <div className="w-screen">
          <DataNotFound message="Movies couldn't loaded." />
        </div>
      )}
    </div>
  );
};
