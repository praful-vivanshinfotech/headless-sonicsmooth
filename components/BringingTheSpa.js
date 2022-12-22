import Link from "next/link";
import React from "react";

const BringingTheSpa = ({
  title,
  description,
  video_url,
  heading,
  customer_review_title,
  product_reviews,
}) => {
  return (
    <div className="bg-primary-300">
      <div className="container">
        <div className="lg:pt-[70px] py-[35px] lg:pb-[60px] md:px-0 px-3">
          <h2 className=" text-center  font-cambon font-400 lg:text-40 text-30 lg:leading-[51px] leading-9 text-primary-100 pb-8">
            {title}
          </h2>
          <p className="font-400 font-post-grotesk lg:text-16 text-15 leading-6 text-gray-100 text-center lg:max-w-[68%] mx-auto">
            {description}
          </p>
          <video className="pt-14 mx-auto" autoPlay="autoplay" loop muted>
            <source src={video_url} type="video/mp4"></source>
          </video>
        </div>
        <div className=" border-t border-gray-100/20 "></div>
        <div className="py-[35px] lg:py-[60px]">
          <div className="pb-[30px] lg:pb-[67px]">
            <h3 className="font-500 text-center text-gray-100 lg:text-16 text-15 leading-5 font-post-grotesk pb-2">
              {heading}
            </h3>
            <h2 className=" text-center  font-cambon font-400 lg:text-40 text-30 lg:leading-[51px] leading-9 text-primary-100">
              {customer_review_title}
            </h2>
          </div>
          <div className="grid grid-cols-12 gap-y-6  md:px-0 px-3">
            {product_reviews.slice(0, 2).map((review, index) => (
              <>
                <div
                  key={`product_reviews-${index}`}
                  className="col-span-12 lg:col-span-5 max-w-[500px] m-auto border-b pl-6 pb-6 border-primary-100/10 items-stretch h-full"
                >
                  <img src="/images/svg/five-star.svg" className="pb-2" />
                  <p className="font-400 text-18 lg:text-20 font-cambon text-primary-100 leading-6 pb-3">
                    {review.one_word_reviews}
                  </p>
                  <p className="font-400 lg:text-16 text-15 leading-6 text-gray-100 pb-4 font-post-grotesk">
                    {review.customer_reviews}
                  </p>
                  <div className="flex justify-start items-center gap-x-2 ">
                    <p className="font-500 lg:text-16 text-15 leading-5 font-post-grotesk">
                      {review.customer_name}
                    </p>
                    <div className="flex justify-center items-center gap-x-1">
                      <img src="/images/verified.png" />
                      <p className="text-secondary font-700 text-15 leading-5 font-post-grotesk">
                        Verified Buyer
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-2"></div>
              </>
            ))}
          </div>
          <div className="pt-6 lg:pt-[60px]">
            <Link href="#">
              <div className="flex justify-center items-center gap-x-2 hover:underline">
                <p className="text-primary-100 text-18 font-500 leading-6 font-post-grotesk">
                  More Reviews
                </p>
                <img src="/images/svg/right-arrow.svg" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BringingTheSpa;
