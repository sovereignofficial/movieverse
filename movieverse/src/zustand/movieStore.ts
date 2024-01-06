import { create } from "zustand"
import { TMovie } from "~/types/movies"

const MIN_PAGE=1;

type TMovieStore = {
    page:number,
    moviesFromTmdb:TMovie[],
    currentFilter:string | number,
    setMovies:(movies:TMovie[])=>void,
    resetMovies:()=>void,
    setFilter:(filter:string | number) => void,
    incrementPage:() => void,
    resetPages:()=> void,
}

export const useMovieStore = create<TMovieStore>((set)=>({
    page:MIN_PAGE,
    moviesFromTmdb:[],
    currentFilter:"popular",
    setMovies:(newMovies)=>set(()=>({moviesFromTmdb:newMovies})),
    resetMovies:()=>set(()=>({moviesFromTmdb:[]})),
    setFilter:(filter)=>set(()=>({currentFilter:filter})),
    incrementPage:() => set((state)=>({page:state.page + 1})),
    resetPages:()=>set(()=>({page:MIN_PAGE})),
}))