import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import { ReactNode, memo } from "react";

export const SwiperContainer: React.FC<{ children: ReactNode[] }> = memo(
  ({ children }) => {
    return (
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        direction="horizontal"
      >
        {children.map((child) => (
          <SwiperSlide>{child}</SwiperSlide>
        ))}
      </Swiper>
    );
  }
);
