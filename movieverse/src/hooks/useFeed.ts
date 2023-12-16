import { useMutation, useQuery } from "@tanstack/react-query"
import { getMostlyLikedMoviesFromMovieverse, getMoviesFromTop3Genres, getSpecialMoviesForUser } from "~/services/apiMovies"
import { useUsers } from "./useUsers"
import { useEffect } from "react";

export const useFeed = () => {
    const {user} = useUsers();

    const {mutate:getSpecialMovies, data:specialMoviesForUser} = useMutation ({
        mutationFn:getSpecialMoviesForUser,
        mutationKey:['special']
    });

    const {mutate:getTop3Genres, data:top3genres} = useMutation({
        mutationFn:getMoviesFromTop3Genres,
        mutationKey:['top-genres']
    });

    const {data:mostlyLiked} = useQuery({
        queryFn:getMostlyLikedMoviesFromMovieverse,
        queryKey:['mostly-liked']
    });

    useEffect(()=>{
        getSpecialMovies(user);
        getTop3Genres(user);
    },[user]);


    return {specialMoviesForUser,top3genres,mostlyLiked}
}