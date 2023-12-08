import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useCarouselStore } from "~/zustand/components/carouselStore";

export const CarouselNavigate = () => {
  const { slideLeft, slideRight } = useCarouselStore();

  return (
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
  );
};
