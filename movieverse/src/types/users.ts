import { User } from "@supabase/supabase-js";
import { TMovie } from "./movies";
import { TPerson } from "./people";
import { TvShow } from "./tvshow";

export type UserFavorites = {
    user: User;
    favoriteMovies: TMovie[];
    favoritePeople: TPerson[];
    favoriteTVShows: TvShow[];
  };

export interface ISignIn{
    email:string,
    password:string
}

export interface ISignUp{
    email:string,
    password:string,
    age:number,
    gender:number,
    fullName:string
}

export type TCredentials ={fullName: string, age: number, gender: number}