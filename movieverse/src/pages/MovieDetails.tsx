import { TbArrowLeft } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { MovieDetail } from "~/components/MovieDetail";
import { TrailerPlayer } from "~/components/TrailerPlayer";
import { useMovie } from "~/hooks/useMovie";

export const MovieDetails = () => {
  const navigate = useNavigate();
  const { trailer, movieDetails, movieFromDb } = useMovie();

  return (
    <div className="page space-y-4">
      <div className="page-header">
        <button onClick={() => navigate(-1)} className="btn-secondary">
          <TbArrowLeft />
        </button>
        <h1>{movieDetails?.title}</h1>
      </div>
      <div className="page-body space-y-4">
        {trailer && <TrailerPlayer trailerUrl={trailer.videoUrl} />}
        {movieDetails && (
          <MovieDetail movieFromDb={movieFromDb} movieDetails={movieDetails} />
        )}
      </div>
    </div>
  );
};
