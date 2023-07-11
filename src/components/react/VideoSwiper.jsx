import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";

export default function VideoSwiper({ items }) {
  return (
    <div className="flex flex-col max-w-full relative">
        <Swiper
            id="video-swiper"
            className="w-full h-full"
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
            {
                items.map((slide, i) => (
                    <SwiperSlide key={i}>
                        <div className="flex flex-col mb-8 lg:m-0">
                            <div className="text-center max-w-[30rem] mx-auto lg:py-24">
                                <div className="mb-4 text-lg font-medium">{slide.slide_subheading}</div>
                                <h2
                                    className="text-primary-orange font-medium font-sans text-3xl md:text-[2.5rem]/[2.5rem] mb-8 md:mb-12"
                                >
                                    {slide.slide_heading}
                                </h2>
                                <p className="m-0">{slide.slide_text}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
        <div className="mt-20 lg:mt-auto absolute bottom-4 w-full">
            <div
                className="flex items-center justify-between gap-4 font-medium text-[0.938rem]"
            >
                {items.map((slide, i) => (
                    <div key={i}>{slide.slide_heading}</div>
                ))}
            </div>
        </div>
    </div>
  );
}