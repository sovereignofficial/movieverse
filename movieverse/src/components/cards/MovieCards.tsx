import { Movie, MoviesFromMovieverse } from "~/types/movies";
import { Card } from "./Card";
import { getMovieImageUrl } from "~/services/apiMovies";
import { User } from "~/types/users";

export const MovieCards: React.FC<{ movies: Movie[] | MoviesFromMovieverse[],user:User }> = ({ movies,user }) => {
  return (
    <>
      {movies.map((movie, index) => (
        <Card key={index}>
          <Card.CardHeader imgAddress={getMovieImageUrl(movie.poster_path)} />
          <Card.CardBody title={movie.title} overview={movie.overview} />
          <Card.CardFooter user={user} movie={movie} />
        </Card>
      ))}

    </>
  );
};
