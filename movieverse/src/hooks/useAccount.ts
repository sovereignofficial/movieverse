import { useMutation } from "@tanstack/react-query"
import { uploadProfilePic } from "~/services/apiAccount"
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

    return {uploadProfilePicFn}
}