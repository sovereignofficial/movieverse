import React from "react";
import { ImageLink } from "../images/ImageLink";
import { TMovie, TMovieDetail } from "~/types/movies";
import { DataNotFound } from "../DataNotFound";

export const UserTopPicks:React.FC<{bests:TMovie[] | TMovieDetail[]}> = ({bests}) => {


  return (
    <div className="bg-gray-900 p-5 w-full rounded-xl space-y-4 ">
      <h3>Top Picks</h3>
      <ul className="w-full flex flex-col items-center gap-2">
        {bests && bests.length > 0 ? bests.map((bestMovie, key:number) => (
          <li className="w-full mx-auto" key={key}>
            <ImageLink
              title={bestMovie.title}
              overwiew=""
              imgUrl={bestMovie.poster_path}
              movieId={bestMovie.id}
            />
          </li>
        )) : (<DataNotFound message="User haven't picked any top movie yet."/>)}
      </ul>
    </div>
  );
};
