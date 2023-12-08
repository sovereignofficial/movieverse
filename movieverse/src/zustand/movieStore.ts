import { create } from "zustand"
import { Movie } from "~/types/movies"

type MovieStore = {
    movies:Movie[],
    currentFilter:string | number,
    setMovies:(movies:Movie[])=>void,
    setFilter:(filter:string | number) => void
}

export const useMovieStore = create<MovieStore>((set)=>({
    movies:[],
    currentFilter:"popular",
    setMovies:(movies)=>set(()=>({movies})),
    setFilter:(filter)=>set(()=>({currentFilter:filter}))
}))