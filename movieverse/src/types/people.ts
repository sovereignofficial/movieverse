export type TPerson ={
    "adult": boolean,
    "gender": number,
    "id": number,
    "known_for_department":string,
    "name": string,
    "original_name": string,
    "popularity": number,
    "profile_path": string,
    "known_for": TKnownFor[]
}

export type TKnownFor ={
    "adult": boolean,
    "backdrop_path": string | null,
    "id": number,
    "title": string,
    "original_language": string,
    "original_title": string,
    "overview": string,
    "poster_path": null,
    "media_type": "movie" | "tv",
    "genre_ids": number[],
    "popularity": number,
    "release_date": string,
    "video": boolean,
    "vote_average": number,
    "vote_count": number
}