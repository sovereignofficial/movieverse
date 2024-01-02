import { useUsersStore } from "~/zustand/usersStore";
import { ProfileImage } from "./ProfileImage";

export const AccountProfile:React.FC<{fullName:string}> = ({fullName}) => {
  const {profileUrl} = useUsersStore();
  return (
    <div className="flex-1 flex items-center gap-4">
      <ProfileImage src={profileUrl}/>
      <h2 className="flex items-center gap-4">
        {fullName ?? "Admin"}
        <span className="text-sm font-light italic mt-3">( Not Premium )</span>
      </h2>
    </div>
  );
};
