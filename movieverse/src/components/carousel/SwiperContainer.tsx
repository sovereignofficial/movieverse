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
     navigation={true}
     pagination={{ clickable: true }}
     scrollbar={{ draggable: true }}
     >
      {
        children.map(child=>(
          <SwiperSlide>{child}</SwiperSlide>
        ))
      }
     </Swiper>
  )
}
