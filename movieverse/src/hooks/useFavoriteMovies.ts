import { useMutation, useQuery } from "@tanstack/react-query"
import { favoriteMovie, getMoviesFromDb, unfavMovie } from "~/services/apiMovies"
import { Movie, MoviesFromMovieverse } from "~/types/movies"
import { User } from "~/types/users"
import { useUsers } from "./useUsers"
import { useEffect } from "react"
import { useMovieStore } from "~/zustand/movieStore"

export const useFavoriteMovies = () => {
    const { user } = useUsers();
    const { setFavoriteMovies, favoriteMovies, setUnfavoriteMovie } = useMovieStore();

    const { mutate: favoriteMovieFn,isPending:favoriteLoading } = useMutation({
        mutationKey: ['favorite-movie'],
        mutationFn: ({ movie, user }: { movie: Movie, user: User }) => favoriteMovie(movie, user),
        onSuccess: (res) => {
            const { updatedMovie, insertMovie } = res

            if (insertMovie) {
                setFavoriteMovies(insertMovie)
            } else {
                setFavoriteMovies(updatedMovie)
            }
        },
        onError: (err) => {
            console.error(err);
        }
    });

    const { mutate: unfavMovieFn, isPending:unfavLoading } = useMutation({
        mutationFn: ({ movie, user }: { movie: MoviesFromMovieverse, user: User }) => unfavMovie(movie, user),
        mutationKey: ['unfav-movie'],
        onSuccess: (res) => {
            setUnfavoriteMovie(res);
        },
        onError: (err) => {
            console.error(err)
        }
    });

    const { data: moviesFromDb, isError: isGetFavMoviesError, error: getFavoriteMoviesError } = useQuery({
        queryKey: ['favorite-movies'],
        queryFn: () => getMoviesFromDb(),

    });

    useEffect(() => {
        if (moviesFromDb && !isGetFavMoviesError && !getFavoriteMoviesError) {
            const favoritedByUser:MoviesFromMovieverse[] = moviesFromDb.filter(movie => movie.favorited_from.includes(user.id!))
            setFavoriteMovies(favoritedByUser);
        }
    }, [moviesFromDb, setFavoriteMovies, isGetFavMoviesError, getFavoriteMoviesError, user.id])

    const isLoading = favoriteLoading || unfavLoading
    return { favoriteMovieFn, unfavMovieFn, favoriteMovies, isGetFavMoviesError, getFavoriteMoviesError, isLoading, user }
}