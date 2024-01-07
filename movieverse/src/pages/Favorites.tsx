import { MovieCards } from "~/components/cards/MovieCards";
import { PeopleCards } from "~/components/cards/PeopleCards";
import { TvCards } from "~/components/cards/TvCards";
import { useFavorite } from "~/hooks/useFavorite";
import { useUsersStore } from "~/zustand/usersStore";
import { useLocation } from "react-router-dom";
import { DataNotFound } from "~/components/DataNotFound";
export const Favorites = () => {
  const { handleFavMovie, handleFavPerson, handleFavTvShow } = useFavorite();
  const { favoriteMovies, favoritePeople, favoriteTvShows } = useUsersStore();
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="page">

      <div className="page-body">
        {pathname === "/account" &&
          favoriteMovies &&
          (favoriteMovies.length > 0 ? (
            <MovieCards
              moviesFromTmdb={favoriteMovies}
              handleFav={handleFavMovie}
            />
          ) : (
             <DataNotFound message=" User haven't favorited any movie yet."/>
          ))}
        {pathname === "/account/movies" &&
          favoriteMovies &&
          (favoriteMovies.length > 0 ? (
            <MovieCards
              moviesFromTmdb={favoriteMovies}
              handleFav={handleFavMovie}
            />
          ) : (
             <DataNotFound message=" User haven't favorited any movie yet."/>
          ))}
        {pathname === "/account/people" &&
          favoritePeople &&
          (favoritePeople.length > 0 ? (
            <PeopleCards people={favoritePeople} handleFav={handleFavPerson} />
          ) : (
            <DataNotFound message="User haven't favorited any person yet."/>
          ))}
        {pathname === "/account/tv" &&
          favoriteTvShows &&
          (favoriteTvShows.length > 0 ? (
            <TvCards tv_shows={favoriteTvShows} handleFav={handleFavTvShow} />
          ) : (
            <DataNotFound message="User haven't favorited any tv show yet."/>
          ))}
      </div>
    </div>
  );
};
