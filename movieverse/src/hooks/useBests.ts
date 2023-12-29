import { useMutation, useQuery } from "@tanstack/react-query"
import { useEffect } from "react";
import { pickBest,getBests } from "~/services/apiBests"
import { TMovie, TMovieDetail } from "~/types/movies";
import { TPerson } from "~/types/people";
import { TvShow } from "~/types/tvshow";
import { useUsersStore } from "~/zustand/usersStore";

export const useBests = ()=>{
    const {userId,setUserInfo} = useUsersStore();

    const {mutate:pickBestFn} = useMutation({
        mutationFn:({item,userId}:{item:TMovie | TPerson | TvShow | TMovieDetail,userId:string})=>pickBest(item,userId),
        mutationKey:['pick-best'],
        onError:(err)=>{
            console.log(err);
        }
    });

    const {data:bests} = useQuery({
        queryKey:['get-bests'],
        queryFn:()=>getBests(userId)
    })

    useEffect(()=>{
        if(bests){
            setUserInfo({bests})
        }
    },[bests,setUserInfo])

    return {pickBestFn,bests}
}