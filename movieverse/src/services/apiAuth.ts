import { ISignIn, ISignUp } from "~/types/users";
import { supabaseClient } from "./supabase";


async function signUp({email, password,age,gender,fullName}:ISignUp) {
    const { data, error } = await supabaseClient.auth.signUp({
        email,
        password,
        options:{
            data:{
                fullName,
                age,
                gender
            }
        }
    });

    if (error) {
        console.error('Error signing up:', error);
    } else {
        console.log('User signed up:', data);
    }
}


async function signIn({email, password}:ISignIn) {
    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        console.error('Error signing in:', error);
    } else {
        console.log('User signed in:', data);
    }
}

async function signOut() {
    const { error } = await supabaseClient.auth.signOut();

    if (error) {
        console.error('Error signing out:', error);
    } else {
        console.log('User signed out.');
    }
}

async function getCurrentUser() {
    const {data,error} = await supabaseClient.auth.getSession();
    
    if(error) throw new Error(error.message);

    return data.session?.user || false
}

export { signUp, signIn, signOut, getCurrentUser };