import { TCredentials } from "~/types/users";
import { supabaseClient,supabaseUrl } from "./supabase";
import { validateAge, validateEmail, validateGender, validateName, validatePassword } from "~/utils/validate";

export const uploadProfilePic = async (userId:string,file:File & {preview: string}) =>{
    const fileName = `profile.${userId}.${file.name}`;
    console.log(file);
    const { error: storageError } = await supabaseClient.storage
    .from("profiles")
    .upload(fileName, file);

  if (storageError) throw new Error(storageError.message);

  const { data: updatedUser, error: error2 } = await supabaseClient.auth.updateUser({
    data: {
      profile: `${supabaseUrl}/storage/v1/object/public/profiles/${fileName}`,
    },
  });

  if (error2) throw new Error(error2.message);
  return updatedUser;
}



export const updateCredentials = async (email:string, credentials:TCredentials) => {
  const {fullName,age,gender} = credentials;
  validateName(fullName);
  validateAge(age.toString());
  validateGender(`${gender}`);
  validateEmail(email);

  const { data: updatedUser, error } = await supabaseClient.auth.updateUser({
    email,
    data:{
      fullName,
      age,
      gender,
  }
  })
  

  if (error) throw new Error(error.message);
  return updatedUser;
};


export const updatePassword = async (email:string, newPassword: string) => {
  validateEmail(email);
  validatePassword(newPassword);
  
  const { error } = await supabaseClient.auth.updateUser({
    email,
    password:newPassword
  })

  if (error) throw new Error(error.message);
};
