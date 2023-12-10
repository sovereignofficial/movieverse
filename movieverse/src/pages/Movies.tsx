import { MoviesMedia } from "~/components/MoviesMedia";
import { useUsers } from "~/hooks/useUsers";

export const Movies = () => {
  const {user} = useUsers();
  return (
    <div className="page">
      <MoviesMedia user={user}/>
    </div>
  );
};
