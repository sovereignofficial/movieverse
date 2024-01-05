import { TMovie } from "~/types/movies";
import { TPerson } from "~/types/people";
import { TvShow } from "~/types/tvshow";

export const isNumber = (text: string) => {
    const isNum = !isNaN(parseInt(text));
    return isNum
}

export const isFavorited = <T extends TMovie | TvShow | TPerson>(usersFavorites:T[], item:T) => {
    return usersFavorites?.length > 0 ? usersFavorites.some(fav=> fav.id === item.id) : false
}


export const popularMovieUrl = (page: number, apiKey: string) => `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}&api_key=${apiKey}`;
export const trendingMovieUrl = (page: number, apiKey: string) => `https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${page}&api_key=${apiKey}`;
export const genreBasedMovieSearchUrl = (genreId: number, page: number, apiKey: string) => `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}&page=${page}`;
export const getMovieImageUrl = (path: string) => `https://image.tmdb.org/t/p/original${path}`;
export const getPersonImageUrl = (path: string) => `https://image.tmdb.org/t/p/original${path}`
export const getTvShowImageUrl = (path: string) => `https://image.tmdb.org/t/p/original${path}`
export const getMovieSearchUrl = (query: string, apiKey: string) => `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
export const getPeopleSearchUrl = (query: string, apiKey: string) => `https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=1&api_key=${apiKey}`
export const getTvShowSearchUrl = (query: string, apiKey: string) => `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${query}`
export const getTvShowApiUrl = (id:string,apiKey:string) => `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}`;

export const apiKey = import.meta.env.VITE_TMDB_API_KEY;
export const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',

    }
}