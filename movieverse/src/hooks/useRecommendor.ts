import { useQuery } from "@tanstack/react-query"
import { getMostlyLikedMoviesFromMovieverse, getMoviesFromTop3Genres, getSpecialMoviesForUser } from "~/services/apiRecommend"
import { useUsersStore } from "~/zustand/usersStore";

export const useRecommendor = () => {
   const { favoriteMovies } = useUsersStore();

   const { data: specialMoviesForUser } = useQuery({
       queryFn: () => getSpecialMoviesForUser(favoriteMovies || []),
       queryKey: ['special', favoriteMovies],
   });

   const { data: top3genres } = useQuery({
       queryFn: () => getMoviesFromTop3Genres(favoriteMovies || []),
       queryKey: ['top-genres', favoriteMovies],
   });

   const { data: mostlyLiked } = useQuery({
       queryFn: getMostlyLikedMoviesFromMovieverse,
       queryKey: ['mostly-liked']
   });
    
    return { specialMoviesForUser, top3genres, mostlyLiked }
}