import { useInfiniteQuery } from "@tanstack/react-query"
import { useEffect } from "react";
import { getMoviesForInfiniteScroll } from "~/services/apiMovies"
import { useMovieStore } from "~/zustand/movieStore";

export const useInfiniteScrollForMovies = (currentFilter: string | number) => {
    const { setMoviesByInfiniteScroll } = useMovieStore();

    const {
        fetchNextPage,
        fetchPreviousPage,
        hasNextPage,
        hasPreviousPage,
        isFetchingNextPage,
        isFetchingPreviousPage,
        data,
    } = useInfiniteQuery({
        queryKey: ['infinite-scroll'],
        queryFn: ({ pageParam }) => getMoviesForInfiniteScroll(currentFilter, pageParam),
        initialPageParam: 1,
        getNextPageParam: (_, allPages) =>
            allPages.length + 1,
        getPreviousPageParam: (_, allPages) =>
            allPages.length > 1 ? allPages.length - 1 : undefined,
    });

    useEffect(() => {
        if (!isFetchingNextPage && data) {
            const pages = data.pages;
            setMoviesByInfiniteScroll(pages[pages.length - 1])
        }
       }, [isFetchingNextPage, data]);
       


    return { fetchNextPage, fetchPreviousPage, hasNextPage, hasPreviousPage, isFetchingNextPage, isFetchingPreviousPage, data}
}