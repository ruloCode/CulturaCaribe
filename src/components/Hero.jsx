import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Hero_Image_1 from "../assets/hero_1.jpg";
import Hero_Image_2 from "../assets/hero_2.jpg";
import Hero_Image_3 from "../assets/hero_3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Hero() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide>
          <img
            className="w-full object-fill lg:h-96"
            src={Hero_Image_1}
            alt="image slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
            <img
              className="w-full object-fill lg:h-96"
              src={Hero_Image_2}
              alt="Image"
            />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full object-fill lg:h-96"
            src={Hero_Image_3}

            alt="image slide 3"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
