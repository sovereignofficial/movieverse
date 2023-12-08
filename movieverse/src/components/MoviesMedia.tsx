import { MovieCards } from "~/components/cards/MovieCards";
import { useMovies } from "~/hooks/useMovies";
import { MovieFilters } from "./MovieFilters";
import { genres } from "~/app.config";

export const MoviesMedia: React.FC = () => {
  const { movies, currentFilter } = useMovies();

  return (
    <div>
      <div className="p-2">
        <MovieFilters />
        <h1>{genres.find((genre) => genre.id === currentFilter)?.name}</h1>
      </div>
      <div className="w-10/12 grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-1 gap-4 place items-center mx-auto p-3">
        {movies && <MovieCards movies={movies} />}
      </div>
    </div>
  );
};
