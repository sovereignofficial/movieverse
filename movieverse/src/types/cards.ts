import { ReactNode } from "react"

export type CardFooterProps = {
    isLoading: boolean;
    isFavorited: boolean;
    onClickFavorite: () => void;
    onClickDetails: () => void;
  }
  

export type CardType = React.FC<{children:ReactNode}> & {
    CardHeader:React.FC<{imgAddress:string,title:string}>,
    CardBody:React.FC<{title:string,overview:string}>,
    CardFooter:React.FC<CardFooterProps>
}
