import {create} from 'zustand';
import { TPerson } from '~/types/people';

// Define the shape of the state
type State = {
  peopleFromDb: TPerson[];
  peopleFromTmdb: TPerson[];
  currentPerson: TPerson | null;
  favorites: TPerson[];
  setPeopleFromDb: (people: TPerson[]) => void;
  setPeopleFromTmdb: (people: TPerson[]) => void;
  setCurrentPerson: (person: TPerson) => void;
  addFavorite: (person: TPerson) => void;
  removeFavorite: (person: TPerson) => void;
}

// Create the store
export const usePeopleStore = create<State>((set) => ({
  peopleFromDb: [],
  peopleFromTmdb: [],
  currentPerson: null,
  favorites: [],
  setPeopleFromDb: (people) => set({ peopleFromDb: people }),
  setPeopleFromTmdb: (people) => set({ peopleFromTmdb: people }),
  setCurrentPerson: (person) => set({ currentPerson: person }),
  addFavorite: (person) => set((state) => ({ favorites: [...state.favorites, person] })),
  removeFavorite: (person) => set((state) => ({ favorites: state.favorites.filter(favorite => favorite.id !== person.id) })),
}));