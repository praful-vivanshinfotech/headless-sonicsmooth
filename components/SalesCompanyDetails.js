import Image from "next/image";
import React, { useRef } from "react";
import { Navigation } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const SalesCompanyDetails = ({ sales_card, description, logo, section_id }) => {
  return (
    <div
      id={section_id && section_id.trim()}
      className="bg-primary-200 py-12 lg:py-14 px-4"
    >
      <div className="container-sm mx-auto ">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-6 md:col-span-4">
            <div className=" lg:max-w-[282px] md:border-0 sm:pr-0 pr-3 border-r border-primary-100/40">
              <img alt="" src={logo} className="pb-3" />
              <p className="font-500 text-[15px] sm:text-16 leading-6 text-primary-100 font-post-grotesk">
                {description}
              </p>
            </div>
          </div>
          <div className="col-span-6 md:col-span-8">
            <div className="pl-4 lg:px-0 m-auto flex items-center gap-x-2">
              <Swiper
                className="w-full !relative !py-10 lg:!py-[74px] salesCompanyDetails"
                loop={false}
                // centeredSlides={true}
                navigation={true}
                freeMode={true}
                modules={[Navigation]}
                spaceBetween={0}
                slidesPerView="auto"
                slidesPerGroup={1}
                speed={1000}
                breakpoints={{
                  300: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                }}
              >
                {sales_card &&
                  sales_card.map((sales, index) => (
                    <SwiperSlide className="relative" key={`sales-${index}`}>
                      <div className="flex flex-col items-center justify-center">
                        <img
                          alt="michael-todd-beauty"
                          src={sales.image}
                          className="pb-2 sm:m-0 min-h-[42px]  "
                        />
                        <p className="font-400 text-18 sm:text-20 text-center font-cambon text-primary-100 leading-7">
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
    </div>
  );
};

export default SalesCompanyDetails;
