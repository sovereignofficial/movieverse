import { TMovie, TMovieDetail } from "~/types/movies"
import { UserInfoList } from "./UserInfoList"
import { UserTopPicks } from "./UserTopPicks"

export const AccountSidePanel:React.FC<{bests:TMovie[] | TMovieDetail[]}> = ({bests}) => {
  return (
    <aside className="space-y-4 col-span-4 w-full h-full pt-20">
        <UserInfoList/>
        <UserTopPicks bests={bests}/>
    </aside>
  )
}
