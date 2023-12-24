import { getMovieImageUrl } from "~/utils/helpers";
import { MoviesFromMovieverse, TMovieDetail } from "~/types/movies";
import { Rates } from "./Rates";
import { Overview } from "./Overview";

export const MovieDetail: React.FC<{
  movieFromDb: MoviesFromMovieverse | undefined;
  movieDetails: TMovieDetail;
}> = ({ movieDetails, movieFromDb }) => {
  return (
    <div className="grid lg:grid-cols-12 page-body gap-2 ">
      <div className="lg:col-span-8 space-y-5 bg-zinc-900 p-5 rounded-xl sm:w-full">
        <h3>Overview</h3>
        <h5>{movieDetails?.genres[0]?.name}</h5>
        <p>{movieDetails?.overview}</p>
        <div className="p-5 sm:w-full md:w-9/12 mx-auto">
          <Overview
            release_date={movieDetails?.release_date}
            revenue={movieDetails?.runtime}
            runtime={movieDetails?.runtime}
            budget={movieDetails?.budget}
          />
        </div>
        <Rates
          movieDetails={movieDetails}
          movieFromDb={movieFromDb}
          favorites={movieFromDb?.favorited_from.length ?? 0}
          vote_average={movieDetails?.vote_average}
          vote_count={movieDetails?.vote_count}
        />
      </div>

      <div className="lg:col-span-4 ">
        <div className="overflow-hidden relative rounded-xl w-full lg:aspect-square">
          <img
            alt={`${movieDetails?.title} poster`}
            className="w-full h-full object-center"
            src={getMovieImageUrl(movieDetails?.poster_path)}
          />
        </div>
      </div>
    </div>
  );
};
