import { MovieCards } from "~/components/cards/MovieCards";
import { useMovies } from "~/hooks/useMovies";
import { MovieFilters } from "./MovieFilters";

export const MoviesMedia: React.FC = () => {
  const { popularMovies } = useMovies();

  return (
    <div>
      <MovieFilters />
      <div className="p-2">
        <h1>Popular</h1>
      </div>
      <div className="w-10/12 grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-1 gap-4 place items-center mx-auto p-3">
        {popularMovies && <MovieCards movies={popularMovies} />}
      </div>
    </div>
  );
};
