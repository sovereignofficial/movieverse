import { useMutation } from "@tanstack/react-query"
import { useEffect } from "react";
import { getGenreMovies, getPopularMovies, getTrendMovies } from "~/services/apiMovies"
import { useMovieStore } from "~/zustand/movieStore";

export const useMovies = () =>{
    const {currentFilter,setMovies,movies} = useMovieStore();

    const {mutate:popularMoviesFn} = useMutation({
        mutationKey:['popular'],
        mutationFn:getPopularMovies,
        onSuccess:(res)=>{
            setMovies(res);
        },
        onError:(e)=>{
            console.error(e.message)
        }
    });

    const {mutate:trendingMoviesFn} = useMutation({
        mutationKey:['trends'],
        mutationFn:getTrendMovies,
        onSuccess:(res)=>{
            setMovies(res);
        },
        onError:(e)=>{
            console.error(e.message)
        }
    });

    const {mutate:genreBasedMoviesFn} = useMutation({
        mutationKey:['trends'],
        mutationFn:getGenreMovies,
        onSuccess:(res)=>{
            setMovies(res);
        },
        onError:(e)=>{
            console.error(e.message)
        }
    });

    useEffect(()=>{
        switch(true){
            case currentFilter === "popular":
                popularMoviesFn()
                break;
                case currentFilter === "trending":
                    trendingMoviesFn()
                    break;
                    case typeof currentFilter === 'number':
                        genreBasedMoviesFn(currentFilter)
                        break;

                        default:
                            popularMoviesFn();
                    
        }

    },[currentFilter,genreBasedMoviesFn,popularMoviesFn,trendingMoviesFn]);

    return {movies,currentFilter}
}