/* eslint-disable import/no-unresolved */

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

function Carousel() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 6000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img src="../../../public/assets/imgs/carousel/i1.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../../public/assets/imgs/carousel/i2.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../../public/assets/imgs/carousel/i3.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="../../../public/assets/imgs/carousel/i4.png" alt="" />
      </SwiperSlide>
    </Swiper>
  );
}

export default Carousel;
