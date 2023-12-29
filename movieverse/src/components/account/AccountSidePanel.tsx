import { TMovie, TMovieDetail } from "~/types/movies"
import { UserInfoList } from "./UserInfoList"
import { UserPinsAsBest } from "./UserPinsAsBest"

export const AccountSidePanel:React.FC<{bests:TMovie[] | TMovieDetail[]}> = ({bests}) => {
  return (
    <aside className="space-y-4 col-span-3 w-full h-full pt-20">
        <UserInfoList/>
        <UserPinsAsBest bests={bests}/>
    </aside>
  )
}
