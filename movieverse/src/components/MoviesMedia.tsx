import { MovieCards } from "~/components/cards/MovieCards";
import { useMovies } from "~/hooks/useMovies";
import { MenuSideBar } from "./MenuSideBar";

import { useMovieStore } from "~/zustand/movieStore";
import { useFavorite } from "~/hooks/useFavorite";
import { DataNotFound } from "./DataNotFound";

export const MoviesMedia: React.FC = () => {
  const { moviesFromTmdb,  } = useMovies();
  const { handleFavMovie } = useFavorite();
  const { incrementPage } = useMovieStore();

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
          <div className="grid place-items-center">
            <button onClick={incrementPage} className="btn-primary">
              More
            </button>
          </div>
        </div>
      ) : (
         <div className="w-screen">
          <DataNotFound message="Movies couldn't loaded."/>
         </div>
      )}
    </div>
  );
};
