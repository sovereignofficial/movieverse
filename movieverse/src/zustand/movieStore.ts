import { create } from "zustand"
import { Movie, MoviesFromMovieverse } from "~/types/movies"

const MIN_PAGE=1;

type TMovieStore = {
    page:number,
    movies:Movie[],
    favoriteMovies:MoviesFromMovieverse[],
    currentFilter:string | number,
    setMovies:(movies:Movie[])=>void,
    resetMovies:()=>void,
    setFilter:(filter:string | number) => void,
    incrementPage:() => void,
    resetPages:()=> void,
    setFavoriteMovies:(movies:MoviesFromMovieverse[])=>void,
    setUnfavoriteMovie:(movie:MoviesFromMovieverse)=>void,
}

export const useMovieStore = create<TMovieStore>((set)=>({
    page:MIN_PAGE,
    movies:[],
    favoriteMovies:[],
    currentFilter:"popular",
    setFavoriteMovies:(newFavoriteMovies)=>set(state=>({favoriteMovies:[...state.favoriteMovies,...newFavoriteMovies]})),
    setUnfavoriteMovie:(movie)=>set((state)=>({favoriteMovies:state.favoriteMovies.filter(favMovie=> favMovie.id !== movie.id)})),
    setMovies:(newMovies)=>set((state)=>({movies:[...state.movies,...newMovies]})),
    resetMovies:()=>set(()=>({movies:[]})),
    setFilter:(filter)=>set(()=>({currentFilter:filter})),
    incrementPage:() => set((state)=>({page:state.page + 1})),
    resetPages:()=>set(()=>({page:MIN_PAGE}))
}))