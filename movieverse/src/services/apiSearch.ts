import { Movie } from '~/types/movies';
import { TPerson } from '~/types/people';
import { TvShow } from '~/types/tv';
import { options,apiKey, getMovieSearchUrl,getTvShowSearchUrl,getPeopleSearchUrl} from '~/utils/helpers';

export const searchForMovies = async (query:string) =>{
    const {results} = await fetch(getMovieSearchUrl(query,apiKey),options)
    .then(res=>res.json())
    .catch(err=>console.error(err))

    return results as Movie[]
}

export const searchForPeople = async (query:string) =>{
    const {results} = await fetch(getPeopleSearchUrl(query,apiKey),options)
    .then(res=>res.json())
    .catch(err=>console.error(err))


    return results as TPerson[]
}

export const searchForTvShows = async (query:string) =>{
    const {results} = await fetch(getTvShowSearchUrl(query,apiKey),options)
    .then(res=>res.json())
    .catch(err=>console.error(err))

    console.log(results);

    return results as TvShow[]
}