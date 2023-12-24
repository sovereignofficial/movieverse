import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "react-router-dom";
import {searchForMovies,searchForPeople,searchForTvShows} from '~/services/apiSearch';

export const useSearch = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') ?? "";
    
    const {data:movieResults} = useQuery({
        queryKey:['query-movies',query],
        queryFn:()=>searchForMovies(query)
    });
    const {data:peopleResults} = useQuery({
        queryKey:['query-people',query],
        queryFn:()=>searchForPeople(query)
    });
    const {data:tvResults} = useQuery({
        queryKey:['query-tv',query],
        queryFn:()=>searchForTvShows(query)
    });

    return {movieResults,peopleResults,tvResults,query}
}