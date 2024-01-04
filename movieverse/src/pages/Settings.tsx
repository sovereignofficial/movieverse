import { Dropzone } from "~/components/account/Dropzone";
import { ProfileImage } from "~/components/account/ProfileImage";
import { SettingsSection } from "~/components/account/SettingsSection";
import { UpdateCredentials } from "~/components/account/UpdateCredentials";
import { UpdatePassword } from "~/components/account/UpdatePassword";
import { useUsersStore } from "~/zustand/usersStore";

export const Settings = () => {
  const { profileUrl } = useUsersStore();

  return (
    <div className="page space-y-10">
      <div className="page-header">
        <h1>Settings</h1>
      </div>
      <div className="page-body space-y-10">
        <SettingsSection title="Update your profile picture">
          <ProfileImage src={profileUrl} />
          <Dropzone />
        </SettingsSection>
        <SettingsSection title="Update your credentials">
          <UpdateCredentials />
        </SettingsSection>
        <SettingsSection title="Update your password">
          <UpdatePassword />
        </SettingsSection>
      </div>
    </div>
  );
};
