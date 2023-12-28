import { apiKey, getTvShowApiUrl, options } from "~/utils/helpers";
import { TvShow } from "~/types/tvshow";
import { supabaseClient } from "./supabase";

export const getTVShow = async (tvShowId: string) => {
    const data = await fetch(getTvShowApiUrl(tvShowId, apiKey), options)
        .then(res => res.json())
        .catch(err => console.error(err));

    console.log(data);

    return data as TvShow;
}


export const getTVShowFromDb = async (tvShowId: number): Promise<TvShow> => {
    const { data, error } = await supabaseClient
        .from('tvshows')
        .select('*')
        .eq('id', tvShowId)

    if (error) throw new Error(error.message);

    return data[0] as TvShow
}

export const getTvShowTrailer = async (tvShowId: string) => {
    const data = await fetch(`https://api.themoviedb.org/3/tv/${tvShowId}/videos?api_key=${apiKey}`, options)
        .then(res => res.json())
        .catch(err => console.error(err));
    const videoKey = data.results[0].key
    const videoUrl = `https://www.youtube.com/watch?v=${videoKey}`
    return { videoKey, videoUrl }
}