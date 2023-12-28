import { useMutation } from "@tanstack/react-query";
import { useCallback, useState } from "react";
import { favMovie, unfavMovie, favTvShow, unfavTvShow, favPerson, unfavPerson, calculateFavoritesCount } from "~/services/apiFavorites";
import { TMovie, TMovieDetail } from "~/types/movies";
import { TPerson } from "~/types/people";
import { TvShow } from "~/types/tvshow";
import { isFavorited } from "~/utils/helpers";
import { useUsersStore } from "~/zustand/usersStore";

type TFavParams<T extends TvShow | TMovie | TPerson> = {
  userId: string,
  item: T
}

type TFavCount = { itemId: number, itemType: "favoriteMovies" | "favoriteTvShows" | "favoritePeople" }

export const useFavorite = () => {
  const {
    addFavoriteMovie,
    removeFavoriteMovie,
    favoriteMovies,
    favoritePeople,
    favoriteTvShows,
    userId,
    addFavoritePerson,
    addFavoriteTvShow,
    removeFavoritePerson,
    removeFavoriteTvShow,
  } = useUsersStore();

  const [favCount, setFavCount] = useState(0);

  const { mutate: favMovieFn } = useMutation({
    mutationFn: async ({ userId, item }: TFavParams<TMovie>) => {
      favMovie(item, userId);
      setFavCount((prevCount: number) => prevCount + 1);
    },
    mutationKey: ['fav-tvshow'],
    onError: (err) => {
      console.error(err);
    }
  });

  const { mutate: unfavMovieFn } = useMutation({
    mutationFn: async ({ userId, item }: TFavParams<TMovie>) => {
      unfavMovie(item, userId);
      setFavCount((prevCount: number) => prevCount > 0 ? prevCount - 1 : 0);
    },
    mutationKey: ['unfav-tvshow'],
    onError: (err) => {
      console.error(err);
    }
  });
  
  const { mutate: favTvShowFn } = useMutation({
    mutationFn: async ({ userId, item }: TFavParams<TvShow>) => {
      favTvShow(item, userId);
      setFavCount((prevCount: number) => prevCount + 1);
    },
    mutationKey: ['fav-tvshow'],
    onError: (err) => {
      console.error(err);
    }
  });

  const { mutate: unfavTvShowFn } = useMutation({
    mutationFn: async ({ userId, item }: TFavParams<TvShow>) => {
      unfavTvShow(item, userId);
      setFavCount((prevCount: number) => prevCount > 0 ? prevCount - 1 : 0);
    },
    mutationKey: ['unfav-tvshow'],
    onError: (err) => {
      console.error(err);
    }
  });

  // Do the same for persons
  const { mutate: favPersonFn } = useMutation({
    mutationFn: async ({ userId, item }: TFavParams<TPerson>) => {
      favPerson(item, userId);
      setFavCount((prevCount: number) => prevCount > 0 ? prevCount - 1 : 0);
    },
    mutationKey: ['fav-person'],
    onError: (err) => {
      console.error(err);
    }
  });

  const { mutate: unfavPersonFn } = useMutation({
    mutationFn: async ({ userId, item }: TFavParams<TPerson>) => {
      unfavPerson(item, userId);
      setFavCount((prevCount: number) => prevCount > 0 ? prevCount - 1 : 0);
    },
    mutationKey: ['unfav-person'],
    onError: (err) => {
      console.error(err);
    }
  });
  const { mutate: getFavoritesCount, } = useMutation({
    mutationFn: ({ itemId, itemType }: TFavCount) => calculateFavoritesCount(itemId, itemType),
    mutationKey: ['fav-count'],
    onError: (err) => {
      console.error(err);
    },
    onSuccess: (res) => {
      setFavCount(res);
    }
  });

  const handleFavMovie = useCallback(
    (movie: TMovieDetail | TMovie) => {
      const movieForFav: TMovie = {
        adult: movie.adult,
        backdrop_path: movie.backdrop_path,
        genre_ids: movie.genre_ids,
        id: movie.id,
        original_language: movie.original_language,
        original_title: movie.original_title,
        overview: movie.overview,
        popularity: movie.popularity,
        poster_path: movie.poster_path,
        release_date: movie.release_date,
        title: movie.title,
        video: movie.video,
        vote_average: movie.vote_average,
        vote_count: movie.vote_count
      };
      if (!isFavorited(favoriteMovies!, movieForFav)) {
        addFavoriteMovie(movieForFav);
        favMovieFn({ item: movieForFav, userId });
      } else {
        removeFavoriteMovie(movieForFav.id);
        unfavMovieFn({ item: movieForFav, userId });
      }
    },
    [
      addFavoriteMovie,
      favMovieFn,
      removeFavoriteMovie,
      unfavMovieFn,
      userId,
      favoriteMovies,
    ]
  );



  const handleFavTvShow = useCallback(
    (tvshow: TvShow) => {
      if (!isFavorited(favoriteTvShows!, tvshow)) {
        addFavoriteTvShow(tvshow);
        favTvShowFn({ item: tvshow, userId });
      } else {
        removeFavoriteTvShow(tvshow.id);
        unfavTvShowFn({ item: tvshow, userId });
      }
    },
    [
      addFavoriteTvShow,
      favTvShowFn,
      removeFavoriteTvShow,
      unfavTvShowFn,
      userId,
      favoriteTvShows,
    ]
  );

  const handleFavPerson = useCallback(
    (person: TPerson) => {
      if (!isFavorited(favoritePeople!, person)) {
        addFavoritePerson(person);
        favPersonFn({ item: person, userId });
      } else {
        removeFavoritePerson(person.id);
        unfavPersonFn({ item: person, userId });
      }
    },
    [
      addFavoritePerson,
      favPersonFn,
      removeFavoritePerson,
      unfavPersonFn,
      userId,
      favoritePeople,
    ]
  );

  return { favMovieFn, unfavMovieFn, favTvShowFn, unfavTvShowFn, favPersonFn, unfavPersonFn, handleFavMovie, handleFavPerson, handleFavTvShow, getFavoritesCount, favCount };
}