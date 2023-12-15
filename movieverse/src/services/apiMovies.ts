import { Movie, MoviesFromMovieverse } from "~/types/movies";
import { User } from "~/types/users";
import { supabaseClient } from "./supabase";
import { getUserGenreMap, userSpecialMovieDistribution } from "~/utils/helpers";
import { genres } from "~/app.config";

export const apiKey = import.meta.env.VITE_TMDB_API_KEY;
const popularMovieUrl = (page: number) => `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}&api_key=${apiKey}`;
const trendingMovieUrl = (page: number) => `https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${page}&api_key=${apiKey}`;
const genreBasedMovieSearchUrl = (genreId: number, page: number) => `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}&page=${page}`;

export const getMovieImageUrl = (path: string) => `https://image.tmdb.org/t/p/original${path}`;

export const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',

    }
}

export const getPopularMovies = async (page: number) => {
    console.log(`Fetching the page:${page}`);

    const data = await fetch(popularMovieUrl(page), options)
        .then(res => res.json())
        .catch(err => console.error(`tmdb error:${err}`));

    return data.results as Movie[];
}

export const getTrendMovies = async (page: number) => {
    const data = await fetch(trendingMovieUrl(page), options)
        .then(res => res.json())
        .catch(err => console.error(`tmdb error:${err}`));

    return data.results as Movie[];
}

export const getGenreMovies = async (genreId: number, page: number) => {
    const data = await fetch(genreBasedMovieSearchUrl(genreId, page), options)
        .then(res => res.json())
        .catch(err => console.error(`tmdb error:${err}`));

    return data.results as Movie[];
}



export const getPopularTvShows = async () => {

}

export const getPopularPeople = async () => {

}

export const favoriteMovie = async (movie: Movie, user: User) => {
    const { id: movieId,
        adult,
        genre_ids,
        original_language,
        overview,
        popularity,
        poster_path,
        title,
        vote_average,
        vote_count, } = movie;

    const { data: existingMovie, error: existingMovieError } = await supabaseClient
        .from('movies')
        .select()
        .eq('movieId', movieId);

    if (existingMovieError) throw new Error(existingMovieError.message);

    if (existingMovie?.length > 0) {
        const { data: updatedMovie, error: updatedMovieError } = await supabaseClient
            .from('movies')
            .update({
                favorited_from: [...existingMovie[0].favorited_from, user.id]
            })
            .eq('movieId', movieId)
            .select('*')

        if (updatedMovieError) throw new Error(updatedMovieError.message);

        const { data: updatedUser, error: updatedUserError } = await supabaseClient
            .from('users')
            .update({
                favoriteMovies: [...user.favoriteMovies, updatedMovie[0].id],
                favoriteGenres: [...user.favoriteGenres, ...movie.genre_ids]
            })
            .eq('id', user?.id)
            .select("*")

        if (updatedUserError) throw new Error(updatedUserError.message);

        return { updatedMovie, updatedUser };
    } else {
        const { data: insertMovie, error: insertMovieError } = await supabaseClient
            .from('movies')
            .insert({
                movieId,
                adult,
                genre_ids,
                original_language,
                overview,
                popularity,
                poster_path,
                title,
                vote_average,
                vote_count,
                favorited_from: [user.id]
            })
            .select('*')

        if (insertMovieError || !insertMovie) throw new Error(`${insertMovieError.message} `);

        const { data: updatedUser, error: updateUserError } = await supabaseClient
            .from("users")
            .update({
                favoriteMovies: [...user.favoriteMovies, insertMovie[0].id],
                favoriteGenres: [...user.favoriteGenres, ...movie.genre_ids]
            })
            .eq("id", user.id)
            .select("*")

        if (updateUserError) throw new Error(updateUserError.message);

        return { updatedUser, insertMovie };
    }
}

export const unfavMovie = async (movie: MoviesFromMovieverse, user: User) => {
    const { data, error } = await supabaseClient
        .from('movies')
        .update({
            favorited_from: movie.favorited_from.filter(uid => uid !== user?.id)
        })
        .eq('id', movie.id)
        .select('*');

    if (error) throw new Error(error.message);

    const { error: unfavFromUserError } = await supabaseClient
        .from("users")
        .update({
            favoriteMovies: user.favoriteMovies.filter(mid => mid !== movie.id)
        })
        .eq('id', user.id);

    if (unfavFromUserError) throw new Error(unfavFromUserError.message);
    return data[0] as MoviesFromMovieverse
}

export const getMoviesFromDb = async (): Promise<MoviesFromMovieverse[]> => {
    const { data: favoriteMovies, error } = await supabaseClient
        .from('movies')
        .select("*")

    if (error || favoriteMovies === null) {
        throw new Error(`Error fetching favorite movies:${error || "an error occured"}`);
    }

    return favoriteMovies as MoviesFromMovieverse[];
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

export const getMovieFromDb = async (movieId: string) => {

    const { data, error } = await supabaseClient.from('movies')
        .select("*")
        .eq("movieId", movieId);

    if (error) throw new Error(error.message);

    return data[0] as MoviesFromMovieverse
}

export const getSpecialMoviesForUser = async (user: User) => {
    const genremap = getUserGenreMap(user);
    const movies = userSpecialMovieDistribution(genremap);
    const specialForUser = []


    for (let i = 0; specialForUser.length < 10; i++) {
        const { results }: { results: Movie[] } = await fetch(genreBasedMovieSearchUrl(movies[i].genre, 1)).then(res => res.json())
        for (let z = 0; z < movies[i].amount; z++) {
            specialForUser.push(results[z]);
        }
    }
    return specialForUser;
}

export const getMoviesFromTop3Genres = async (user: User) => {
    const topGenresOfUser = getUserGenreMap(user);
    const results = [];

    for (let i = 0; i < 3; i++) {
        const { results: topMovies }:{ results: Movie[] } = await fetch(genreBasedMovieSearchUrl(topGenresOfUser[i].genre, 1)).then(res => res.json());
        results.push({
            genreName: genres.find(genre => genre.id === topGenresOfUser[i].genre)?.name,
            movies: topMovies
        })
    }

    return results
}

export const getMostlyLikedMoviesFromMovieverse = async () => {
    const movies = await getMoviesFromDb();

    const filteredMovies = movies.filter(movie=> movie.favorited_from.length > 0);
    const sortedMovies = filteredMovies.sort((a,b)=> b.favorited_from.length - a.favorited_from.length);

    return sortedMovies
}