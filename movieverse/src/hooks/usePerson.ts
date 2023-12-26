import { useQuery } from '@tanstack/react-query';
import { getPerson } from '../services/apiPerson';
import { useSearchParams } from 'react-router-dom';

export const usePerson = () => {
   const [searchParams] = useSearchParams();
   const personId = searchParams.get('p') ?? "";

   const {data:person} = useQuery({
    queryKey:['get-person'],
    queryFn:()=>getPerson(personId)
   });

   return {person}
};