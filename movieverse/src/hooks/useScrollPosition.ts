import { useEffect, useState } from "react"

export const useScrollPosition = () => {
    const [isBottom, setIsBottom] = useState(false);
  
    useEffect(() => {
        const handleScroll = () => {
            const isAtBottom = window.scrollY + window.innerHeight >= document.body.offsetHeight - 1000;
            setIsBottom(isAtBottom);
        }
  
        window.addEventListener('scroll', handleScroll);
  
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);
  
    return {isBottom};
  }
  