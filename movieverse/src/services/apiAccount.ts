import { TCredentials } from "~/types/users";
import { supabaseClient,supabaseUrl } from "./supabase";

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
  const {fullName,age,gender} = credentials
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
  const { error } = await supabaseClient.auth.updateUser({
    email,
    password:newPassword
  })

  if (error) throw new Error(error.message);
};
