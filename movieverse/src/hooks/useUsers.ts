import { useMutation, useQuery } from "@tanstack/react-query"
import { useEffect } from "react";
import { getCurrentUser, registerUserSupabase, loginUserSupabase } from "~/services/apiAuth";
import { RegisterUser  } from "~/types/users";
import { useUsersStore } from "~/zustand/usersStore";

export const useUsers = () => {
   const {user,setUser} = useUsersStore();

    const {mutate:registerUser, isError:isRegisterError,error:registerError} = useMutation({
        mutationFn:(user:RegisterUser)=>registerUserSupabase(user),
        mutationKey:['register'],
        onSuccess:(res)=>{
            setUser(res);
        }
    });

    const {mutate:loginUser, isError:isLoginError,error:loginError} = useMutation({
        mutationFn:(loginCredentials:{email:string,password:string})=>loginUserSupabase(loginCredentials),
        mutationKey:['register'],

    });

    const {data:currUser, isError:isAuthError,error:authError, isPending:isAuthenticating, isSuccess:authSuccess} = useQuery({
        queryFn:getCurrentUser,
        queryKey:['authenticate'],
    });

    
    useEffect(()=>{
        if(authSuccess && !isAuthError && currUser){
            setUser(currUser.publicUserData)
        }
    },[authSuccess,isAuthError,currUser,setUser])

    return {registerUser,isRegisterError,registerError,authSuccess, isAuthenticated: currUser?.role === "authenticated"
        ,isAuthError,authError,isAuthenticating,user,loginUser,isLoginError,loginError}
}