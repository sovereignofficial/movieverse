import { RegisterUser, User } from "~/types/users";
import { supabaseClient } from "./supabase";



export const registerUserSupabase = async <T extends RegisterUser>({ email, fullName, age, password }: T): Promise<User> => {

    const { data, error } = await supabaseClient.auth.signUp({
        email: email,
        password: password,
    });
    const user = data.user;
    if (!user || error) throw new Error(error?.message || "something went wrong!");

    const { data: appUser, error: appError } = await supabaseClient.from("users").insert({
        user_id: user.id,
        fullName: fullName,
        email: email,
        age: age,
        favoriteMovies: []
    });
    if (appError || !appUser) throw new Error(appError?.message || "data sent differently")
    return appUser as User
}

export const getCurrentUser = async () => {
    const { data } = await supabaseClient.auth.getSession();

    if (!data.session) return null;
  
    const { data: session, error } = await supabaseClient.auth.getUser();
  
    if (error) throw new Error(error.message);
    if (!session) throw new Error('The session could not fetched!')

    const {data:appUserData , error:userError} =  await supabaseClient.from('users')
    .select('*')
    .eq('user_id',session.user.id);

    if(userError || !appUserData[0] ) throw new Error(userError?.message || 'something went wrong while fetching current user!');

    return {...session.user, publicUserData:{ ...appUserData[0]}}
}

export const loginUserSupabase = async <T extends {email:string,password:string}> ({email,password}:T) => {
    const {data,error} = await supabaseClient.auth.signInWithPassword({
        email,
        password
    });

    if(error) throw new Error(error.message);

    return data;
}