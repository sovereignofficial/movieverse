import { useMutation } from "@tanstack/react-query"
import { uploadProfilePic,updateCredentials,updatePassword } from "~/services/apiAccount"
import { TCredentials } from "~/types/users";
import { useUsersStore } from "~/zustand/usersStore"

export const useAccount = () => {
    const {setUserInfo} = useUsersStore();

    const {mutate:uploadProfilePicFn} = useMutation({
        mutationFn:({userId,file}:{userId:string,file:File & {preview:string}})=>uploadProfilePic(userId,file),
        mutationKey:['upload-profile-pic'],
        onSuccess:(res)=>{
            const userdata = res.user.user_metadata;
            setUserInfo({profileUrl:userdata.profile})
        },
        onError:(err)=>{
            console.error(err);
        }
    })

    const {mutate:updateCredentialsFn} = useMutation({
        mutationFn:({email,credentials}:{email:string,credentials:TCredentials})=>updateCredentials(email,credentials),
        mutationKey:['update-credentials'],
        onError:(err)=>{
            console.error(err);
        }
    })

    const {mutate:updatePasswordFn} = useMutation({
        mutationFn:({email,newPassword}:{email:string,newPassword:string})=>updatePassword(email,newPassword),
        mutationKey:['update-password'],
        onError:(err)=>{
            console.error(err);
        }
    })

    return {uploadProfilePicFn, updateCredentialsFn, updatePasswordFn}
}