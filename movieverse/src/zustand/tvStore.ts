import {create} from 'zustand';
import { TvShow } from '~/types/tvshow';

// Define the shape of the state
interface State {
  tvShowsFromTmdb: TvShow[];
  setTvShowsFromTmdb: (tvShows: TvShow[]) => void;
}

// Create the store
export const useTvShowStore = create<State>((set) => ({
  tvShowsFromTmdb: [],
  setTvShowsFromTmdb: (tvShows) => set({ tvShowsFromTmdb: tvShows }),
}));