import { ReactNode } from "react"
import { CarouselContent } from "./CarouselContent"
import { CarouselNavigate } from "./CarouselNavigate"

export const Carousel:React.FC<{children:ReactNode}> = ({children}) => {
  return (
    <div className="w-11/12 relative overflow-hidden overflow-x-scroll mx-auto my-5">
        <CarouselNavigate/>
        <CarouselContent>
            {children}
        </CarouselContent>
    </div>
  )
}
