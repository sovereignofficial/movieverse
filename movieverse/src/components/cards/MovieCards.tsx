import { Card } from "./Card";
import { getMovieImageUrl, isFavorited } from "~/utils/helpers";
import { useNavigate } from "react-router-dom";
import { TMovie } from "~/types/movies";
import { useUsersStore } from "~/zustand/usersStore";
import { memo } from "react";
import { motion } from "framer-motion";

type TMovieCards = {
  moviesFromTmdb: TMovie[];
  handleFav: (movie: TMovie) => void;
};

export const MovieCards: React.FC<TMovieCards> = memo(
  ({ moviesFromTmdb, handleFav }) => {
    const navigate = useNavigate();
    const { favoriteMovies } = useUsersStore();

    const childVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.5 } },
    };
    return (
      <>
        {moviesFromTmdb.map((movie, index) => {
          const favorited = isFavorited(favoriteMovies!, movie);
          return (
            <motion.div variants={childVariants}>
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
            </motion.div>
          );
        })}
      </>
    );
  }
);
