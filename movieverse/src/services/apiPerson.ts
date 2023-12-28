import { apiKey, options } from "~/utils/helpers";
import { TPerson } from '~/types/people';
import { supabaseClient } from "./supabase";


export const getPerson = async (personId: string) => {
    const data = await fetch(`https://api.themoviedb.org/3/person/${personId}?api_key=${apiKey}`, options)
        .then(res => res.json())
        .catch(err => console.error(err));

    return data as TPerson;
}

export const getPersonFromDb = async (personId: number): Promise<TPerson> => {
    const { data: person, error } = await supabaseClient
        .from('people')
        .select('*')
        .eq('id', personId)

    if (error) throw new Error(error.message);

    return person[0] as TPerson;
}