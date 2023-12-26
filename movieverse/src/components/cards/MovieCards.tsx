import { MovieComponent } from "~/types/movies";
import { Card } from "./Card";
import { getMovieImageUrl } from "~/utils/helpers";
import { useMovie } from "~/hooks/useMovie";
import { useNavigate } from "react-router-dom";

export const MovieCards: MovieComponent = ({ moviesFromTmdb, moviesFromDb, handleFav, isLoading }) => {
    const { movieFromDb} = useMovie();
    const navigate = useNavigate();

  return (
    <>
      {moviesFromTmdb.map((movie, index) => {
        const isFavorited = moviesFromDb.some(dbMovie => dbMovie.id === movie.id);
        const onClickFavorite = () => handleFav(movie,movieFromDb);
        const onClickDetails = () => navigate(`/movie/${movie.id}`);

        return (
          <Card key={index}>
            <Card.CardHeader imgAddress={getMovieImageUrl(movie.poster_path ?? movie.backdrop_path ?? "")} title={movie.title} />
            <Card.CardBody title={movie.title} overview={movie.overview} />
            <Card.CardFooter 
              isLoading={isLoading} 
              isFavorited={isFavorited} 
              onClickFavorite={onClickFavorite} 
              onClickDetails={onClickDetails} 
            />
          </Card>
        );
      })}
    </>
  );
};