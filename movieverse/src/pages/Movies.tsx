import { genres } from "~/app.config";
import { MoviesMedia } from "~/components/MoviesMedia";
import { useMovieStore } from "~/zustand/movieStore";

export const Movies = () => {
  const {currentFilter} = useMovieStore();
  return (
    <div className="page">
      <div className="page-header">
        <h1>{genres.find((genre) => genre.id === currentFilter)?.name}</h1>
      </div>
      <MoviesMedia />
    </div>
  );
};
