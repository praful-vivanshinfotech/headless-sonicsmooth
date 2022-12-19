import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const BrandLogo = ({ brand_Logo_Section }) => {
  return (
    <>
      <Swiper
        className="w-full !py-[74px]"
        loop={true}
        freeMode={true}
        spaceBetween={0}
        slidesPerView={3}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        speed={8000}
      >
        {brand_Logo_Section &&
          brand_Logo_Section.map((brand, index) => (
            <SwiperSlide key={`logo-${index}`}>
              <img src={brand.logo} alt="" />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default BrandLogo;
