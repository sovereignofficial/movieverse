import {create} from 'zustand';
import { TvShow } from '~/types/tvshow';

// Define the shape of the state
interface State {
  tvShowsFromDb: TvShow[];
  tvShowsFromTmdb: TvShow[];
  currentTvShow: TvShow | null;
  favorites: TvShow[];
  setTvShowsFromDb: (tvShows: TvShow[]) => void;
  setTvShowsFromTmdb: (tvShows: TvShow[]) => void;
  setCurrentTvShow: (tvShow: TvShow) => void;
  addFavorite: (tvShow: TvShow) => void;
  removeFavorite: (tvShow: TvShow) => void;
}

// Create the store
export const useTvShowStore = create<State>((set) => ({
  tvShowsFromDb: [],
  tvShowsFromTmdb: [],
  currentTvShow: null,
  favorites: [],
  setTvShowsFromDb: (tvShows) => set({ tvShowsFromDb: tvShows }),
  setTvShowsFromTmdb: (tvShows) => set({ tvShowsFromTmdb: tvShows }),
  setCurrentTvShow: (tvShow) => set({ currentTvShow: tvShow }),
  addFavorite: (tvShow) => set((state) => ({ favorites: [...state.favorites, tvShow] })),
  removeFavorite: (tvShow) => set((state) => ({ favorites: state.favorites.filter(favorite => favorite.id !== tvShow.id) })),
}));