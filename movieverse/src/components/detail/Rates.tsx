import { FavoriteButton } from "../buttons/FavoriteButton";
import { FaStar } from "react-icons/fa";

export const Rates: React.FC<{
  favorites: number;
  vote_average: number;
  handleFav : ()=>void,
  favorited:boolean,
}> = ({ favorites, vote_average,handleFav,favorited }) => {

  return (
    <div className="flex justify-between items-center ">
      <div className="flex gap-2 items-center">
        {(
          <FavoriteButton
            isFavorited={favorited}
            onClick={handleFav}
            disabled={false}
          />
        )}
        <p>{favorites} users favorited.</p>
      </div>
      <div className="flex justify-end items-center gap-2">
        <p className="text-lg font-medium mt-1">{vote_average.toFixed(1)}</p>
        <FaStar style={{ color: "yellow" }} size={24} />
      </div>
    </div>
  );
};
