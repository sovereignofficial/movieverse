import { useUsersStore } from "~/zustand/usersStore";
import { ProfileImage } from "./ProfileImage";

export const AccountProfile:React.FC<{fullName:string}> = ({fullName}) => {
  const {profileUrl} = useUsersStore();
  return (
    <div className="flex-1 flex items-center sm:gap-2 md:gap-4">
      <ProfileImage src={profileUrl}/>
      <h2 className="flex items-center sm:text-sm md:text-2xl lg:text-3xl">
        {fullName ?? "Unknown"}
      </h2>
    </div>
  );
};
