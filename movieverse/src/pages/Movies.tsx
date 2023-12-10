import { MoviesMedia } from "~/components/MoviesMedia";
import { useUsers } from "~/hooks/useUsers";

export const Movies = () => {
  const {user} = useUsers();
  return (
    <div className="p-4">
      <MoviesMedia user={user}/>
    </div>
  );
};
