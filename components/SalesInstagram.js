import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactReadMoreReadLess from "react-read-more-read-less";
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
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="bg-primary-300 py-9 lg:py-[70px] mb-[30px] lg:mb-20 mt-[88px] lg:mt-[100px] sales-instagram">
        <div className="container mx-auto md:px-0 px-4">
          <div className="pb-10 lg:pb-[70px]">
            <div className="pb-12">
              <p className="font-post-grotesk font-500 text-16 text-gray-100 leading-5 pb-1 text-center">
                {sub_title}
              </p>
              <h2 className="md:max-w-[75%] mx-auto font-cambon font-400 lg:text-40 text-30 lg:leading-[51px] leading-9 text-primary-100 pb-5 text-center">
                {title}
              </h2>
              <p className="font-post-grotesk font-500 text-16 lg:text-18 first-letter:leading-6 text-gray-100 text-center">
                {rating}
              </p>
            </div>
            <div className="md:px-0 px-4">
              <Slider {...settings}>
                {award_card.map((award, index) => (
                  <div key={`award-${index}`}>
                    <div
                      className={`relative flex flex-col gap-y-3 px-[50px] min-h-[220px] ${
                        index + 1 == award_card.length
                          ? "solution-line-last solution-line2-last"
                          : "solution-line solution-line2 "
                      }`}
                    >
                      <img
                        src={award.award_image}
                      className={` mx-auto ${ index == 0 ? "w-[225px]":""}`}
                      />
                      <p className="font-post-grotesk font-400 text-16 text-center leading-6 mt-auto">
                        {award.award_description}
                      </p>
                    </div>
                  </div>
                ))}

                {/* <div>
                  <div className="relative solution-line solution-line2  flex flex-col gap-y-3 px-[50px]">
                    <img src="/images/svg/dibs.svg" className="mx-auto" />
                    <p className="font-post-grotesk font-400 text-16 text-center leading-6">
                      Sonicsmooth won the 2018 YAHOO Lifestyle Diversity In
                      Beauty Award.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex relative solution-line-last solution-line2-last flex-col gap-y-3 px-[50px]">
                    <img src="/images/svg/beauty-mag.svg" className="mx-auto" />
                    <p className="font-post-grotesk font-400 text-16 text-center leading-6">
                      Sonicsmooth has been selected in BeautyMag’s 2021 Top
                      Beauty Picks.
                    </p>
                  </div>
                </div> */}
              </Slider>
            </div>
          </div>
          <div className="">
            <p className="font-700 text-15 lg:text-18 leading-7 text-center text-primary-100 font-post-grotesk pb-2">
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
                    <img src={insta_post.post_image} className="w-full" />
                    <div className="px-3 py-4 children">
                      <div className="flex justify-between items-center">
                        <div className="flex justify-center items-start gap-x-4">
                          <img src={insta_post.profile_image} />
                          <div>
                            <Link href="#">
                              <h5 className="font-400 text-16 leading-5 text-primary-100 font-post-grotesk pb-2">
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
                              src={insta_post.insta_icon}
                              className="w-6 h-6"
                            />
                          </Link>
                        </div>
                      </div>
                      <div>
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
                {/* <div className="bg-white ">
                  <img src="/images/customer-8.png" className="w-full" />
                  <div className="px-3 py-4 children">
                    <div className="flex justify-between items-center">
                      <div className="flex justify-center items-start gap-x-4">
                        <img src="/images/customer-8-1.png" />
                        <div>
                          <Link href="#">
                            <h5 className="font-400 text-16 leading-5 text-primary-100 font-post-grotesk pb-2">
                              @lexigarcia96
                            </h5>
                          </Link>
                          <p className="font-400 text-14 leading-5 text-gray-100/50 font-post-grotesk">
                            Nov 06,2020
                          </p>
                        </div>
                      </div>
                      <div>
                        <Link href="#">
                          <img
                            src="/images/svg/instagram.svg"
                            className="w-6 h-6"
                          />
                        </Link>
                      </div>
                    </div>
                    <div>
                      <ReactReadMoreReadLess
                        charLimit={86}
                        Lines={1}
                        readMoreText={"Read More"}
                        readLessText={"Read less"}
                      >
                        {
                          "Say hello 👋🏼 to my new favorite beauty tool from @michaeltoddbeauty ! This makeup... Read more Say hello 👋🏼 to my new favorite beauty tool from @michaeltoddbeauty ! This makeup... Read more Say hello 👋🏼 to my new favorite beauty tool from @michaeltoddbeauty ! This makeup... Read more Say hello 👋🏼 to my new favorite beauty tool from @michaeltoddbeauty ! This makeup... Read more "
                        }
                      </ReactReadMoreReadLess>
                    </div>
                  </div>
                </div>
                <div className="bg-white ">
                  <img src="/images/customer-9.png" className="w-full" />
                  <div className="px-3 py-4 children">
                    <div className="flex justify-between items-center">
                      <div className="flex justify-center items-start gap-x-4">
                        <img src="/images/customer-9-1.png" />
                        <div>
                          <Link href="#">
                            <h5 className="font-400 text-16 leading-5 text-primary-100 font-post-grotesk pb-2">
                              @perkiperkins85
                            </h5>
                          </Link>
                          <p className="font-400 text-14 leading-5 text-gray-100/50 font-post-grotesk">
                            Nov 06,2020
                          </p>
                        </div>
                      </div>
                      <div>
                        <Link href="#">
                          <img
                            src="/images/svg/instagram.svg"
                            className="w-6 h-6"
                          />
                        </Link>
                      </div>
                    </div>
                    <div>
                      <ReactReadMoreReadLess
                        charLimit={60}
                        Lines={1}
                        readMoreText={"Read More"}
                        readLessText={"Read less"}
                      >
                        {
                          "A bit of a personal question, but do you shave, wax or use... A bit of a personal question, but do you shave, wax or use..A bit of a personal question, but do you shave, wax or use..A bit of a personal question, but do you shave, wax or use..A bit of a personal question, but do you shave, wax or use..A bit of a personal question, but do you shave, wax or use..A bit of a personal question, but do you shave, wax or use..Read more  "
                        }
                      </ReactReadMoreReadLess>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <button className="btn-primary mx-auto">{button}</button>
              <p className="text-black font-400 font-post-grotesk text-16 leading-5 text-center pt-2">
                {Guarantee}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalesInstagram;
