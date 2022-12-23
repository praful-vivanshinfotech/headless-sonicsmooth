import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = (props) => {
  return (
    <div id={props?.section_id} className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:mt-9 lg:mt-5 mt-3 md:px-0   gap-x-12 xl:gap-x-24">
        <div>
          <div className="flex lg:flex-col flex-col-reverse">
            <div className="font-post-grotesk flex justify-center lg:justify-start items-center gap-x-3 mb-1">
              <i className="after:text-yellow text-22" data-star="4.5"></i>
              <p className="md:text-16 text-[13px] text-gray-100 leading-5">
                {props.rating_content}
              </p>
            </div>
            <h2 className="font-cambon text-primary-100 md:text-[38px] text-[30px] font-400 xl:leading-[58px] lg:text-start text-center lg:leading-[35px] leading-7">
              {props.banner_title}
            </h2>
          </div>
          <div className="lg:hidden block">
            <div className="grid grid-cols-1 gap-x-3 py-5">
              <div className="relative">
                <Image
                  width={616}
                  height={532}
                  alt="michael-todd-beauty"
                  className="w-full"
                  src={props.banner_image}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col font-post-grotesk">
            <div className="lg:order-1 order-2">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-2 pt-4 lg:pb-8 pb-6 font-post-grotesk">
                {props.banner_Description &&
                  props.banner_Description.map((item, index) => (
                    <div
                      key={`description-${index}`}
                      className="flex justify-start items-center gap-x-2"
                    >
                      <Image
                        alt="michael-todd-beauty"
                        src={item.Icon}
                        width={22}
                        height={22}
                        className="w-5 h-5"
                      />
                      <p className="font-400 text-[15px] sm:text-16 text-gray-100">
                        {item.description}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
            <div className="lg:order-2 order-1">
              <p className="sm:text-18 font-bold font-post-grotesk text-primary-100 pb-5">
                {props.banner_sub_title}
              </p>
              <Link href="#" className="">
                <button className="btn-primary mb-4 w-full sm:max-w-[406px]">
                  {props.text_on_button}
                </button>
              </Link>
              <div className="flex justify-start items-center gap-2 md:gap-x-4">
                <p className="before:contents-['*'] before:w-2 before:h-2 before:absolute before:top-1/3 before:bg-secondary before:left-0 before:rounded-full before:-translate-x-1/2 font-500 sm:text-16 text-[15px] text-secondary relative pl-4">
                  {props.shipping}
                </p>
                <p className="font-400 text-black sm:text-16 text-[15px]">
                  {props.shipping_day}
                </p>
              </div>
            </div>
          </div>
          <div className="flex lg:mt-9 justify-center items-center gap-x-4 lg:gap-x-6 w-full md:max-w-[454px] font-post-grotesk">
            <img alt="" src={props.review_author} className="w-20 h-20" />
            <div className="">
              <p className="text-16 pb-3 text-gray-100 font-400">
                {props.review_content}
              </p>
              <div className="flex justify-start items-center gap-x-6">
                <p className="font-400 text-12 text-black">
                  {props.author_name}
                </p>
                <div className="flex justify-center items-center gap-x-3">
                  <img
                    alt="michael-todd-beauty"
                    src="/images/svg/green-check.svg"
                    className="w-4 h-4"
                  />
                  <p className="font-400 text-12 text-black">Verified Buyer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:block hidden ">
          <div className="grid grid-cols-1">
            <div className="relative h-[500px]">
              <Image
                width={616}
                height={536}
                src={props.banner_image}
                className="w-full h-full"
                alt="Persons face with red lipstick"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
