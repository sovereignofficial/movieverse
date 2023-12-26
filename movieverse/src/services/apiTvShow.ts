import { apiKey, getTvShowApiUrl, options} from "~/utils/helpers";
import {TvShow} from "~/types/tvshow";

// export const getPopularTVShows = async (page: number) => {
//     console.log(`Fetching the page:${page}`);

//     const data = await fetch(popularTVShowUrl(page,apiKey), options)
//         .then(res => res.json())
//         .catch(err => console.error(`tmdb error:${err}`));

//     return data.results as TvShow[];
// }

// export const getTrendingTVShows = async (page: number) => {
//     const data = await fetch(trendingTVShowUrl(page,apiKey), options)
//         .then(res => res.json())
//         .catch(err => console.error(`tmdb error:${err}`));

//     return data.results as TvShow[];
// }

// export const getGenreTVShows = async (genreId: number, page: number) => {
//     const data = await fetch(genreBasedTVShowSearchUrl(genreId, page,apiKey), options)
//         .then(res => res.json())
//         .catch(err => console.error(`tmdb error:${err}`));

//     return data.results as TvShow[];
// }

export const getTVShow = async (tvShowId: string) => {
    const data = await fetch(getTvShowApiUrl(tvShowId,apiKey), options)
        .then(res => res.json())
        .catch(err => console.error(err));


    return data.results as TvShow;
}