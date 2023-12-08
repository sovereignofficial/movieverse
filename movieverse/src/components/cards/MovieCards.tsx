import { Movie } from "~/types/movies";
import { Card } from "./Card";
import { getMovieImageUrl } from "~/services/apiMovies";

export const MovieCards: React.FC<{ movies: Movie[] }> = ({ movies }) => {
  return (
    <>
      {movies.map((movie, index) => (
        <Card key={index}>
          <Card.CardHeader imgAddress={getMovieImageUrl(movie.poster_path)} />
          <Card.CardBody title={movie.title} overview={movie.overview} />
          <Card.CardFooter />
        </Card>
      ))}

    </>
  );
};
