import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";

export default function QuoteSlider({items}) {
  return (
    <Swiper
        className="!py-24 md:!py-48"
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
    {items.testimonial.map((item, i) => (
        <SwiperSlide key={i}>
            <figure className="text-center max-w-[60rem] mx-auto px-8">
                <blockquote>
                    <p className="text-2xl sm:text-3xl/[2.5rem] m-0">{item.quote}</p>
                </blockquote>
                <figcaption className="mt-8">
                    <p className="text-primary-orange text-2xl sm:text-3xl/[2.5rem] m-0">{item.name}</p>
                </figcaption>
            </figure>
        </SwiperSlide>
    ))}
    </Swiper>
  );
}