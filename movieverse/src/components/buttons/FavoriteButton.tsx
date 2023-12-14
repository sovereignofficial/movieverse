import { IoHeartOutline, IoHeart } from "react-icons/io5";


export const FavoriteButton:React.FC<{
  onClick:()=>void,
  disabled:boolean,
  isFavorited:boolean
}> = ({
  onClick,
  disabled,
  isFavorited
}) => {
  
  return (
    <button disabled={disabled} onClick={onClick}>
      {isFavorited ? (
        <IoHeart style={{ color: "red" }} size={20} />
      ) : (
        <IoHeartOutline size={20} />
      )}
    </button>
  );
};
