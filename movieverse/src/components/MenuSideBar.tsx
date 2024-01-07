import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { isNumber } from "~/utils/helpers";
import { useMovieStore } from "~/zustand/movieStore";
import { genres } from "~/app.config";

export const MenuSideBar:React.FC<{onFilter?:()=>void}> = ({onFilter}) => {
  const { setFilter, currentFilter, resetPages, resetMovies } = useMovieStore();
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
  }, [searchParams, setFilter, resetPages, resetMovies]);

  return (
    <ul className="space-y-2">
      <h2 className="mb-8">Genres</h2>
      {genres.map((genre, index) => (
        <li key={index}>
          <button
            onClick={() => {
              onFilter && onFilter();
              navigate(`?f=${genre.id}`)
            }}
            className={`w-full px-4 py-2 hover:bg-gray-900 animation-slow text-lg font-medium ${
              genre.id === currentFilter && "text-red-500 "
            }`}
          >
            {genre.name}
          </button>
        </li>
      ))}
    </ul>
  );
};
