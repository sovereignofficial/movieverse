import { User } from "./users";

export type Movie = {
    id: number,
    adult: boolean,
    genre_ids: number[],
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    title: string,
    vote_average: number,
    vote_count: number,
}

export type MoviesFromMovieverse = {
    id: number,
    movieId: number,
    original_title: string,
    adult: boolean,
    genre_ids: number[],
    original_language: string,
    overview: string,
    popularity: number,
    poster_path: string,
    title: string,
    vote_average: number,
    vote_count: number,
    favorited_from: number[],
}

export type MovieComponent = React.FC<{
    movie: Movie,
    movies: Movie[],
    favoriteMovies: MoviesFromMovieverse[],
    user: User,
    unfavMovieFn: ({
        movie,
        user,
    }: {
        movie: MoviesFromMovieverse;
        user: User;
    }) => void,
    favoriteMovieFn: ({ movie, user }: { movie: Movie; user: User }) => void,
    isLoading: boolean
}>;
