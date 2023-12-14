import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { favoriteMovie, getMoviesFromDb, unfavMovie } from "~/services/apiMovies"
import { Movie, MoviesFromMovieverse } from "~/types/movies"
import { User } from "~/types/users"
import { useUsers } from "./useUsers"
import { useEffect } from "react"
import { useMovieStore } from "~/zustand/movieStore"
import { isFavorited } from "~/utils/helpers"

export const useFavoriteMovies = () => {
    const { user } = useUsers();
    const { setFavoriteMovies, moviesFromDb } = useMovieStore();
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

    const { data: dbMoviesData, isError: isGetFavMoviesError, error: getFavoriteMoviesError } = useQuery({
        queryKey: ['favorite-movies'],
        queryFn: () => getMoviesFromDb(),

    });

    useEffect(() => {
        if (dbMoviesData && !isGetFavMoviesError && !getFavoriteMoviesError) {
            const favoritedByUser:MoviesFromMovieverse[] = dbMoviesData.filter(movie => movie.favorited_from.includes(user.id!))
            
            if(favoritedByUser.length !== moviesFromDb.length){
                setFavoriteMovies(favoritedByUser);
            }
        }
    }, [dbMoviesData, setFavoriteMovies, isGetFavMoviesError, getFavoriteMoviesError, user.id, moviesFromDb])

    const isLoading = favoriteLoading || unfavLoading


    const handleFav = (movie:Movie | undefined, movieFromDb:MoviesFromMovieverse | undefined) => {
            const favorited = isFavorited(movie!.title, user, dbMoviesData!);
            favorited 
            ? unfavMovieFn({ movie: movieFromDb!, user })
            : favoriteMovieFn({movie:movie!,user,});
      };

    return {handleFav, moviesFromDb, isGetFavMoviesError, getFavoriteMoviesError, isLoading, user }
}