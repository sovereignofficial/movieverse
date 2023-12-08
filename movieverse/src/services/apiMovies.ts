import { Movie } from "~/types/movies";

const apiKey =import.meta.env.VITE_TMDB_API_KEY;
const popularMovieUrl = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${apiKey}`;
const trendingMovieUrl = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${apiKey}`;
const genreBasedMovieSearchUrl =(genreId:number) => `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`;
const options = {
    method:'GET',
    headers:{
        accept:'application/json',
        
    }
}

export const getPopularMovies = async () => {
    const data = await fetch(popularMovieUrl,options)
    .then(res=>res.json())
    .catch(err=>console.error(`tmdb error:${err}`));

    return data.results as Movie[];
}

export const getTrendMovies = async () => {
    const data = await fetch(trendingMovieUrl,options)
    .then(res=>res.json())
    .catch(err=>console.error(`tmdb error:${err}`));

    return data.results as Movie[];
}

export const getGenreMovies = async (genreId:number) => {
    const data = await fetch(genreBasedMovieSearchUrl(genreId),options)
    .then(res=>res.json())
    .catch(err=>console.error(`tmdb error:${err}`));

    return data.results as Movie[];
}

export const getMovieImageUrl = (path:string)=> `https://image.tmdb.org/t/p/original${path}`;


export const getPopularTvShows = async () =>{

}

export const getPopularPeople = async () => {

}