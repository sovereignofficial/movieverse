import { useQuery } from "@tanstack/react-query";
import { getMovieTrailer, getMovie, getMovieFromDb } from "~/services/apiMovies";

export const useMovie = (movieId:string) =>{
    const {data:trailer} = useQuery({
        queryFn:()=>getMovieTrailer(movieId),
        queryKey:['trailer',movieId],
        
    });

    const {data:movieDetails} = useQuery({
        queryFn:()=>getMovie(movieId),
        queryKey:['movie-details',movieId]
    })

    const {data:movieFromDb} = useQuery({
        queryKey:['movie',movieId],
        queryFn:()=>getMovieFromDb(movieId)
    })

    return {trailer,movieDetails,movieFromDb}
}