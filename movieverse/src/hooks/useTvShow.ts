import { useQuery } from '@tanstack/react-query';
import { getTVShow, getTvShowTrailer } from '../services/apiTvShow';
import { useSearchParams } from 'react-router-dom';

export const useTVShow = () => {
   const [searchParams] = useSearchParams();
   const tvShowId = searchParams.get('t') ?? "";
   console.log(tvShowId)

   const { data: tvshow } = useQuery({
      queryKey: ['get-tv',tvShowId],
      queryFn: () => getTVShow(tvShowId)
   });

   const { data: trailer } = useQuery({
      queryFn: () => getTvShowTrailer(tvShowId),
      queryKey: ['trailer', tvShowId],

  });

   return { tvshow,trailer };
};