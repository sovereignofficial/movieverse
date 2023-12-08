import { ReactNode } from "react";
import { useCarouselStore } from "~/zustand/components/carouselStore";


export const CarouselContent: React.FC<{children:ReactNode}> = ({ children }) => {
  const { location } = useCarouselStore();
  return (
    <div
      style={{
        transform: `translate(${location}rem)`,
      }}
      className={`grid grid-flow-col gap-1 animation-slow`}
    >
      {children}
    </div>
  );
};
