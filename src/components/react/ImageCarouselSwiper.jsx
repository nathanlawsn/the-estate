import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";

export default function ImageCarouselSwiper({ items }) {
  return (
    <div>
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
        {items.map((item) => (
          <SwiperSlide key={item.image.id}>
              <img className='w-full h-full object-cover aspect-[800/492]' src={item.image.url} alt={item.image.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}