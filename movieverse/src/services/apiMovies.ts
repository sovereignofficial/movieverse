import { Movie } from "~/types/movies";

const apiKey =import.meta.env.VITE_TMDB_API_KEY;
const popularMovieUrl = (page: number) => `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}&api_key=${apiKey}`;
const trendingMovieUrl = (page: number) => `https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${page}&api_key=${apiKey}`;
const genreBasedMovieSearchUrl = (genreId: number, page: number) => `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}&page=${page}`;
const options = {
    method:'GET',
    headers:{
        accept:'application/json',
        
    }
}

export const getPopularMovies = async (page:number) => {
    console.log(`Fetching the page:${page}`);
    
    const data = await fetch(popularMovieUrl(page),options)
    .then(res=>res.json())
    .catch(err=>console.error(`tmdb error:${err}`));

    return data.results as Movie[];
}

export const getTrendMovies = async (page:number) => {
    const data = await fetch(trendingMovieUrl(page),options)
    .then(res=>res.json())
    .catch(err=>console.error(`tmdb error:${err}`));

    return data.results as Movie[];
}

export const getGenreMovies = async (genreId:number,page:number) => {
    const data = await fetch(genreBasedMovieSearchUrl(genreId,page),options)
    .then(res=>res.json())
    .catch(err=>console.error(`tmdb error:${err}`));

    return data.results as Movie[];
}

export const getMovieImageUrl = (path:string)=> `https://image.tmdb.org/t/p/original${path}`;


export const getPopularTvShows = async () =>{

}

export const getPopularPeople = async () => {

}