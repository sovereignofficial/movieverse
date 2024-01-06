import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser, loginWithGoogle, signIn,signOut,signUp } from "~/services/apiAuth";
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

    const {mutate:loginUserWithGoogle} = useMutation({
        mutationFn:loginWithGoogle,
        mutationKey:['oauth-google'],
        onSuccess:(res)=>{
            console.log(res);
        },
        onError:(err)=>{
            console.error(err);
        }
    })

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

    const {data:session, isError:isAuthError,error:authError, isPending:isAuthenticating, isSuccess:authSuccess} = useQuery({
        queryFn:getCurrentUser,
        queryKey:['authenticate'],
    });

    
    useEffect(() => {
        if (authSuccess && !isAuthError && session && session.user) {  
            const email = session.user.email
            const id = session.user.id;
            const appData = session.user.app_metadata;
            const userData = session.user.user_metadata;

            if(appData.provider === 'google' && !(userData.fullName || userData.profileUrl || userData.age)){
                const identity = session.user.identities;
                if(identity){
                    const IDData = identity[0].identity_data;
                    setUserInfo({userId:id,fullName:IDData?.full_name,email,profileUrl:IDData?.picture});
                }
            }else{
                setUserInfo({userId:id,fullName:userData.fullName, email:email, gender:Number(userData.gender), age:userData.age,profileUrl:userData.profile});
            }
            
            getUserFavoritesFn(session.user.id);
        }
    }, [authSuccess, isAuthError, session, setUserInfo,getUserFavoritesFn]);
    
  const isAuthenticated = session && session.user.role === "authenticated" ? true :false;

    return {
        registerUser,
        loginUserWithGoogle,
        isRegisterError,
        registerError,
        isRegisterSuccess,
        authSuccess,
        isAuthenticated,
        isAuthError,
        authError,
        isAuthenticating,
        user:session?.user,
        loginUser,
        isLoginError,
        loginError,
        logOutUser,
        logOutError,
        isLogOutError
    }
}