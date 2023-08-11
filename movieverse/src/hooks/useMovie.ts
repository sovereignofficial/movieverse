import { useEffect, useState } from "react"
import { Movie } from "../App"
import { searchRequest } from "../utils/data";

export const useMovie = () => {
    const [movies,setMovies] = useState<Movie[] | null>();
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(false);

    const handleMovies = async (query:string) =>{
        setIsLoading(true);
        try{
           const data = await searchRequest(query)
           setMovies(data);
        }catch(err){
            setIsLoading(false);
            setError(true);
            console.error(err);
        }
    }

    useEffect(()=>{
        handleMovies('godfather');
    },[])
    return {
        movies,
        isLoading,
        error,
        handleMovies
    }
}