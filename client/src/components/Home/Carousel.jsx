// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

function Carousel() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
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
      ...
    </Swiper>
  );
}

export default Carousel;
