import { LikeButton } from "~/components/buttons/LikeButton"

export const CardFooter:React.FC = () => {
  return (
    <div className="grid grid-flow-col p-2 place-items-center">
        <LikeButton/>
        <button className="btn-primary">Details</button>
    </div>
  )
}
