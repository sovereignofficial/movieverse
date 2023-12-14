import { MovieComponent } from "~/types/movies";
import { Card } from "./Card";
import { getMovieImageUrl } from "~/services/apiMovies";

export const MovieCards: MovieComponent = ({ moviesFromTmdb,user, moviesFromDb,handleFav,isLoading }) => {
  return (
    <>
      {moviesFromTmdb.map((movie, index) => (
        <Card key={index}>
          <Card.CardHeader imgAddress={getMovieImageUrl(movie.poster_path)} />
          <Card.CardBody title={movie.title} overview={movie.overview} />
          <Card.CardFooter user={user} movie={movie} moviesFromTmdb={moviesFromTmdb}
           handleFav={handleFav} moviesFromDb={moviesFromDb} isLoading={isLoading}/>
        </Card>
      ))}

    </>
  );
};
