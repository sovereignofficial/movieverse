import { MovieComponent } from "~/types/movies";
import { Card } from "./Card";
import { getMovieImageUrl } from "~/utils/helpers";

export const MovieCards: MovieComponent = ({ moviesFromTmdb,user, moviesFromDb,handleFav,isLoading }) => {
  return (
    <>
      {moviesFromTmdb.map((movie, index) => (
        <Card key={index}>
          <Card.CardHeader imgAddress={getMovieImageUrl(movie.poster_path ?? movie.backdrop_path ?? "")} title={movie.title} />
          <Card.CardBody title={movie.title} overview={movie.overview} />
          <Card.CardFooter user={user} movie={movie} moviesFromTmdb={moviesFromTmdb}
           handleFav={handleFav} moviesFromDb={moviesFromDb} isLoading={isLoading}/>
        </Card>
      ))}

    </>
  );
};
