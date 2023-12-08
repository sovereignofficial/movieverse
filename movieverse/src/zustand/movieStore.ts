import { create } from "zustand"
import { Movie } from "~/types/movies"

const MIN_PAGE=1;

type MovieStore = {
    page:number,
    movies:Movie[],
    currentFilter:string | number,
    setMovies:(movies:Movie[])=>void,
    resetMovies:()=>void,
    setFilter:(filter:string | number) => void,
    incrementPage:() => void,
    resetPages:()=> void,
}

export const useMovieStore = create<MovieStore>((set)=>({
    page:MIN_PAGE,
    movies:[],
    currentFilter:"popular",
    setMovies:(newMovies)=>set((state)=>({movies:[...state.movies,...newMovies]})),
    resetMovies:()=>set(()=>({movies:[]})),
    setFilter:(filter)=>set(()=>({currentFilter:filter})),
    incrementPage:() => set((state)=>({page:state.page + 1})),
    resetPages:()=>set(()=>({page:MIN_PAGE}))
}))