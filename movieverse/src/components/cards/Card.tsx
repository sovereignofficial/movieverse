import { CardType } from "~/types/cards"
import { CardBody } from "./CardBody"
import { CardFooter } from "./CardFooter"
import { CardHeader } from "./CardHeader"


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