import { memo } from "react";
import { IoHeartOutline, IoHeart } from "react-icons/io5";

export const FavoriteButton: React.FC<{
  onClick: () => void;
  disabled: boolean;
  isFavorited: boolean;
}> = memo(({ onClick, disabled, isFavorited }) => {
  return (
    <button name="favorite" disabled={disabled} onClick={onClick}>
      {isFavorited ? (
        <IoHeart style={{ color: "red" }} size={20} />
      ) : (
        <IoHeartOutline size={20} />
      )}
    </button>
  );
});
