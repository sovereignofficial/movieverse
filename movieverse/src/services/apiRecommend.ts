import { genres } from "~/app.config";
import { TMovie } from "~/types/movies";
import { apiKey, genreBasedMovieSearchUrl } from "~/utils/helpers";
import { supabaseClient } from "./supabase";

export const getSpecialMoviesForUser = async (favMovies: TMovie[]) => {
    const genremap = getUserGenreMap(favMovies);
    const movies = userSpecialMovieDistribution(genremap);
    const specialForUser: TMovie[] = []


    for (let i = 0; specialForUser.length < 10; i++) {
        const randomPage = Math.floor(Math.random() * 10);
        const { results }: { results: TMovie[] } = await fetch(genreBasedMovieSearchUrl(movies[i].genre, randomPage, apiKey)).then(res => res.json())
        for (let z = 0; z < movies[i].amount; z++) {
            const randomAmount = Math.floor(Math.random() * 10);
            if (specialForUser.some(item => item.title === results[z + randomAmount].title)) {
                specialForUser.push(results[z + randomAmount + 1]);
            } else {
                specialForUser.push(results[z + randomAmount])
            }
        }
    }
    return specialForUser;
}

export const getMoviesFromTop3Genres = async (favMovies: TMovie[]) => {
    const topGenresOfUser = getUserGenreMap(favMovies);
    const results = [];

    for (let i = 0; i < 3; i++) {
        const randomPage = Math.floor(Math.random() * 10);
        const { results: topMovies }: { results: TMovie[] } = await fetch(genreBasedMovieSearchUrl(topGenresOfUser[i].genre, randomPage, apiKey)).then(res => res.json());
        const limitedTopMovies = topMovies.slice(0, 10); // Limit to the first 10 movies
        results.push({
            genreName: genres.find(genre => genre.id === topGenresOfUser[i].genre)?.name,
            movies: limitedTopMovies
        })
    }

    return results
}

export const getMostlyLikedMoviesFromMovieverse = async () => {
    const { data: userFavorites, error } = await supabaseClient
        .from('user_favorites')
        .select('favoriteMovies');

    if (error) throw new Error(error.message);

    const allFavoriteMovies = userFavorites.reduce((acc: number[], userFavorite: { favoriteMovies: number[] }) => {
        return [...acc, ...userFavorite.favoriteMovies];
    }, []);

    const movieCounts: { [key: number]: number } = allFavoriteMovies.reduce<{ [key: number]: number }>((counts, movieId) => {
        counts[movieId] = (counts[movieId] || 0) + 1;
        return counts;
    }, {});

    const sortedMovieIds = Object.keys(movieCounts).sort((a, b) => movieCounts[Number(b)] - movieCounts[Number(a)]);

    const sortedMovies = [];
    for (const movieId of sortedMovieIds.slice(0, 10)) { // Only fetch the first 10 movies
        const { data: movie, error: movieError } = await supabaseClient
            .from('movies')
            .select('*')
            .eq('id', Number(movieId))
            .single();

        if (movieError) throw new Error(movieError.message);

        sortedMovies.push(movie);
    }

    return sortedMovies;
}

const SPECIAL_MOVIE_AMOUNT = 10;

export const getUserGenreMap = (favMovies: TMovie[]) => {
    const genreCountMap: { [key: number]: number } = {};
    favMovies.forEach(movie => {
        if (movie?.genre_ids) {
            const genreIds = JSON.parse(movie.genre_ids.toString());
            genreIds.forEach((genre: number) => {
                genreCountMap[genre] = (genreCountMap[genre] || 0) + 1;
            });
        }
    });
    const totalGenres = Object.values(genreCountMap).reduce((a, b) => a + b, 0);

    const genrePercentageArray = Object.entries(genreCountMap).map(([genre, occurence]) => {
        return {
            genre: Number(genre),
            occurence,
            percentage: (occurence / totalGenres) * 100
        };
    });

    genrePercentageArray.sort((a, b) => b.percentage - a.percentage);

    return genrePercentageArray;
}

export const userSpecialMovieDistribution = (genreMap: { genre: number, occurence: number, percentage: number }[]) => {
    const moviesFrom = genreMap.map((item) => {
        const calculatedAmount = (item.percentage * SPECIAL_MOVIE_AMOUNT) / 100;
        return { genre: item.genre, amount: Math.round(calculatedAmount) }
    })
    return moviesFrom
}
