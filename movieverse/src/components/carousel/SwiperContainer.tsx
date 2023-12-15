import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css'
import { ReactNode } from 'react';

export const SwiperContainer:React.FC<{children:ReactNode[]}> = ({children}) => {

  return (
     <Swiper
     modules={[Navigation, Pagination, Scrollbar, A11y]}
     spaceBetween={50}
     slidesPerView={3}
     navigation
     pagination={{ clickable: true }}
     scrollbar={{ draggable: true }}
     onSwiper={(swiper) => console.log(swiper)}
     onSlideChange={() => console.log('slide change')}
     >
      {
        children.map(child=>(
          <SwiperSlide>{child}</SwiperSlide>
        ))
      }
     </Swiper>
  )
}
