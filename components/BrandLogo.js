import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

const BrandLogo = ({ brand_Logo_Section }) => {
  return (
    <>
      <Swiper
        className="w-full !py-10 lg:!py-[74px]"
        loop={true}
        centeredSlides={true}
        freeMode={true}
        spaceBetween={0}
        slidesPerView="auto"
        slidesPerGroup={1}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        speed={8000}
        breakpoints={{
          300: {
            slidesPerView:1,
          },
          768: {
            slidesPerView: 3,
          },
          980: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 6,
          },
        }}
      >
        {brand_Logo_Section &&
          brand_Logo_Section.map((brand, index) => (
            <SwiperSlide key={`logo-${index}`}>
              <img className="mx-auto" src={brand.logo} alt="" />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default BrandLogo;
