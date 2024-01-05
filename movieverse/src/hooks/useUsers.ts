import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser, signIn,signOut,signUp } from "~/services/apiAuth";
import { getUserFavorites } from "~/services/apiFavorites";
import { ISignIn, ISignUp } from "~/types/users";
import { useUsersStore } from "~/zustand/usersStore";

export const useUsers = () => {
    const {setUserInfo} = useUsersStore();
    const queryCli = useQueryClient();
    const navigate = useNavigate();
    
    const {mutate:registerUser, isError:isRegisterError,error:registerError,isSuccess:isRegisterSuccess} = useMutation({
        mutationFn:(newUser:ISignUp)=>signUp(newUser),
        mutationKey:['register'],
        onSuccess:()=>{
            queryCli.invalidateQueries();
            navigate('/auth/login')

        }
    });

    const {mutate:loginUser, isError:isLoginError,error:loginError} = useMutation({
        mutationFn:(credentials:ISignIn)=>signIn(credentials),
        mutationKey:['login'],
        onSuccess:()=>{
            queryCli.invalidateQueries();
        },
        onError:(err)=>{
            console.error(err)
        }
    });

    const {mutate:logOutUser, isError:isLogOutError,error:logOutError} = useMutation({
        mutationFn:()=>signOut(),
        mutationKey:['logout'],
        onSuccess:()=>{
            queryCli.invalidateQueries();
        }
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
            const userData = currUser.user_metadata;
            const email = currUser.email
            const id = currUser.id;
            setUserInfo({userId:id,fullName:userData.fullName, email:email, gender:Number(userData.gender), age:userData.age,profileUrl:userData.profile});
            getUserFavoritesFn(currUser.id);
        }``
    }, [authSuccess, isAuthError, currUser, setUserInfo,getUserFavoritesFn]);
    
  const isAuthenticated = currUser && currUser.role === "authenticated" ? true :false;

    return {
        registerUser,
        isRegisterError,
        registerError,
        isRegisterSuccess,
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