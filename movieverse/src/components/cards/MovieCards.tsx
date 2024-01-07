import { Card } from "./Card";
import { getMovieImageUrl, isFavorited } from "~/utils/helpers";
import { useNavigate } from "react-router-dom";
import { TMovie } from "~/types/movies";
import { useUsersStore } from "~/zustand/usersStore";
import { memo } from "react";

type TMovieCards = {
  moviesFromTmdb: TMovie[];
  handleFav: (movie: TMovie) => void;
};
export const MovieCards: React.FC<TMovieCards> = memo(
  ({ moviesFromTmdb, handleFav }) => {
    const navigate = useNavigate();
    const { favoriteMovies } = useUsersStore();

    return (
      <>
        {moviesFromTmdb.map((movie, index) => {
          const favorited = isFavorited(favoriteMovies!, movie);
          return (
            <Card key={index}>
              <Card.CardHeader
                imgAddress={getMovieImageUrl(
                  movie.poster_path ?? movie.backdrop_path ?? ""
                )}
                title={movie.title}
              />
              <Card.CardBody title={movie.title} overview={movie.overview} />
              <Card.CardFooter
                isLoading={false}
                isFavorited={favorited}
                onClickFavorite={() => handleFav(movie)}
                onClickDetails={() => navigate(`/movie?m=${movie.id}`)}
              />
            </Card>
          );
        })}
      </>
    );
  }
);
