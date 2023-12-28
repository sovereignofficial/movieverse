import { useMutation, useQuery } from "@tanstack/react-query"
import { useEffect } from "react";
import { getMostlyLikedMoviesFromMovieverse, getMoviesFromTop3Genres, getSpecialMoviesForUser } from "~/services/apiRecommend"
import { TMovie } from "~/types/movies";
import { useUsersStore } from "~/zustand/usersStore";

export const useRecommendor = () => {
    const { favoriteMovies } = useUsersStore();

    const { data: specialMoviesForUser, mutate: getSpecialMoviesFn } = useMutation({
        mutationFn: (favoriteMovies: TMovie[]) => getSpecialMoviesForUser(favoriteMovies),
        mutationKey: ['special'],

    });

    const { data: top3genres, mutate: getTop3GenreMoviesFn } = useMutation({
        mutationFn: (favoriteMovies: TMovie[]) => getMoviesFromTop3Genres(favoriteMovies),
        mutationKey: ['top-genres'],

    });

    const { data: mostlyLiked, error:mostlyLikedMoviesError } = useQuery({
        queryFn: getMostlyLikedMoviesFromMovieverse,
        queryKey: ['mostly-liked']
    });

    useEffect(() => {
        if (favoriteMovies) {
            console.log(favoriteMovies,"FAV MOVIES");
            getSpecialMoviesFn(favoriteMovies);
            getTop3GenreMoviesFn(favoriteMovies)
        }
    }, [favoriteMovies, getSpecialMoviesFn, getTop3GenreMoviesFn])

    useEffect(()=>{
        if(mostlyLikedMoviesError){
            console.error(mostlyLikedMoviesError);
        }
    },[mostlyLikedMoviesError]);
    
    return { specialMoviesForUser, top3genres, mostlyLiked }
}