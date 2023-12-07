import { useQuery } from "@tanstack/react-query"
import { getPopularMovies, getTrendMovies } from "~/services/apiMovies"

export const useMovies = () =>{

    const {data:popularMovies,error:popularMoviesError,isError:isPopularMoviesError} = useQuery({
        queryKey:['popular'],
        queryFn:getPopularMovies
    });

    const {data:trendingMovies,error:trendingMoviesError,isError:isTrendingMoviesError} = useQuery({
        queryKey:['trends'],
        queryFn:getTrendMovies
    });


    return { popularMovies,popularMoviesError,isPopularMoviesError,
    trendingMovies,trendingMoviesError,isTrendingMoviesError}
}