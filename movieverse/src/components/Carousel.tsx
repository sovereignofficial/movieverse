import { ReactNode } from "react"
import { AiOutlineLeft,AiOutlineRight} from 'react-icons/ai';

export const Carousel = ({children}:CarouselProps) => {
  return (
    <div className="relative overflow-hidden p-3
     h-80 ">
      <button className="absolute sm:left-4 md:left-20 top-36 w-10 h-10 rounded-full flex justify-center items-center
      hover:shadow-lg hover:shadow-white/30 "> {<AiOutlineLeft size={20}/>} </button>
      <button className="absolute sm:right-4 md:right-20 top-36 w-10 h-10 rounded-full flex justify-center items-center
      hover:shadow-lg hover:shadow-white/30 "> {<AiOutlineRight size={20}/>} </button>

      <div className="flex items-center justify-center w-full h-full">
        {children}
      </div>
    </div>
  )
}

interface CarouselProps{
    children:ReactNode
}
