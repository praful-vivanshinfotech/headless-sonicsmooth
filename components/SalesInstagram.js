import { ScrollToDiv } from "@/helper/Scroll";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";
import { Navigation } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import IconLeft from "../public/svg/icon-left.svg";
import IconRight from "../public/svg/icon-right.svg";

const SalesInstagram = ({
  sub_title,
  title,
  rating,
  award_card,
  sales_insta_subtitle,
  sales_insta_profile,
  insta_post_card,
  button,
  Guarantee,
  button_link,
  section_id,
}) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div
      id={section_id && section_id.trim()}
      className="bg-primary-300 py-9 lg:py-[70px] mb-[30px] lg:mb-20 mt-[88px] lg:mt-[100px] sales-instagram"
    >
      <div className="container-sm mx-auto md:px-0 px-4">
        <div className="pb-10 lg:pb-[70px]">
          <div className="pb-12">
            <p className="font-post-grotesk font-500 text-[15px] sm:text-16 text-gray-100 leading-5 pb-1 text-center">
              {sub_title}
            </p>
            <h2 className="md:max-w-[75%] mx-auto font-cambon font-400 lg:text-40 text-30 lg:leading-[51px] leading-9 text-primary-100 pb-5 text-center">
              {title}
            </h2>
            <p className="font-post-grotesk font-500 text-16 lg:text-18 first-letter:leading-6 text-gray-100 text-center">
              {rating}
            </p>
          </div>
          <div className="md:px-0 px-4 flex gap-x-2 items-center">
            <div className="relative " ref={prevRef}>
              <IconLeft className="mb-2" />
            </div>
            <Swiper
              className="w-full !relative !py-10 lg:!py-[74px]"
              loop={false}
              navigation={false}
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
                1024: {
                  slidesPerView: 3,
                },
              }}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
            >
              {award_card.map((award, index) => (
                <SwiperSlide key={`award-${index}`}>
                  <div
                    className={`relative flex flex-col gap-y-3 px-7 sm:px-[50px] min-h-[220px] ${
                      index + 1 == award_card.length
                        ? "solution-line-last solution-line2-last"
                        : "solution-line solution-line2 "
                    }`}
                  >
                    <img
                      alt={
                        award.award_description_alt_name
                          ? award_description_alt_name
                          : "Michael Todd Beauty"
                      }
                      src={award.award_image}
                      className={` mx-auto ${index == 0 ? "w-[225px]" : ""}`}
                    />
                    <p className="font-post-grotesk font-400 text-16 text-center leading-6 mt-auto">
                      {award.award_description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="relative" ref={nextRef}>
              <IconRight className="mb-2" />
            </div>
          </div>
        </div>
        <div className="">
          <p className="font-700 text-[15px] lg:text-18 leading-7 text-center text-primary-100 font-post-grotesk pb-2">
            {sales_insta_subtitle}
          </p>
          <Link href="#">
            <p className="md:max-w-[75%] mx-auto font-cambon font-400 lg:text-40 text-30 lg:leading-[51px] leading-9 text-primary-100 pb-5 text-center">
              {sales_insta_profile}
            </p>
          </Link>
          <div className="pt-7 lg:pt-10 pb-9 lg:pb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-x-[26px]">
              {insta_post_card.map((insta_post, index) => (
                <div key={`insta_post + ${index}`} className="bg-white ">
                  <Image
                    width={374}
                    height={327}
                    alt={
                      insta_post.post_image_alt_name
                        ? insta_post.post_image_alt_name
                        : "Michael Todd Beauty"
                    }
                    src={insta_post.post_image}
                    className="w-full"
                  />
                  <div className="px-3 py-4 children">
                    <div className="flex justify-between items-center">
                      <div className="flex justify-center items-start gap-x-4">
                        <img alt="" src={insta_post.profile_image} />
                        <div>
                          <Link href="#">
                            <h5 className="font-400 text-[15px] sm:text-16 leading-5 text-primary-100 font-post-grotesk pb-2">
                              {insta_post.profile_id}
                            </h5>
                          </Link>
                          <p className="font-400 text-14 leading-5 text-gray-100/50 font-post-grotesk">
                            {insta_post.post_date}
                          </p>
                        </div>
                      </div>
                      <div>
                        <Link href="#">
                          <img
                            alt="treat_img"
                            src={insta_post.insta_icon}
                            className="w-6 h-6"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="text-[15px] sm:text-16">
                      <ReactReadMoreReadLess
                        charLimit={60}
                        Lines={1}
                        readMoreText={"Read More"}
                        readLessText={"Read less"}
                      >
                        {insta_post.post_description}
                      </ReactReadMoreReadLess>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <button
              onClick={ScrollToDiv}
              data-scroll-to={button_link ? button_link?.trim() : "__next"}
              className="uppercase btn-primary px-[50px]"
            >
              {button}
            </button>
            <p className="text-black font-400 font-post-grotesk text-[15px] sm:text-16 leading-5 text-center pt-">
              {Guarantee}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesInstagram;
