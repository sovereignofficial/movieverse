import { useMutation } from "@tanstack/react-query"
import { useEffect, useState } from "react";
import { pickBest,getBests, removeFromBests } from "~/services/apiBests"
import { TMovie, TMovieDetail } from "~/types/movies";
import { useUsersStore } from "~/zustand/usersStore";

export const useBests = ()=>{
    const [isBest, setIsBest] = useState(false);
    const {userId,setUserInfo,bests} = useUsersStore();

    const {mutate:pickBestFn} = useMutation({
        mutationFn:async({item,userId}:{item:TMovie | TMovieDetail,userId:string})=>{
            const data = await pickBest(item,userId);
            setIsBest(true);
            return data
        },
        mutationKey:['pick-best'],
        onSuccess:(res)=>{
            bests && setUserInfo({bests:[...bests,res]})
        },
        onError:(err)=>{
            console.log(err);
        }
    });

    const {mutate:getBestsFn} = useMutation({
        mutationKey:['get-bests'],
        mutationFn:(id:string)=>getBests(id),
        onSuccess:(res)=>{
            setUserInfo({bests:res})
        }
    });

    const {mutate:removeFromBestsFn} = useMutation({
        mutationFn:async({userId,itemId}:{userId:string,itemId:number})=>{
            const data = await removeFromBests(userId,itemId);
            setIsBest(false);
            return data
        },
        mutationKey:['remove-from-bests'],
        onSuccess:(res)=>{
            setUserInfo({bests:bests?.filter(item=>item.id !== res)});
        },
        onError:(err)=>{
            console.error(err);
        }
    })

    useEffect(()=>{
        if(userId.trim() !== ""){
            getBestsFn(userId);
        }
    },[getBestsFn,userId])

    return {pickBestFn,bests,removeFromBestsFn,isBest,setIsBest}
}