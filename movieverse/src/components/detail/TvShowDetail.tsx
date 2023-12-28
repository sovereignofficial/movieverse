import { TvShow } from "~/types/tvshow";
import { getTvShowImageUrl, isFavorited } from "~/utils/helpers";
import { useFavorite } from "~/hooks/useFavorite";
import { useUsersStore } from "~/zustand/usersStore";
import { Extra } from "./Extra";
import { MediaDetail } from "./MediaDetail";
import { ExtraInfoItem } from "./ExtraInfoItem";
import { useEffect } from "react";

export const TvShowDetail: React.FC<{ tvShow: TvShow }> = ({ tvShow }) => {
  const { handleFavTvShow,getFavoritesCount,favCount } = useFavorite();
  const { favoriteTvShows } = useUsersStore();
  const favorited =
    (favoriteTvShows && tvShow && isFavorited(favoriteTvShows, tvShow)) ||
    false;

    useEffect(()=>{
      getFavoritesCount({itemId:tvShow.id,itemType:"favoriteTvShows"})
    },[getFavoritesCount,tvShow.id])

  return (
    <MediaDetail
      media={tvShow}
      detailImage={{
        imgUrl: getTvShowImageUrl(tvShow.poster_path),
        alt: `${tvShow.name} poster`,
      }}
      renderInfo={() => (
        <>
          <h5>{tvShow.genres?.map((item) => item?.name).join(", ")}</h5>
          <p>{tvShow.overview}</p>
          <Extra>
            <ExtraInfoItem>{tvShow.seasons.length} seasons</ExtraInfoItem>
            <ExtraInfoItem>{tvShow.number_of_episodes} episodes</ExtraInfoItem>
            <ExtraInfoItem>Released on {tvShow.first_air_date}</ExtraInfoItem>
          </Extra>
        </>
      )}
      handleFav={() => handleFavTvShow(tvShow)}
      favorited={favorited}
      favorites={favCount}
    />
  );
};
