import { MoviesFromMovieverse } from "~/types/movies";
import { User } from "~/types/users";

const SPECIAL_MOVIE_AMOUNT = 10;
const SPECIAL_OCCURENCE_AMOUNT = 10;

export const isNumber = (text: string) => {
    const isNum = !isNaN(parseInt(text));
    return isNum
}

export const isFavorited = (title: string, user: User, moviesFromDb: MoviesFromMovieverse[]) => {
    return moviesFromDb.some(movie => movie.title === title && movie.favorited_from.includes(user.id!));
}

export const getUserGenreMap = (user: User) => {
    const favoriteGenres = user.favoriteGenres;
    const userGenreMap = favoriteGenres.reduce((pre, curr) => {
        if (pre.some(item => item.genre === curr)) {
            const index = pre.findIndex(item => item.genre === curr);
            const incGenre = pre[index]
            incGenre.occurence += 1;
            return pre
        } else {
            return [...pre, { genre: curr, occurence: 1 }]
        }
    }, [] as { genre: number, occurence: number }[])

    const filteredGenreMap = userGenreMap.filter(item => item.occurence > SPECIAL_OCCURENCE_AMOUNT);

    const totalOccurency = filteredGenreMap.reduce((total, item) => total + item.occurence, 0);

    const result = filteredGenreMap.map((item) => {
        const percentage = (item.occurence / totalOccurency) * 100;
        return { ...item, percentage: Math.round(percentage) }
    });

    return result.sort((a, b) => b.percentage - a.percentage);
}

export const userSpecialMovieDistribution = (genreMap: { genre: number, occurence: number, percentage: number }[]) => {
    const moviesFrom = genreMap.map((item) => {
        const calculatedAmount = (item.percentage * SPECIAL_MOVIE_AMOUNT) / 100;
        return { genre: item.genre, amount: Math.round(calculatedAmount) }
    })
    return moviesFrom
}

export const popularMovieUrl = (page: number, apiKey: string) => `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}&api_key=${apiKey}`;
export const trendingMovieUrl = (page: number, apiKey: string) => `https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${page}&api_key=${apiKey}`;
export const genreBasedMovieSearchUrl = (genreId: number, page: number, apiKey: string) => `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}&page=${page}`;
export const getMovieImageUrl = (path: string) => `https://image.tmdb.org/t/p/original${path}`;
export const getPersonImageUrl = (path: string) => `https://image.tmdb.org/t/p/original${path}`
export const getTvShowImageUrl = (path: string) => `https://image.tmdb.org/t/p/original${path}`
export const getMovieSearchUrl = (query: string, apiKey: string) => `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
export const getPeopleSearchUrl = (query: string, apiKey: string) => `https://api.themoviedb.org/3/search/person?api_key=${apiKey}&query=${query}`
export const getTvShowSearchUrl = (query: string, apiKey: string) => `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${query}`

export const apiKey = import.meta.env.VITE_TMDB_API_KEY;
export const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',

    }
}