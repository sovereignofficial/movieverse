import { create } from 'zustand';
import { User } from '~/types/users';

type UsersStore = {
    user:User,
    setUser:(user:User)=> void,
}
export const useUsersStore = create<UsersStore>((set)=>({
    user:{
        fullName:'',
        email:'',
        age:0,
        favoriteMovies:[]
    },
    setUser:(user)=> set(()=>({user})),
}))