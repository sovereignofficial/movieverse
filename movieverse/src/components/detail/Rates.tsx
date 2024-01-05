import { FavoriteButton } from "../buttons/FavoriteButton";
import { FaStar } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";

export const Rates: React.FC<{
  pickBest?: () => void | undefined;
  isBest?: boolean | undefined;
  favorites: number;
  vote_average: number;
  handleFav: () => void;
  favorited: boolean;
}> = ({ favorites, vote_average, handleFav, favorited, isBest, pickBest }) => {
  return (
    <div className="flex justify-between items-center ">
      <div className="flex gap-2 items-center">
        {
          <FavoriteButton
            isFavorited={favorited}
            onClick={handleFav}
            disabled={false}
          />
        }
        <p>{favorites} users favorited.</p>
      </div>
      {pickBest && typeof isBest !== 'undefined' && (
        <button onClick={pickBest}>
          {isBest ? (
            <div className="flex gap-2 items-center">
              <IoIosAddCircle size={20} style={{ color: "red" }} />{" "}
              <span>Added to your top pick.</span>
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <IoIosAddCircleOutline size={20} style={{ color: "red" }} />
              <span>Add to your top pick.</span>
            </div>
          )}
        </button>
      )}

      <div className="flex justify-end items-center gap-2">
        <p className="text-lg font-medium mt-1">{vote_average.toFixed(1)}</p>
        <FaStar style={{ color: "yellow" }} size={24} />
      </div>
    </div>
  );
};
