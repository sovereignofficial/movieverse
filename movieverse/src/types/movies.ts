
export type Movie = {
    id:number,
    adult:boolean,
    genre_ids:number[],
    original_language:string,
    original_title:string,
    overview:string,
    popularity:number,
    poster_path:string,    
    title:string,
    vote_average:number,
    vote_count:number,
}

export type MoviesFromMovieverse = {
    id:number,
    movieId:number,
    adult:boolean,
    genre_ids:number[],
    original_language:string,
    overview:string,
    popularity:number,
    poster_path:string,    
    title:string,
    vote_average:number,
    vote_count:number,
    favorited_from:number[],
}