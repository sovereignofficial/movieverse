import { ReactNode, useState } from "react"
import { AiOutlineLeft,AiOutlineRight} from 'react-icons/ai';
import { useSwipeable } from "react-swipeable";

export const Carousel = ({children}:CarouselProps) => {
  const numCardsPerPage = 3; // Number of cards to display per page
  const numPages = Math.ceil(children?.length ?? 0 / numCardsPerPage); // Total number of pages

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentIndex < numPages - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    },
    onSwipedRight: () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    },
  });

  const goToNextItem = () => {
    if (currentIndex < numPages - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPreviousItem = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  

  return (
    <div {...handlers} className=" md:w-full relative overflow-hidden p-3 overflow-x-scroll scrollbar-hide
     h-80 ">
      <button onClick = {goToPreviousItem}
       className=" z-10 absolute sm:left-4 md:left-20 top-40 w-10 h-10 rounded-full flex justify-center items-center
      hover:shadow-lg hover:shadow-white/30 "> {<AiOutlineLeft size={20}/>} </button>
      <button onClick = {goToNextItem}
       className=" z-10 absolute sm:right-4 md:right-20 top-40 w-10 h-10 rounded-full flex justify-center items-center
      hover:shadow-lg hover:shadow-white/30 "> {<AiOutlineRight size={20}/>} </button>

      <div style={{ transform: `translateX(-${currentIndex * 78}%)`, transition:"transform 0.3s ease-in-out" }} className="flex w-full h-full">
        {children}
      </div>
    </div>
  )
}

interface CarouselProps{
    children:ReactNode[] | undefined
}
