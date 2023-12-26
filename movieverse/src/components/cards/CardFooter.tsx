import { FavoriteButton } from "~/components/buttons/FavoriteButton";
import { CardFooterProps } from "~/types/cards";


export const CardFooter: React.FC<CardFooterProps> = ({
  isLoading,
  isFavorited,
  onClickFavorite,
  onClickDetails,
}) => {
  return (
    <div className="grid grid-flow-col p-2 place-items-center">
      <FavoriteButton
        disabled={isLoading}
        isFavorited={isFavorited}
        onClick={onClickFavorite}
      />
      <button
        onClick={onClickDetails}
        className="btn-primary"
      >
        Details
      </button>
    </div>
  );
};