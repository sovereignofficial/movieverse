import { TMovie } from "~/types/movies";
import { supabaseClient } from "./supabase";
import { TvShow } from "~/types/tvshow";
import { TPerson } from "~/types/people";
import { findInDb, getMovieFromDb } from "./apiMovies";
import { getTVShowFromDb } from "./apiTvShow";
import { getPersonFromDb } from "./apiPerson";


export const getUserFavorites = async (userId: string) => {
  const { data: userFavorites, error } = await supabaseClient
    .from('user_favorites')
    .select('*')
    .eq('user', userId)

  if (error) throw new Error(error.message);

  const [favoriteMovies, favoriteTvShows, favoritePeople] = await Promise.all([
    getMoviesFromDb(userFavorites[0]?.favoriteMovies || []),
    getTVShowsFromDb(userFavorites[0]?.favoriteTvShows || []),
    getPeopleFromDb(userFavorites[0]?.favoritePeople || [])
  ]);

  return { favoriteMovies, favoriteTvShows, favoritePeople }
}

async function getMoviesFromDb(movieIds: number[]) {
  return Promise.all(movieIds.map(getMovieFromDb));
}

async function getTVShowsFromDb(tvShowIds: number[]) {
  return Promise.all(tvShowIds.map(getTVShowFromDb));
}

async function getPeopleFromDb(personIds: number[]) {
  return Promise.all(personIds.map(getPersonFromDb));
}

export const favMovie = async (movie: TMovie, userId: string) => {
  const filteredItem = { ...movie };
  if ('belongs_to_collection' in filteredItem) {
    delete filteredItem['belongs_to_collection'];
  }

  await findInDb(filteredItem, "movies");

  const { data, error } = await supabaseClient
    .from('user_favorites')
    .select('favoriteMovies')
    .eq('user', userId)

  if (error && error.message !== 'No rows returned') {
    throw new Error(error.message);
  }

  if (data && data.length > 0) {
    const updatedFavorites = data[0].favoriteMovies
      ? [...data[0].favoriteMovies, movie.id]
      : [movie.id];

    const { error: updateError } = await supabaseClient
      .from('user_favorites')
      .update({
        favoriteMovies: updatedFavorites,
      })
      .eq('user', userId);

    if (updateError) throw new Error(updateError.message);
  } else {
    const { error: insertError } = await supabaseClient
      .from('user_favorites')
      .insert({
        user: userId,
        favoriteMovies: [movie.id],
      });

    if (insertError) throw new Error(insertError.message);
  }
};

export const favTvShow = async (tvshow: TvShow, userId: string) => {
  await findInDb(tvshow, "tvshows");

  const { data, error } = await supabaseClient
    .from('user_favorites')
    .select('favoriteTvShows')
    .eq('user', userId)

  if (error && error.message !== 'No rows returned') {
    throw new Error(error.message);
  }

  if (data && data.length > 0) {
    const updatedFavorites = data[0].favoriteTvShows
      ? [...data[0].favoriteTvShows, tvshow.id]
      : [tvshow.id];

    const { error: updateError } = await supabaseClient
      .from('user_favorites')
      .update({
        favoriteTvShows: updatedFavorites,
      })
      .eq('user', userId);

    if (updateError) throw new Error(updateError.message);
  } else {
    const { error: insertError } = await supabaseClient
      .from('user_favorites')
      .insert({
        user: userId,
        favoriteTvShows: [tvshow.id],
      });

    if (insertError) throw new Error(insertError.message);
  }
};

export const favPerson = async (person: TPerson, userId: string) => {
  const filteredKnownFor = person.known_for?.map(item=> item?.id)

  await findInDb({...person,known_for:filteredKnownFor}, "people")
  const { data, error } = await supabaseClient
    .from('user_favorites')
    .select('favoritePeople')
    .eq('user', userId)

  if (error && error.message !== 'No rows returned') {
    throw new Error(error.message);
  }

  if (data && data.length > 0) {
    const updatedFavorites = data[0].favoritePeople
      ? [...data[0].favoritePeople, person.id]
      : [person.id];

    const { error: updateError } = await supabaseClient
      .from('user_favorites')
      .update({
        favoritePeople: updatedFavorites,
      })
      .eq('user', userId);

    if (updateError) throw new Error(updateError.message);
  }
};
export const unfavMovie = async (movie: TMovie, userId: string) => {
  const { data, error } = await supabaseClient
    .from('user_favorites')
    .select('favoriteMovies')
    .eq('user', userId)

  if (error) throw new Error(error.message);

  if (data) {
    const updatedFavorites = data[0].favoriteMovies.filter((id: number) => id !== movie.id);

    const { error: updateError } = await supabaseClient
      .from('user_favorites')
      .update({
        favoriteMovies: updatedFavorites,
      })
      .eq('user', userId);

    if (updateError) throw new Error(updateError.message);
  } else {
    throw new Error('User not found');
  }
};



export const unfavTvShow = async (tvshow: TvShow, userId: string) => {
  const { data, error } = await supabaseClient
    .from('user_favorites')
    .select('favoriteTvShows')
    .eq('user', userId)

  if (error) throw new Error(error.message);

  if (data && data.length > 0) {
    const updatedFavorites = data[0].favoriteTvShows.filter((id: number) => id !== tvshow.id);

    const { error: updateError } = await supabaseClient
      .from('user_favorites')
      .update({
        favoriteTvShows: updatedFavorites,
      })
      .eq('user', userId);

    if (updateError) throw new Error(updateError.message);
  } else {
    throw new Error('User not found');
  }
};



export const unfavPerson = async (person: TPerson, userId: string) => {
  const { data, error } = await supabaseClient
    .from('user_favorites')
    .select('favoritePeople')
    .eq('user', userId)

  if (error) throw new Error(error.message);

  if (data) {
    const updatedFavorites = data[0].favoritePeople.filter((id: number) => id !== person.id);

    const { error: updateError } = await supabaseClient
      .from('user_favorites')
      .update({
        favoritePeople: updatedFavorites,
      })
      .eq('user', userId);

    if (updateError) throw new Error(updateError.message);
  } else {
    throw new Error('User not found');
  }
};

export const calculateFavoritesCount = async (itemId: number, itemType: 'favoriteMovies' | 'favoriteTvShows' | 'favoritePeople') => {
  const { data: userFavorites, error } = await supabaseClient
    .from('user_favorites')
    .select(itemType);

  if (error) throw new Error(error.message);

  let count = 0;
  userFavorites.forEach((userFavorite: { [key: string]: number[] }) => {
    if (userFavorite[itemType as keyof typeof userFavorite].includes(itemId)) {
      count++;
    }
  });

  return count;
};



