import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";

export default function ImageCarouselSwiper() {
  return (
    <Swiper
        className=""
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation
        modules={[Autoplay, Navigation]}
        speed={500}
    > 
        <SwiperSlide>
            <img src="/public/images/lodge-carousel-001.jpg" alt="Placeholder" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/public/images/lodge-carousel-001.jpg" alt="Placeholder" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/public/images/lodge-carousel-001.jpg" alt="Placeholder" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/public/images/lodge-carousel-001.jpg" alt="Placeholder" />
        </SwiperSlide>
    </Swiper>
  );
}