import { ReactNode } from "react"
import { CardBody } from "./CardBody"
import { CardFooter } from "./CardFooter"
import { CardHeader } from "./CardHeader"

type CardType = React.FC<{children:ReactNode}> & {
    CardHeader:React.FC<{imgAddress:string}>,
    CardBody:React.FC<{title:string,overview:string}>,
    CardFooter:React.FC
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