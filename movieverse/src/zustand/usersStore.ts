import { create } from 'zustand';
import { User } from '~/types/users';

type TUsersStore = {
    user:User,
    setUser:(user:User)=> void,
}
export const useUsersStore = create<TUsersStore>((set)=>({
    user:{
        fullName:'',
        email:'',
        age:0,
        favoriteMovies:[],
        favoriteGenres:[]
    },
    setUser:(user)=> set(()=>({user})),
}))