import { useQuery } from "@tanstack/react-query"
import { getMostlyLikedMoviesFromMovieverse, getMoviesFromTop3Genres, getSpecialMoviesForUser } from "~/services/apiMovies"
import { useUsers } from "./useUsers"

export const useFeed = () => {
    const {user} = useUsers();

    const {data:specialMoviesForUser} = useQuery({
        queryFn:() => getSpecialMoviesForUser(user),
        queryKey:['special']
    });

    const {data:top3genres} = useQuery({
        queryFn:() => getMoviesFromTop3Genres(user),
        queryKey:['top-genres']
    });

    const {data:mostlyLiked} = useQuery({
        queryFn:() => getMostlyLikedMoviesFromMovieverse(),
        queryKey:['mostly-liked']
    });

    
    return {specialMoviesForUser,top3genres,mostlyLiked}
}