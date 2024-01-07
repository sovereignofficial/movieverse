import { FavoriteButton } from "~/components/buttons/FavoriteButton";
import { CardFooterProps } from "~/types/cards";
import { memo } from "react";

export const CardFooter: React.FC<CardFooterProps> = memo(
  ({ isLoading, isFavorited, onClickFavorite, onClickDetails }) => {
    return (
      <div className="grid grid-flow-col sm:p-1 lg:p-2 place-items-center">
        <FavoriteButton
          disabled={isLoading}
          isFavorited={isFavorited}
          onClick={onClickFavorite}
        />
        <button onClick={onClickDetails} className="btn-primary">
          Details
        </button>
      </div>
    );
  }
);
