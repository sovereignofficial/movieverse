import { useEffect } from "react";
import { FeedSection } from "~/components/FeedSection";
import { useFeed } from "~/hooks/useFeed"

export const Feed = () => {
  const {mostlyLiked,top3genres,specialMoviesForUser} = useFeed();

  useEffect(()=>{
    console.log(mostlyLiked,top3genres,specialMoviesForUser);
  },[mostlyLiked,top3genres,specialMoviesForUser])

  return (
    <div className="page space-y-10">
      <div className="page-header">
        <h1>For You</h1>
      </div>
      <div className="page-body space-y-10 ">
          {mostlyLiked && <FeedSection header="Mostly Liked Movies" movies={mostlyLiked}/>}
          {top3genres && top3genres.map((item,key)=>(
            <FeedSection key={key} header={item.genreName!} movies={item.movies}/>
          ))}
          {specialMoviesForUser && <FeedSection header="Special For You" movies={specialMoviesForUser}/>}
      </div>
    </div>
  )
}
