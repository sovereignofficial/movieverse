
export type User = {
    id?:number,
    fullName:string,
    email:string,
    age:number,
    favoriteMovies: number[],
    favoriteGenres: number[]
}

export type RegisterUser = Omit<User,"favoriteMovies" | "favoriteGenres"> & {password:string}