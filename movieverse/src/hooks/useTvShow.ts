import { useQuery } from '@tanstack/react-query';
import { getTVShow } from '../services/apiTvShow';
import { useSearchParams } from 'react-router-dom';

export const useTVShow = () => {
   const [searchParams] = useSearchParams();
   const tvShowId = searchParams.get('t') ?? "";

   const { data: tvshow } = useQuery({
      queryKey: ['get-tv'],
      queryFn: () => getTVShow(tvShowId)
   });

   return { tvshow };
};