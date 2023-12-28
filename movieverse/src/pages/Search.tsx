import { SearchResultSection } from "~/components/SearchResultSection";
import { MovieCards } from "~/components/cards/MovieCards";
import { PeopleCards } from "~/components/cards/PeopleCards";
import { TvCards } from "~/components/cards/TvCards";
import { useFavorite } from "~/hooks/useFavorite";
import { useSearch } from "~/hooks/useSearch";

export const Search = () => {
  const {
    handleFavMovie,handleFavPerson,handleFavTvShow
  } = useFavorite();



  const { movieResults, tvResults, peopleResults, query } = useSearch();



  return (
    <div className="page">
      <div className="page-header">
        <h1>Results for "{query}"</h1>
      </div>
      <div className="page-body">
        {movieResults && movieResults?.length > 0 && (
          <SearchResultSection header="Movies">
            <MovieCards moviesFromTmdb={movieResults} handleFav={handleFavMovie} />
          </SearchResultSection>
        )}
        {tvResults && tvResults.length > 0 && (
          <SearchResultSection header="Tv Shows">
            <TvCards handleFav={handleFavTvShow} tv_shows={tvResults} />
          </SearchResultSection>
        )}
        {peopleResults && peopleResults.length > 0 && (
          <SearchResultSection header="People">
            <PeopleCards handleFav={handleFavPerson} people={peopleResults} />
          </SearchResultSection>
        )}
      </div>
    </div>
  );
};
