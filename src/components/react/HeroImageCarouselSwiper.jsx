import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";

export default function HeroImageCarouselSwiper() {
  return (
    <Swiper
        className=""
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        speed={500}
    >
      {/* {items.map((item) => (
        <SwiperSlide key={item.image.id}>
            <img className='w-full h-full object-cover aspect-[800/492]' src={item.image.url} alt={item.image.alt} />
        </SwiperSlide>
      ))} */}
      <SwiperSlide>
        <div className='h-[75dvh] bg-black text-white py-20'>
          <div className='w-full max-w-[94rem] mx-auto px-8 h-full flex flex-col justify-center'>
            <div className='mt-auto'>
              <p className='text-xl font-medium'>Explore</p>
              <p className='text-4xl sm:text-[3.125rem]/[3.625rem] max-w-[28.75rem]'>The classic ridges of the Helvellyn ascent</p>
            </div>

            <div className='flex justify-between mt-auto gap-10 sm:gap-20'>
              <div className='max-w-[45rem]'>
                <p className='text-lg/6'>Helvellyn is in the Lake District, the famous National Park and UNESCO World Heritage Site in the North West of England. The mountain itself is part of the Helvellyn range of mountains, which are north of Ambleside and between Ullswater and Thirlmere lakes.</p>
                </div>

                <div className='w-8 h-8 shrink-0 sm:w-[3.125rem] sm:h-[3.125rem]'>
                  <svg className='w-full h-full' xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
                    <g id="Ellipse_3" data-name="Ellipse 3" fill="#fff" stroke="#fff" stroke-width="1">
                      <circle cx="25" cy="25" r="25" stroke="none"/>
                      <circle cx="25" cy="25" r="24.5" fill="none"/>
                    </g>
                    <g id="arrow-up-right" transform="translate(10 10)">
                      <line id="Line_1" data-name="Line 1" y1="15.15" x2="15.15" transform="translate(7 7)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                      <path id="Path_1" data-name="Path 1" d="M7,7H22.18V22.18" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                    </g>
                  </svg>
                </div>
              </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}