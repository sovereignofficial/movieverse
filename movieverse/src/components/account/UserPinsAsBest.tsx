import React from "react";
import { ImageLink } from "../images/ImageLink";
import { TMovie, TMovieDetail } from "~/types/movies";

export const UserPinsAsBest:React.FC<{bests:TMovie[] | TMovieDetail[]}> = ({bests}) => {


  return (
    <div className="bg-zinc-900 p-5 w-full rounded-xl space-y-4 ">
      <h3>Top Picks</h3>
      <ul className="w-full flex flex-col items-center gap-2">
        {bests?.map((bestMovie, key:number) => (
          <li key={key}>
            <ImageLink
              title={bestMovie.title}
              overwiew=""
              imgUrl={bestMovie.poster_path}
              movieId={bestMovie.id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
