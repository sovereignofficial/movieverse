import { CardBody } from "./CardBody"
import { CardFooter } from "./CardFooter"
import { CardHeader } from "./CardHeader"
import { ReactNode, memo } from "react"

const Card: React.FC<{children:ReactNode}> = ({children}) => {
 return (
 <div className="p-2 hover:bg-zinc-900 rounded-xl">
     {children}
 </div>
 )
}

const CardSubcomponents = {
 CardHeader,
 CardBody,
 CardFooter
};

const MemoizedCard = Object.assign(memo(Card), CardSubcomponents);

export {MemoizedCard as Card};
