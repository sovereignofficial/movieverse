import { MoviesFromMovieverse } from "~/types/movies";
import { User } from "~/types/users";

const isNumber = (text:string)=>{
    const isNum = !isNaN(parseInt(text));
    return isNum
}

const isFavorited = (title:string,user:User,moviesFromDb:MoviesFromMovieverse[]) => {
    return moviesFromDb.some(movie=>movie.title === title && movie.favorited_from.includes(user.id!)); 
}

export {isNumber,isFavorited}