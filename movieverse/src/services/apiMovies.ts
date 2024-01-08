import { TMovie } from "~/types/movies";
import { supabaseClient } from "./supabase";
import { apiKey, genreBasedMovieSearchUrl, options, popularMovieUrl, trendingMovieUrl } from "~/utils/helpers";
import { TvShow } from "~/types/tvshow";
import { TPerson } from "~/types/people";



export const getMoviesForInfiniteScroll = async (currentFilter: string | number, page: number) => {
    switch (true) {
        case currentFilter === "popular":
            return await getPopularMovies(page);
        case currentFilter === "trending":
            return await getTrendMovies(page);
        case typeof currentFilter === "number":
            return await getGenreMovies(currentFilter, page);
        default:
            return await getPopularMovies(page);
    }
}

export const getPopularMovies = async (page: number) => {
    console.log(`Fetching the page:${page}`);

    const data = await fetch(popularMovieUrl(page, apiKey), options)
        .then(res => res.json())
        .catch(err => console.error(`tmdb error:${err}`));

    return data.results as TMovie[];
}

export const getTrendMovies = async (page: number) => {
    const data = await fetch(trendingMovieUrl(page, apiKey), options)
        .then(res => res.json())
        .catch(err => console.error(`tmdb error:${err}`));

    return data.results as TMovie[];
}

export const getGenreMovies = async (genreId: number, page: number) => {
    const data = await fetch(genreBasedMovieSearchUrl(genreId, page, apiKey), options)
        .then(res => res.json())
        .catch(err => console.error(`tmdb error:${err}`));

    return data.results as TMovie[];
}



export const getMovieTrailer = async (movieId: string) => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`, options)
        .then(res => res.json())
        .catch(err => console.error(err));
    const videoKey = data.results[0].key
    const videoUrl = `https://www.youtube.com/watch?v=${videoKey}`
    return { videoKey, videoUrl }
}

export const getMovie = async (movieId: string) => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`, options)
        .then(res => res.json())
        .catch(err => console.error(err));

    console.log(data);

    return data;
}

async function insertItem<T>(item: T, table: string) {
    const { error: insertError } = await supabaseClient
        .from(table)
        .insert(item as T);

    if (insertError) {
        console.log(insertError);
        throw new Error(insertError.message);
    }
}

export async function findInDb<T extends TMovie | TvShow | TPerson>(item: T, table: string) {

    const { data, error } = await supabaseClient
        .from(table)
        .select('*')
        .eq('id', item.id)

    if (error && error.message !== 'No rows returned' && !data) {
        throw new Error(error.message);
    }

    if (data && data.length < 1) {
        await insertItem<T>(item, table);
    }
}


export const getMovieFromDb = async (movieId: number) => {
    const { data, error } = await supabaseClient.from('movies')
        .select("*")
        .eq("id", movieId);

    if (error) throw new Error(error.message);

    return data[0] as TMovie
}

export const getMoviesFromDb = async () => {
    const { data, error } = await supabaseClient
        .from('movies')
        .select('*');

    if (error) {
        console.error('Error fetching movies:', error);
        return null;
    }

    return data[0] as TMovie[];
}

export const saveMovieIntoDb = async (movie: TMovie) => {
    const { data: existingMovies, error: selectError } = await supabaseClient
        .from('movies')
        .select('id')
        .eq('id', movie.id);

    if (selectError) throw new Error(selectError.message);

    if (!existingMovies || existingMovies.length === 0) {
        const { error: insertError } = await supabaseClient
            .from('movies')
            .insert(movie);

        if (insertError) throw new Error(insertError.message);
    }
}

