import { TbArrowLeft } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { MovieDetail } from "~/components/detail/MovieDetail";
import { TrailerPlayer } from "~/components/detail/TrailerPlayer";
import { useMovie } from "~/hooks/useMovie";

export const MovieDetails = () => {
  const navigate = useNavigate();
  const { trailer, movie } = useMovie();

  return (
    <div className="page space-y-5">
      <div className="page-header">
        <button onClick={() => navigate(-1)} className="btn-secondary">
          <TbArrowLeft />
        </button>
        <h1>{movie?.title}</h1>
      </div>
      <div className="page-body space-y-4">
        {trailer && <TrailerPlayer trailerUrl={trailer.videoUrl} />}
        {movie && (
          <MovieDetail  movie={movie} />
        )}
      </div>
    </div>
  );
};
