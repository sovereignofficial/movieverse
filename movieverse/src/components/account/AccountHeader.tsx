import { TMovie, TMovieDetail } from "~/types/movies";
import { AccountActions } from "./AccountActions";
import { AccountBackground } from "./AccountBackground";
import { AccountProfile } from "./AccountProfile";
import { useUsersStore } from "~/zustand/usersStore";

export const AccountHeader:React.FC<{bests:TMovie[] | TMovieDetail[]}> = ({bests})=> {
  const { fullName } = useUsersStore();
  return (
    <header className="w-full relative overflow-hidden h-[300px] space-y-2">
      <div className="w-full h-full blur-sm brightness-50">
        <AccountBackground bests={bests}/>
      </div>
      <div className="flex items-center absolute w-full bottom-0 left-0">
        <AccountProfile fullName={fullName ?? "Admin"}/>
        <AccountActions/>
      </div>
    </header>
  );
};
