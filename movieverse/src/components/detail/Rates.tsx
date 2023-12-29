import { FavoriteButton } from "../buttons/FavoriteButton";
import { FaStar } from "react-icons/fa";
import { BsLightningChargeFill, BsLightningCharge} from 'react-icons/bs'

export const Rates: React.FC<{
  pickBest?:()=>void,
  isBest?:boolean,
  favorites: number;
  vote_average: number;
  handleFav : ()=>void,
  favorited:boolean,
}> = ({ favorites, vote_average,handleFav,favorited,isBest,pickBest }) => {

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
        <button className="ml-10" onClick={pickBest}>{isBest ? <BsLightningChargeFill size={20} style={{color:'red'}}/> :<BsLightningCharge size={20} style={{color:'red'}} />}</button>
      </div>
      <div className="flex justify-end items-center gap-2">
        <p className="text-lg font-medium mt-1">{vote_average.toFixed(1)}</p>
        <FaStar style={{ color: "yellow" }} size={24} />
      </div>
    </div>
  );
};
