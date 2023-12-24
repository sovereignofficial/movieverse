import { SearchResultSection } from "~/components/SearchResultSection";
import { MovieCards } from "~/components/cards/MovieCards";
import { PeopleCards } from "~/components/cards/PeopleCards";
import { TvCards } from "~/components/cards/TvCards";
import { useFavoriteMovies } from "~/hooks/useFavoriteMovies";
import { useSearch } from "~/hooks/useSearch";
import { useUsers } from "~/hooks/useUsers";

export const Search = () => {
  const {moviesFromDb, handleFav, isLoading} = useFavoriteMovies();
  const {user} = useUsers();
  const { movieResults, tvResults, peopleResults, query } = useSearch();


  return (
    <div className="page">
      <div className="page-header">
        <h1>Results for "{query}"</h1>
      </div>
      <div className="page-body">
        {movieResults && movieResults?.length > 0 && (
          <SearchResultSection header="Movies">
            <MovieCards
            moviesFromDb={moviesFromDb}
            moviesFromTmdb={movieResults}
            movie={movieResults[0]}
            user={user}
            handleFav={handleFav}
            isLoading={isLoading}
            />
             </SearchResultSection>
        )}
        {tvResults && tvResults.length > 0 && (
          <SearchResultSection header="Tv Shows">
            <TvCards tv_shows={tvResults} />
          </SearchResultSection>
        )}
        {peopleResults && peopleResults.length > 0 && (
          <SearchResultSection header="People">
            <PeopleCards people={peopleResults} />
          </SearchResultSection>
        )}
      </div>
    </div>
  );
};
