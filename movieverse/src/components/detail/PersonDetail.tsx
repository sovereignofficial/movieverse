import { TPerson } from "~/types/people";
import { DetailImage } from "../images/DetailImage";
import { getPersonImageUrl, isFavorited } from "~/utils/helpers";
import { useFavorite } from "~/hooks/useFavorite";
import { useUsersStore } from "~/zustand/usersStore";
import { FavoriteButton } from "../buttons/FavoriteButton";
import { useEffect} from "react";

export const PersonDetail: React.FC<{ person: TPerson }> = ({ person }) => {
  const { handleFavPerson,getFavoritesCount, favCount } = useFavorite();
  const { favoritePeople } = useUsersStore();
  const favorited =
    (favoritePeople && person && isFavorited(favoritePeople, person)) || false;

  useEffect(()=>{
    getFavoritesCount({itemId:person.id,itemType:"favoritePeople"})
  },[getFavoritesCount,person.id])
  
  return (
    <div className="grid grid-cols-12 gap-2 page-body ">
      <div className="col-span-3">
        <DetailImage
          imgUrl={getPersonImageUrl(person.profile_path)}
          alt={person.name}
        />
      </div>
      <div className="col-span-9 space-y-3 p-5 h-full w-full bg-gray-900 rounded-xl flex flex-col justify-between">
        <h2>Biography</h2>
        <p>Birth Date: {person.gender}</p>
        <p>Nationality: {person.known_for_department}</p>
        <div className="flex gap-2 items-center">
          {
            <FavoriteButton
              isFavorited={favorited}
              onClick={() => handleFavPerson(person)}
              disabled={false}
            />
          }
          <p>{favCount} users favorited.</p>
        </div>
      </div>
    </div>
  );
};
