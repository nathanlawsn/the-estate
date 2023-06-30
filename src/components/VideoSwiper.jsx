import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";

export default function VideoSwiper({subheading, heading, description}) {
  return (
    <div className="flex flex-col max-w-full">
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
            <SwiperSlide>
                <div class="flex flex-col mb-8 lg:m-0">
                    <div class="text-center max-w-[30rem] mx-auto lg:py-24">
                        <div class="mb-4 text-lg font-medium">{subheading}</div>
                        <h2
                            class="text-primary-orange font-medium font-sans text-3xl md:text-[2.5rem]/[2.5rem] mb-8 md:mb-12"
                        >
                            {heading}
                        </h2>
                        <p class="m-0">{description}</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="flex flex-col">
                    <div class="text-center max-w-lg mx-auto lg:py-24">
                        <div class="mb-4 text-lg font-medium">{subheading}</div>
                        <h2
                            class="text-primary-orange font-medium font-sans text-3xl md:text-[2.5rem]/[2.5rem] mb-8 md:mb-12"
                        >
                            {heading}
                        </h2>
                        <p class="m-0">{description}</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="flex flex-col">
                    <div class="text-center max-w-lg mx-auto lg:py-24">
                        <div class="mb-4 text-lg font-medium">{subheading}</div>
                        <h2
                            class="text-primary-orange font-medium font-sans text-3xl md:text-[2.5rem]/[2.5rem] mb-8 md:mb-12"
                        >
                            {heading}
                        </h2>
                        <p class="m-0">{description}</p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
        {/* <div class="mt-20 lg:mt-auto">
            <div
                class="flex items-center justify-between gap-4 font-medium text-[0.938rem]"
            >
                <div class="text-primary-orange">Outdoor explorers</div>
                <div>Cozy cuddlers</div>
                <div>Nature lovers</div>
            </div>
            <div class="bg-white h-[3px] w-full mt-3"></div>
        </div> */}
    </div>
  );
}