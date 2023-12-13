import { MovieCards } from "~/components/cards/MovieCards";
import { useMovies } from "~/hooks/useMovies";
import { MovieFilters } from "./MovieFilters";
import { genres } from "~/app.config";
import { useMovieStore } from "~/zustand/movieStore";
import { User } from "~/types/users";
import { useFavoriteMovies } from "~/hooks/useFavoriteMovies";

export const MoviesMedia: React.FC<{user:User}> = ({user}) => {
  
  const { movies, currentFilter } = useMovies();
  const {favoriteMovies, favoriteMovieFn, unfavMovieFn,isLoading} = useFavoriteMovies();
  const {incrementPage} = useMovieStore();

  return (
    <div className="space-y-5">
      <div className="p-2">
        <MovieFilters />
        <h1>{genres.find((genre) => genre.id === currentFilter)?.name}</h1>
      </div>

      {movies.length > 0 ? (
        <div className="page-body-cards">
          <MovieCards user={user} movies={movies} 
          movie={movies[0]}
          favoriteMovieFn={favoriteMovieFn} 
          favoriteMovies={favoriteMovies} 
          unfavMovieFn={unfavMovieFn} 
          isLoading={isLoading} />
        </div>
      ) : (
        <div className="w-full ">
          <h4 className="text-justify">
            We couldn't find the movie you're looking for. It's possible that
            there might be a typo in the movie title or the movie might not be
            available in our database. Please try again with a different title
            or check the spelling. If you're still having trouble finding a
            movie, you can try searching by genre, director, or actor. We're
            always adding new movies, so it's possible the movie you're looking
            for will be available soon
          </h4>
        </div>
      )}
      <div className="grid place-items-center">
        <button onClick={incrementPage} className="btn-primary">More</button>
      </div>
    </div>
  );
};
