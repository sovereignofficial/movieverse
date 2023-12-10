import { ReactNode } from "react"
import { CardBody } from "./CardBody"
import { CardFooter } from "./CardFooter"
import { CardHeader } from "./CardHeader"
import { Movie, MoviesFromMovieverse } from "~/types/movies"
import { User } from "~/types/users"

type CardType = React.FC<{children:ReactNode}> & {
    CardHeader:React.FC<{imgAddress:string}>,
    CardBody:React.FC<{title:string,overview:string}>,
    CardFooter:React.FC<{movie:Movie | MoviesFromMovieverse,user:User}>
}

const Card:CardType = ({children}) => {
  return (
    <div className="p-2 hover:bg-zinc-900 rounded-xl">
        {children}
    </div>
  )
}

Card.CardHeader = CardHeader
Card.CardBody = CardBody
Card.CardFooter = CardFooter

export {Card}