import { create } from "zustand"

const MAX_PAGE = 3;
const MIN_PAGE = 0;

type CarouselStore = {
    location:number,
    pageCount:number,
    slideRight:()=>void,
    slideLeft:()=>void,
}

export const useCarouselStore = create<CarouselStore>((set)=>({
    location:0,
    pageCount:0,
    slideLeft:()=>set((state)=>({location: state.pageCount>MIN_PAGE ? state.location + 30 : state.location,
        pageCount:state.pageCount >MIN_PAGE ? state.pageCount - 1 : MIN_PAGE
    })),
    slideRight:()=>set((state)=>({location:state.pageCount<MAX_PAGE ? state.location - 30 : state.location,
        pageCount:state.pageCount<MAX_PAGE ? state.pageCount + 1 : MAX_PAGE})),
}))