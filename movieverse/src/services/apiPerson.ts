import { apiKey, options } from "~/utils/helpers";
import {TPerson} from '~/types/people';


export const getPerson = async (personId: string) => {
    const data = await fetch(`https://api.themoviedb.org/3/person/${personId}?api_key=${apiKey}`, options)
        .then(res => res.json())
        .catch(err => console.error(err));

    return data as TPerson;
}