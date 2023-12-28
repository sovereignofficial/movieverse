import React from 'react'
import { TvShow } from '~/types/tvshow'
import { Card } from './Card'
import { getTvShowImageUrl, isFavorited } from '~/utils/helpers'
import { useNavigate } from 'react-router-dom';
import { useUsersStore } from '~/zustand/usersStore';

export const TvCards: React.FC<{
  tv_shows: TvShow[];
  handleFav: (tvShow: TvShow) => void;
}> = ({ tv_shows, handleFav }) => {
  const navigate = useNavigate();
  const {favoriteTvShows} = useUsersStore();

  return (
    <>
      {tv_shows.map((tv_show, key) => {
        const favorited = isFavorited(favoriteTvShows!,tv_show);
        const onClickFavorite = () => handleFav(tv_show);
        const onClickDetails = () => {navigate(`/tv?t=${tv_show.id}`)};

        return (
          <Card key={key}>
            <Card.CardHeader
              title={tv_show.original_name}
              imgAddress={getTvShowImageUrl(tv_show.poster_path ?? tv_show.backdrop_path ?? "")}
            />
            <Card.CardBody title={tv_show.original_name} overview={tv_show.overview}/>
            <Card.CardFooter 
              isLoading={false} 
              isFavorited={favorited} 
              onClickFavorite={onClickFavorite} 
              onClickDetails={onClickDetails} 
            />
          </Card>
        );
      })}
    </>
  )
};