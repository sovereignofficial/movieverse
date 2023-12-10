import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { favoriteMovie, getMoviesFromDb, unfavMovie } from "~/services/apiMovies"
import { Movie, MoviesFromMovieverse } from "~/types/movies"
import { User } from "~/types/users"
import { useUsers } from "./useUsers"
import { useEffect } from "react"
import { useMovieStore } from "~/zustand/movieStore"

export const useFavoriteMovies = () => {
    const { user } = useUsers();
    const { setFavoriteMovies, favoriteMovies } = useMovieStore();
    const queryClient = useQueryClient();
    const { mutate: favoriteMovieFn,isPending:favoriteLoading } = useMutation({
        mutationKey: ['favorite-movie'],
        mutationFn: ({ movie, user }: { movie: Movie, user: User }) => favoriteMovie(movie, user),
        onSuccess: () => {
            queryClient.invalidateQueries();
        },
        onError: (err) => {
            console.error(err);
        }
    });

    const { mutate: unfavMovieFn, isPending:unfavLoading } = useMutation({
        mutationFn: ({ movie, user }: { movie: MoviesFromMovieverse, user: User }) => unfavMovie(movie, user),
        mutationKey: ['unfav-movie'],
        onSuccess: () => {
            queryClient.invalidateQueries();
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
            
            if(favoritedByUser.length !== favoriteMovies.length){
                setFavoriteMovies(favoritedByUser);
            }
        }
    }, [moviesFromDb, setFavoriteMovies, isGetFavMoviesError, getFavoriteMoviesError, user.id, favoriteMovies])

    const isLoading = favoriteLoading || unfavLoading
    return { favoriteMovieFn, unfavMovieFn, favoriteMovies, isGetFavMoviesError, getFavoriteMoviesError, isLoading, user }
}