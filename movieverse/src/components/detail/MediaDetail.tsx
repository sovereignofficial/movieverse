import { TMovie } from "~/types/movies";
import { Rates } from "./Rates";
import { TvShow } from "~/types/tvshow";
import { DetailImage } from "../images/DetailImage";
import { TPerson } from "~/types/people";

interface MediaDetailProps<T extends TMovie | TvShow | TPerson> {
  media: T;
  detailImage: { imgUrl: string; alt: string };
  renderInfo: () => JSX.Element;
  handleFav: () => void;
  favorited: boolean;
  favorites: number;
  pickBest?: () => void | undefined;
  isBest?: boolean | undefined;
}

export const MediaDetail: React.FC<MediaDetailProps<TMovie | TvShow>> = ({
  media,
  detailImage,
  renderInfo,
  handleFav,
  favorited,
  favorites,
  pickBest,
  isBest,
}) => {
  return (
    <div className="grid grid-cols-12 gap-2 page-body ">
      <div className="col-span-3">
        <DetailImage {...detailImage} />
      </div>
      <div className="col-span-9 space-y-3 p-5 h-full w-full bg-zinc-900 rounded-xl flex flex-col justify-between">
        <h2>Overview</h2>
        {renderInfo()}
        <Rates
          vote_average={media.vote_average}
          favorites={favorites}
          handleFav={handleFav}
          favorited={favorited}
          pickBest={pickBest}
          isBest={isBest}
        />
      </div>
    </div>
  );
};
