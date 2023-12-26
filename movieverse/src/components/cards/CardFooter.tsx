import { FavoriteButton } from "~/components/buttons/FavoriteButton";

interface CardFooterProps {
  isLoading: boolean;
  isFavorited: boolean;
  onClickFavorite: () => void;
  onClickDetails: () => void;
}

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