import {create} from 'zustand';
import { TPerson } from '~/types/people';

type State = {
  peopleFromTmdb: TPerson[];
  setPeopleFromTmdb: (people: TPerson[]) => void;
}

export const usePeopleStore = create<State>((set) => ({
  peopleFromTmdb: [],
  setPeopleFromTmdb: (people) => set({ peopleFromTmdb: people }),
}));