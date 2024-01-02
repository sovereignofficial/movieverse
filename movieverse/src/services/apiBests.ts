import { TMovie, TMovieDetail } from "~/types/movies";
import { supabaseClient } from "./supabase";

export const pickBest = async (item: TMovie | TMovieDetail, userId: string) => {
    const { data: userFavorites, error } = await supabaseClient
        .from('user_favorites')
        .select('bests')
        .eq('user', userId)

    if (error) throw new Error(error.message);

    const bests = userFavorites[0].bests
    if(bests.length > 3) throw new Error("You can't add more than 3 movies. Update your account to premium.");

    if (bests.some((best: TMovie | TMovieDetail) => best?.id === item.id)) {
        return item
    } else {
        bests.push(item);

        const { error: updateError } = await supabaseClient
            .from('user_favorites')
            .update({ bests })
            .eq('user', userId);
        if (updateError) throw new Error(updateError.message);
        return item
    }

};

export const removeFromBests = async (userId: string, itemId: number) => {
    const { data, error: getBestsError } = await supabaseClient
        .from('user_favorites')
        .select('bests')
        .eq('user', userId);

    if (getBestsError) throw new Error(getBestsError.message);
    const updatedBests = data[0].bests.filter((item: TMovie) => item.id !== itemId)
    const { error: updateError } = await supabaseClient
        .from('user_favorites')
        .update({
            bests: updatedBests
        })
        .eq("user", userId)

    if (updateError) throw new Error(updateError.message);
    return itemId
}

export const getBests = async (userId: string) => {
    const { data, error } = await supabaseClient
        .from('user_favorites')
        .select('bests')
        .eq('user', userId);

    if (error) throw new Error(error.message);

    return data && data[0].bests.reverse().splice(0, 3);
}