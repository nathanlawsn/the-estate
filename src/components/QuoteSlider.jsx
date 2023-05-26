import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";

export default function QuoteSlider({quote, name}) {
  return (
    <Swiper
        className="!py-32 md:!py-48"
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
            <figure className="text-center max-w-[60rem] mx-auto">
                <blockquote>
                    <p className="text-2xl sm:text-3xl/[2.5rem]">{quote}</p>
                </blockquote>
                <figcaption className="mt-8">
                    <p className="text-primary-orange text-2xl sm:text-3xl/[2.5rem]">{name}</p>
                </figcaption>
            </figure>
        </SwiperSlide>
        <SwiperSlide>
            <figure className="text-center max-w-[60rem] mx-auto">
                <blockquote>
                    <p className="text-2xl sm:text-3xl/[2.5rem]">“What a fabulous place to stay for walking and cycling in the Ullswater lake area. Chalets are well equipped, comfortable and very homely, location is great, but what really makes it stand out are the staff”</p>
                </blockquote>
                <figcaption class="mt-8">
                    <p className="text-primary-orange text-2xl sm:text-3xl/[2.5rem]">Sarah - Coventry</p>
                </figcaption>
            </figure>
        </SwiperSlide>
        <SwiperSlide>
            <figure className="text-center max-w-[60rem] mx-auto">
                <blockquote>
                    <p className="text-2xl sm:text-3xl/[2.5rem]">“What a fabulous place to stay for walking and cycling in the Ullswater lake area. Chalets are well equipped, comfortable and very homely, location is great, but what really makes it stand out are the staff”</p>
                </blockquote>
                <figcaption class="mt-8">
                    <p className="text-primary-orange text-2xl sm:text-3xl/[2.5rem]">Sarah - Coventry</p>
                </figcaption>
            </figure>
        </SwiperSlide>
    </Swiper>
  );
}