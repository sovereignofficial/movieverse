import { useMutation } from "@tanstack/react-query"
import { useEffect } from "react";
import { getGenreMovies, getPopularMovies, getTrendMovies } from "~/services/apiMovies"
import { useMovieStore } from "~/zustand/movieStore";

export const useMovies = () => {
    const { currentFilter, setMovies, moviesFromTmdb, page } = useMovieStore();

    const { mutate: popularMoviesFn } = useMutation({
        mutationKey: ['popular'],
        mutationFn: getPopularMovies,
        onSuccess: (res) => {
            setMovies(res);
        },
        onError: (e) => {
            console.error(e.message)
        }
    });

    const { mutate: trendingMoviesFn } = useMutation({
        mutationKey: ['trends'],
        mutationFn: getTrendMovies,
        onSuccess: (res) => {
            setMovies(res);
        },
        onError: (e) => {
            console.error(e.message)
        }
    });

    const { mutate: genreBasedMoviesFn } = useMutation({
        mutationKey: ['trends'],
        mutationFn: (genreParams: { genreId: number, page: number }) => getGenreMovies(genreParams.genreId, genreParams.page),
        onSuccess: (res) => {
            setMovies(res);
        },
        onError: (e) => {
            console.error(e.message)
        }
    });

    useEffect(() => {
        switch (true) {
            case currentFilter === "popular":
                popularMoviesFn(page)
                break;
            case currentFilter === "trending":
                trendingMoviesFn(page)
                break;
            case typeof currentFilter === 'number':
                genreBasedMoviesFn({ genreId: currentFilter, page })
                break;

            default:
                popularMoviesFn(page);

        }

    }, [currentFilter, genreBasedMoviesFn, popularMoviesFn, trendingMoviesFn, page]);

    return { moviesFromTmdb, currentFilter }
}