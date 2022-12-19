import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const SalesCompanyDetails = ({ sales_card, description, logo }) => {
  return (
    <div className="bg-primary-200 py-14">
      <div className="container mx-auto ">
        <div className="grid grid-cols-12 gap-y-10">
          <div className="lg:col-span-4 md:col-span-12 col-span-6 lg:max-w-[282px] sm:border-0 sm:pr-0 pr-3 border-r border-primary-100/40">
            <img src={logo} className="pb-3" />
            <p className="font-500 text-16 leading-6 text-primary-100 font-post-grotesk">
              {description}
            </p>
          </div>
          <div className="col-span-6 lg:col-span-8 md:col-span-12 sm:pl-0 pl-3 m-auto">
            <Swiper
              spaceBetween={0}
              autoplay={{
                delay: 1,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              speed={8000}
            >
              {sales_card &&
                sales_card.map((sales, index) => (
                  <SwiperSlide key={`sales-${index}`}>
                    <div className="">
                      <img src={sales.image} className="pb-2 sm:m-0 m-auto" />
                      <p className="font-400 text-20 font-cambon text-primary-100 leading-7">
                        {sales.description}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesCompanyDetails;
