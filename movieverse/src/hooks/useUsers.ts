import { useMutation, useQuery } from "@tanstack/react-query"
import { useEffect } from "react";
import { getCurrentUser, signIn,signOut,signUp } from "~/services/apiAuth";
import { getUserFavorites } from "~/services/apiFavorites";
import { ISignIn, ISignUp } from "~/types/users";
import { useUsersStore } from "~/zustand/usersStore";

export const useUsers = () => {
    const {setUserInfo} = useUsersStore();
    
    const {mutate:registerUser, isError:isRegisterError,error:registerError} = useMutation({
        mutationFn:(newUser:ISignUp)=>signUp(newUser),
        mutationKey:['register'],
    });

    const {mutate:loginUser, isError:isLoginError,error:loginError} = useMutation({
        mutationFn:(credentials:ISignIn)=>signIn(credentials),
        mutationKey:['login'],

    });

    const {mutate:logOutUser, isError:isLogOutError,error:logOutError} = useMutation({
        mutationFn:()=>signOut(),
        mutationKey:['logout'],
    });

    const {mutate:getUserFavoritesFn} = useMutation({
        mutationFn:getUserFavorites,
        mutationKey:['user-favorites'],
        onSuccess:(res)=>{

            setUserInfo({
                favoriteMovies: res.favoriteMovies.length > 0 ? res.favoriteMovies : [],
                favoriteTvShows: res.favoriteTvShows.length > 0 ? res.favoriteTvShows : [],
                favoritePeople: res.favoritePeople.length > 0 ? res.favoritePeople : [],
            });
        },
        onError:(err)=>{console.log(err)}
    })

    const {data:currUser, isError:isAuthError,error:authError, isPending:isAuthenticating, isSuccess:authSuccess} = useQuery({
        queryFn:getCurrentUser,
        queryKey:['authenticate'],
    });

    
    useEffect(() => {
        if (authSuccess && !isAuthError && currUser) {       
            setUserInfo({userId:currUser.id});
            getUserFavoritesFn(currUser.id);
        }
    }, [authSuccess, isAuthError, currUser, setUserInfo,getUserFavoritesFn]);
    
  const isAuthenticated = currUser && currUser.role === "authenticated" ? true :false;

    return {
        registerUser,
        isRegisterError,
        registerError,
        authSuccess,
        isAuthenticated,
        isAuthError,
        authError,
        isAuthenticating,
        currUser,
        loginUser,
        isLoginError,
        loginError,
        logOutUser,
        logOutError,
        isLogOutError
    }
}