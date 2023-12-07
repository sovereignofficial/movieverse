import { Movie } from "./movies"

export type User = {
    fullName:string,
    email:string,
    age:number,
    favoriteMovies: Movie[]
}

export type RegisterUser = Omit<User,"favoriteMovies"> & {password:string}