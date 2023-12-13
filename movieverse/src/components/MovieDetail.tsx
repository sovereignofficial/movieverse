import { getMovieImageUrl } from "~/services/apiMovies";
import { TMovieDetail } from "~/types/movies";
import { Rates } from "./Rates";
import { MovieInfoList } from "./MovieInfoList";

export const MovieDetail: React.FC<{ movieDetails: TMovieDetail }> = ({
  movieDetails,
}) => {
  return (
    <div className="grid grid-cols-12 page-body gap-3">
      <div className="col-span-4">
        <div className="overflow-hidden relative rounded-xl w-full aspect-square">
          <img
            className="w-full h-full object-center"
            src={getMovieImageUrl(movieDetails?.poster_path)}
          />
        </div>
      </div>

      <div className="col-span-8 space-y-5 bg-black p-5 rounded-xl">
        <p className="text-xl">{movieDetails?.overview}</p>
        <div className="p-5 w-9/12 mx-auto">
          <MovieInfoList
            release_date={movieDetails?.release_date}
            revenue={movieDetails?.runtime}
            runtime={movieDetails?.runtime}
            budget={movieDetails?.budget}
          />
        </div>
        <Rates
          vote_average={movieDetails?.vote_average}
          vote_count={movieDetails?.vote_count}
        />
        <div className="text-center">
          <button className="btn-primary">Favorite</button>
        </div>
      </div>
    </div>
  );
};
