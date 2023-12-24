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
    backdrop_path: string,
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
    moviesFromTmdb: Movie[],
    moviesFromDb: MoviesFromMovieverse[],
    user: User,
    isLoading: boolean,
    handleFav: (movie: Movie | undefined, movieFromDb: MoviesFromMovieverse | undefined) => void
}>;


export type TMovieDetail = Movie & {
    revenue: number,
    budget: number,
    runtime: number,
    release_date: string,
    genres: { id: number, name: string }[]
}
