import { ISignIn, ISignUp } from "~/types/users";
import { supabaseClient } from "./supabase";
import { validateAge, validateEmail, validateGender, validateName, validatePassword } from "~/utils/validate";


const loginWithGoogle = async () => {
    const { error } = await supabaseClient.auth.signInWithOAuth({
        provider: 'google',
    });

    if(error) throw new Error(error.message);

};


async function signUp({ email, password, age, gender, fullName }: ISignUp) {
    validateEmail(email);
    validateAge(age.toString());
    validateGender(gender);
    validateName(fullName);
    validatePassword(password);

    const { error } = await supabaseClient.auth.signUp({
        email,
        password,
        options: {
            data: {
                fullName,
                age,
                gender
            }
        }
    });

    if (error) {
        throw new Error(error.message);
    } else {
        console.log('User signed up');
    }
}


async function signIn({ email, password }: ISignIn) {
    validateEmail(email);
    validatePassword(password);

    const { error } = await supabaseClient.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        throw new Error(error.message);
    } else {
        console.log('User signed in');
    }
}

async function signOut() {
    const { error } = await supabaseClient.auth.signOut();

    if (error) {
        throw new Error(error.message);
    } else {
        console.log('User signed out.');
    }
}

async function getCurrentUser() {
    const { data, error } = await supabaseClient.auth.getSession();

    if (error) throw new Error(error.message);

    return data.session
}

export { signUp, signIn, signOut, getCurrentUser, loginWithGoogle };