import { Movie, MovieDetails } from "../App";

const apiKey = import.meta.env.VITE_API_KEY;

export const searchRequest = async (query: string) : Promise<Movie[]> => {
  const data = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=${apiKey}`)
  .then(res=>res.json())
  .then(data=>{return data})
  .catch(err=>console.log(err));
  return data?.Search || [] as Movie[];
}

export const defaultSearchRequest = async () : Promise<Movie[]> => {
  const data = await fetch(`http://www.omdbapi.com/?s="oppenheimer"&apikey=${apiKey}`)
    .then(res => res.json())
    .then(data=>{return data})
    .catch(err => console.log(err));
  return data?.Search! || [] as Movie[];
}

export const getMovieData = async (movieTitle: string): Promise<MovieDetails> => {
  try {
    const response = await fetch(`http://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`)
    .then(res=>res.json())
    .then(data=>{return data as MovieDetails})
    .catch(err=>console.log(err));
    return response as MovieDetails;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

declare global {
  interface ImportMeta {
    env: {
      VITE_API_KEY: string;
      // add any other environment variables you need here
    };
  }
}