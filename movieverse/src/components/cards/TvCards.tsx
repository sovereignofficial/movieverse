import React from 'react'
import { TvShow } from '~/types/tvshow'
import { Card } from './Card'
import { getTvShowImageUrl } from '~/utils/helpers'
import { useNavigate } from 'react-router-dom';

export const TvCards: React.FC<{
  tv_shows: TvShow[];
  isLoading: boolean;
  handleFav: (tvShow: TvShow) => void;
  tvShowsFromDb: TvShow[];
}> = ({ tv_shows, isLoading, handleFav, tvShowsFromDb }) => {
  const navigate = useNavigate();


  return (
    <>
      {tv_shows.map((tv_show, key) => {
        const isFavorited = tvShowsFromDb.some(dbTvShow => dbTvShow.id === tv_show.id);
        const onClickFavorite = () => handleFav(tv_show);
        const onClickDetails = () => {navigate(`/tv/${tv_show.id}`)};

        return (
          <Card key={key}>
            <Card.CardHeader
              title={tv_show.original_name}
              imgAddress={getTvShowImageUrl(tv_show.poster_path ?? tv_show.backdrop_path ?? "")}
            />
            <Card.CardBody title={tv_show.original_name} overview={tv_show.overview}/>
            <Card.CardFooter 
              isLoading={isLoading} 
              isFavorited={isFavorited} 
              onClickFavorite={onClickFavorite} 
              onClickDetails={onClickDetails} 
            />
          </Card>
        );
      })}
    </>
  )
};