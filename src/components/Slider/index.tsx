import React from 'react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import StyledSlider, { SWIPER_CONTAINER_CLASSNAME, SwiperNav, Before } from './style';

SwiperCore.use([Pagination]);

interface SliderProps {
  imgs: string[];
}

function Slider({ imgs = [] }: SliderProps) {
  return (
    <StyledSlider>
      <Before />
      <Swiper
        className={SWIPER_CONTAINER_CLASSNAME}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}>
        {imgs.map((img, i) => {
          return (
            <SwiperSlide key={i}>
              <SwiperNav>
                <img src={img} width="100%" height="100%" alt="推荐" />
              </SwiperNav>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </StyledSlider>
  );
}

export default React.memo(Slider);
