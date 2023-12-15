import { useEffect } from "react";
import { useUsers } from "~/hooks/useUsers"
import { getUserGenreMap, userSpecialMovieDistribution } from "~/utils/helpers";

export const Feed = () => {
  const {user} = useUsers();

  useEffect(()=>{
   const genremap = getUserGenreMap(user);
   const movies = userSpecialMovieDistribution(genremap);
    console.log(genremap,movies);
  },[user])

  return (
    <div className="page">
      <div className="page-header">
        <h1>For You</h1>
      </div>
    </div>
  )
}
