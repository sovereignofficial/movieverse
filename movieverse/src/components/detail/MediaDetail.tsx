import { TMovie } from "~/types/movies";
import { Rates } from "./Rates";
import { TvShow } from "~/types/tvshow";
import { DetailImage } from "../images/DetailImage";
import { TPerson } from "~/types/people";
import { StaggerContainer } from "../StaggerContainer";
import { motion } from "framer-motion";

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
  const childVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };
  return (
    <StaggerContainer className="md:grid grid-cols-12 gap-2 page-body ">
      <motion.div className="col-span-3" variants={childVariants}>
        <DetailImage {...detailImage} />
      </motion.div>
      <motion.div
        className="col-span-9 space-y-3 p-5 h-full w-full bg-gray-900 rounded-xl flex flex-col justify-between"
        variants={childVariants}
      >
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
      </motion.div>
    </StaggerContainer>
  );
};
