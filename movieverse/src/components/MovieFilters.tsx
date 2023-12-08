import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { isNumber } from "~/utils/helpers";
import { useMovieStore } from "~/zustand/movieStore";
import { Carousel } from "./carousel/Carousel";
import { genres } from "~/app.config";

export const MovieFilters = () => {
  const { setFilter, currentFilter,resetPages,resetMovies } = useMovieStore();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const filter = searchParams.get("f")!;
    resetMovies();
    resetPages();
    if (isNumber(filter)) {
      setFilter(Number(filter));
    } else if (typeof filter === "undefined" || filter === null) {
      setFilter("popular");
    } else {
      setFilter(filter);
    }
  }, [searchParams, setFilter,resetPages,resetMovies]);

  return (
    <Carousel>
      {genres.map((genre, index) => (
        <button
          key={index}
          onClick={() => navigate(`?f=${genre.id}`)}
          className={`btn-carousel ${
            genre.id === currentFilter && "bg-red-500 border-none"
          }`}
        >
          {genre.name}
        </button>
      ))}
    </Carousel>
  );
};
