import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useEffect, useState } from "react";
import { getGenreMovies, getPopularMovies, getTrendMovies } from "~/services/apiMovies"
import { useMovieStore } from "~/zustand/movieStore";

export const useMovies = () => {
    const [fPrev, setFPrev] = useState<string | number>('');
    const { currentFilter, setMovies, moviesFromTmdb } = useMovieStore();

    const qcli = useQueryClient();

    const { data: popular, isSuccess: popularSuccess } = useQuery({
        queryKey: ['popular',1],
        queryFn: () => getPopularMovies(1),
    });

    const { data: trend, isSuccess: trendSuccess } = useQuery({
        queryKey: ['trends',1],
        queryFn: () => getTrendMovies(1),
    });

    const { data: genre, isSuccess: genreSuccess } = useQuery({
        queryKey: ['genre', currentFilter,1],
        queryFn: () => getGenreMovies(currentFilter as number,1),
    });

     // Set movies when trendSuccess changes
    useEffect(() => {
        if (trendSuccess) {
            setMovies(trend);
        }
    }, [trendSuccess, trend, setMovies]);

    // Set movies when popularSuccess changes
    useEffect(() => {
        if (popularSuccess) {
            setMovies(popular);
        }
    }, [popularSuccess, popular, setMovies]);

    // Set movies when genreSuccess changes
    useEffect(() => {
        if (genreSuccess) {
            setMovies(genre);
        }
    }, [genreSuccess, genre, setMovies]);

    //cache breach
    useEffect(() => {
        if (currentFilter !== fPrev) {
            switch (currentFilter) {
                case "popular":
                    qcli.invalidateQueries({
                        queryKey: ['popular']
                    })
                    break;
                case "trending":
                    qcli.invalidateQueries({
                        queryKey: ['trends']
                    })
                    break;
                default:
                    if (typeof currentFilter === 'number') {
                        qcli.invalidateQueries({
                            queryKey: ['genre']
                        })
                    }
            }

            setFPrev(currentFilter);
        }
    }, [currentFilter, fPrev, qcli]);

    return { moviesFromTmdb, currentFilter }
}
