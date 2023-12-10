import { MovieComponent } from "~/types/movies";
import { Card } from "./Card";
import { getMovieImageUrl } from "~/services/apiMovies";

export const MovieCards: MovieComponent = ({ movies,user,favoriteMovieFn,favoriteMovies,unfavMovieFn,isLoading }) => {
  return (
    <>
      {movies.map((movie, index) => (
        <Card key={index}>
          <Card.CardHeader imgAddress={getMovieImageUrl(movie.poster_path)} />
          <Card.CardBody title={movie.title} overview={movie.overview} />
          <Card.CardFooter user={user} movie={movie} movies={movies}
           favoriteMovieFn={favoriteMovieFn} favoriteMovies={favoriteMovies} 
           unfavMovieFn={unfavMovieFn} isLoading={isLoading}/>
        </Card>
      ))}

    </>
  );
};
