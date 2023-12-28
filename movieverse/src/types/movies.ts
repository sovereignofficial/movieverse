
export type TMovie = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[] | string [];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;}





export type TMovieDetail = TMovie & {
    revenue: number,
    budget: number,
    runtime: number,
    release_date: string,
    genres: { id: number, name: string }[]
}
