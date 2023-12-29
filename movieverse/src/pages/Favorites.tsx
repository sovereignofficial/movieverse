import { MovieCards } from "~/components/cards/MovieCards"
import { PeopleCards } from "~/components/cards/PeopleCards";
import { TvCards } from "~/components/cards/TvCards";
import { useFavorite } from "~/hooks/useFavorite"
import { useUsersStore } from "~/zustand/usersStore";
import { useLocation } from 'react-router-dom';
export const Favorites = () => {
  
  const {handleFavMovie,handleFavPerson,handleFavTvShow} = useFavorite();
  const {favoriteMovies,favoritePeople,favoriteTvShows} = useUsersStore();
  const location = useLocation();
  const { pathname } = location;

  const headers: { [key: string]: string } = {
    '/account/movies': 'Favorite Movies',
    '/account/people': 'Favorite People',
    '/account/tv': 'Favorite TV Shows',
  };
  
  return (
    <div className="page">
      <div className="page-header">
          <h1>{headers[pathname]}</h1>
      </div>
      <div className="page-body-cards">
         {pathname === '/account/movies' && favoriteMovies && <MovieCards moviesFromTmdb={favoriteMovies}  handleFav={handleFavMovie}/>}
         {pathname === '/account/people' && favoritePeople && <PeopleCards people={favoritePeople} handleFav={handleFavPerson}/>}
         {pathname === '/account/tv' && favoriteTvShows && <TvCards tv_shows={favoriteTvShows} handleFav={handleFavTvShow}/>}
      </div>
    </div>
  )
}
