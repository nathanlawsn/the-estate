import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";

export default function ImageCarouselSwiper() {
  return (
    <Swiper
        className=""
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "progressbar",
        }}
        modules={[Autoplay, Pagination]}
        speed={500}
    > 
        <SwiperSlide>
            <p>TEST</p>
        </SwiperSlide>
        <SwiperSlide>
            <p>TEST</p>
        </SwiperSlide>
    </Swiper>
  );
}