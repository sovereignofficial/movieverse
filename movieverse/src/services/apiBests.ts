import { TMovie, TMovieDetail } from "~/types/movies";
import { TPerson } from "~/types/people";
import { TvShow } from "~/types/tvshow";
import { supabaseClient } from "./supabase";

export const pickBest = async (item: TMovie | TPerson | TvShow | TMovieDetail, userId: string) => {
    const { data: userFavorites, error } = await supabaseClient
        .from('user_favorites')
        .select('bests')
        .eq('user', userId)

    if (error) throw new Error(error.message);

    const bests = userFavorites[0].bests
    bests.push(item);

    const { error: updateError } = await supabaseClient
        .from('user_favorites')
        .update({ bests })
        .eq('user', userId);

    if (updateError) throw new Error(updateError.message);
};

export const getBests = async (userId:string) => {
    const {data,error} = await supabaseClient
    .from('user_favorites')
    .select('bests')
    .eq('user',userId);

    if(error) throw new Error(error.message);
    
    return data && data[0].bests.reverse().splice(0,3);
}