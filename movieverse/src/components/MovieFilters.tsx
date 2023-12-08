import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { genres } from "~/app.config";
import { isNumber } from "~/utils/helpers";
import { useMovieStore } from "~/zustand/movieStore";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useCarouselStore } from "~/zustand/components/carouselStore";

export const MovieFilters = () => {
  const { setFilter, currentFilter } = useMovieStore();
  const { location, slideLeft, slideRight } = useCarouselStore();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const filter = searchParams.get("f")!;
    if (isNumber(filter)) {
      setFilter(Number(filter));
    } else {
      setFilter(filter);
    }
  }, [searchParams, setFilter]);

  return (
    <div className="w-11/12 relative overflow-hidden overflow-x-scroll mx-auto my-5">
      <div className="absolute h-full w-full flex justify-between items-center ">
        <button
          onClick={slideLeft}
          className="z-50 w-10 h-10 bg-zinc-600/50 rounded-full  opacity-0 hover:opacity-100 grid place-items-center"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={slideRight}
          className="z-50 w-10 h-10 bg-zinc-600/50 rounded-full  opacity-0 hover:opacity-100 grid place-items-center"
        >
          <FaArrowRight />
        </button>
      </div>
      <div
        style={{
          transform: `translate(${location}rem)`,
        }}
        className={`grid grid-flow-col gap-1 animation-slow`}
      >
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
      </div>
    </div>
  );
};
