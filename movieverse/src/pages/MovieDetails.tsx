import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MovieDetail } from "~/components/MovieDetail";
import { TrailerPlayer } from "~/components/TrailerPlayer";
import { useMovie } from "~/hooks/useMovie";

export const MovieDetails = () => {
  const [searchParams] = useSearchParams();
  const [movieId, setMovieId] = useState(searchParams.get("m"));
  useEffect(() => {
    setMovieId(searchParams.get("m"));
  }, [searchParams]);
  const { trailer, movieDetails } = useMovie(movieId!);

  return (
    <div className="page space-y-4">
      <div className="page-header">
        <h1 className="text-center">{movieDetails?.title}</h1>
      </div>
      <div className="page-body space-y-4">
        {trailer && <TrailerPlayer trailerUrl={trailer.videoUrl} />}
        <MovieDetail movieDetails={movieDetails} />
      </div>
    </div>
  );
};
