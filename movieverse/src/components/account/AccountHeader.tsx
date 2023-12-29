import { TMovie, TMovieDetail } from "~/types/movies";
import { AccountActions } from "./AccountActions";
import { AccountBackground } from "./AccountBackground";
import { AccountProfile } from "./AccountProfile";
import { useUsersStore } from "~/zustand/usersStore";

export const AccountHeader:React.FC<{bests:TMovie[] | TMovieDetail[]}> = ({bests})=> {
  const { fullName } = useUsersStore();
  return (
    <header className="w-full space-y-2">
      <div>
        <AccountBackground bests={bests}/>
      </div>
      <div className="flex items-center">
        <AccountProfile fullName={fullName ?? "Admin"}/>
        <AccountActions/>
      </div>
    </header>
  );
};
