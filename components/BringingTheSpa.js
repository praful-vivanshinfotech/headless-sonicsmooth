import Image from "next/image";
import Link from "next/link";
import React from "react";

const BringingTheSpa = ({
  title,
  description,
  video_url,
  heading,
  customer_review_title,
  product_reviews,
  section_id,
}) => {
  return (
    <div className="bg-primary-300">
      <div className="container-sm mx-auto">
        <div className="lg:pt-[70px] py-[35px] lg:pb-[60px] md:px-0 px-4">
          <h2 className=" text-center  font-cambon font-400 lg:text-40 text-30 lg:leading-[51px] leading-9 text-primary-100 pb-8">
            {title}
          </h2>
          <p className="font-400 font-post-grotesk lg:text-16 text-[15px] leading-6 text-gray-100 text-center lg:max-w-[68%] mx-auto">
            {description}
          </p>
          <video
            className="pt-14 mx-auto md:max-w-[600px]"
            autoPlay="autoplay"
            loop
            muted
          >
            <source src={video_url} type="video/mp4"></source>
          </video>
        </div>
        <div className=" border-t border-gray-100/20 "></div>
        <div
          id={section_id && section_id.trim()}
          className="py-[35px] lg:py-[60px]"
        >
          <div className="pb-[30px] lg:pb-[67px] px-4 sm:px-0">
            <h3 className="font-500 text-center text-gray-100 lg:text-16 text-[15px] leading-5 font-post-grotesk pb-2">
              {heading}
            </h3>
            <h2 className=" text-center  font-cambon font-400 lg:text-40 text-30 lg:leading-[51px] leading-9 text-primary-100">
              {customer_review_title}
            </h2>
          </div>
          <div className="flex flex-col items-center lg:flex-row gap-y-6 lg:items-stretch justify-around md:px-0 px-4">
            {product_reviews.slice(0, 2).map((review, index) => (
              <div
                key={`product_reviews-${index}`}
                className="w-12/12 lg:w-12/5 flex flex-col text-center lg:text-left max-w-[500px] border-b sm:pl-6 pb-6 border-primary-100/10"
              >
                <img
                  src="/images/svg/five-star.svg"
                  className="pb-2 mx-auto lg:mx-0"
                  alt="rating star"
                  width={96}
                  height={16}
                />
                <p className="font-400 text-18 sm:text-20 font-cambon text-primary-100 leading-6 pb-3">
                  {review.one_word_reviews}
                </p>
                <p className="font-400 sm:text-16 text-[15px] leading-6 text-gray-100 pb-4 font-post-grotesk">
                  {review.customer_reviews}
                </p>
                <div className="flex justify-center lg:justify-start items-center gap-x-2 mt-auto">
                  <p className="font-500 sm:text-16 text-[15px] text-primary-100 leading-5 font-post-grotesk">
                    {review.customer_name}
                  </p>
                  <div className="flex justify-center items-center gap-x-1">
                    <img src="/images/verified.png" />
                    <p className="text-secondary font-bold text-[15px] leading-5 font-post-grotesk">
                      Verified Buyer
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-6 lg:pt-[60px]">
            <Link href="https://michaeltoddbeauty.com/products/sonicsmooth/#product_reviews">
              <div className="flex justify-center items-center gap-x-2 underline hover:underline">
                <p className="text-primary-100 text-18 font-500 leading-6 font-post-grotesk">
                  More Reviews
                </p>
                <img alt="" src="/images/svg/right-arrow.svg" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BringingTheSpa;
