import { Dropzone } from "~/components/Dropzone";
import { ProfileImage } from "~/components/account/ProfileImage";
import { useUsersStore } from "~/zustand/usersStore";

export const Settings = () => {
  const {profileUrl} = useUsersStore();

  return (
    <div className="page space-y-10">
      <div className="page-header">
        <h1>Settings</h1>
      </div>
      <div className="page-body space-y-10">
        <div className="space-y-3">
          <h3>Update your profile picture</h3>
          <div className="grid place-items-center gap-2">
            <ProfileImage src={profileUrl}/>
            <Dropzone />
          </div>
        </div>
      </div>
    </div>
  );
};
