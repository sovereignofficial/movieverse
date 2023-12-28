import { create } from 'zustand';
import { TMovie } from '~/types/movies';
import { TPerson } from '~/types/people';
import { TvShow } from '~/types/tvshow';

type TUsersStore = {
    userId:string,
    imageUrl:string | null,
    fullName:string,
    email:string,
    age:number,
    gender:number,
    favoriteMovies:TMovie[]| null,
    favoritePeople:TPerson[] | null,
    favoriteTvShows:TvShow[] | null,
    setUserInfo: (info: Partial<TUsersStore>) => void,
    addFavoriteMovie: (movie: TMovie) => void,
    removeFavoriteMovie: (movieId: number) => void,
    addFavoriteTvShow: (tvShow: TvShow) => void,
    removeFavoriteTvShow: (tvShowId: number) => void,
    addFavoritePerson: (person: TPerson) => void,
    removeFavoritePerson: (personId: number) => void,
}
export const useUsersStore = create<TUsersStore>((set) => ({
    userId:'',
    imageUrl: null,
    fullName: '',
    email: '',
    age: 0,
    gender: 0,
    favoriteMovies: null,
    favoritePeople: null,
    favoriteTvShows: null,
    setUserInfo: (info) => set(state => ({ ...state, ...info })),
    addFavoriteMovie: (movie) => set(state => ({ ...state, favoriteMovies: [...(state.favoriteMovies || []), movie] })),
    removeFavoriteMovie: (movieId) => set(state => ({ ...state, favoriteMovies: state.favoriteMovies?.filter(movie => movie.id !== movieId) || null })),
    addFavoriteTvShow: (tvShow) => set(state => ({ ...state, favoriteTvShows: [...(state.favoriteTvShows || []), tvShow] })),
    removeFavoriteTvShow: (tvShowId) => set(state => ({ ...state, favoriteTvShows: state.favoriteTvShows?.filter(tvShow => tvShow.id !== tvShowId) || null })),
    addFavoritePerson: (person) => set(state => ({ ...state, favoritePeople: [...(state.favoritePeople || []), person] })),
    removeFavoritePerson: (personId) => set(state => ({ ...state, favoritePeople: state.favoritePeople?.filter(person => person.id !== personId) || null })),
}));