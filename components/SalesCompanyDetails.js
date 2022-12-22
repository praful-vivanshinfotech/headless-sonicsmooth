import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SalesCompanyDetails = ({ sales_card, description, logo }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      }
    ]
  };
  return (
    <div className="bg-primary-200 py-12 lg:py-14 px-4">
      <div className="container mx-auto ">
        <div className="grid grid-cols-12 items-center">
        <div className="col-span-6 sm:col-span-4">
          <div className=" lg:max-w-[282px] sm:border-0 sm:pr-0 pr-3 border-r border-primary-100/40">
            <img src={logo} className="pb-3" />
            <p className="font-500 text-16 leading-6 text-primary-100 font-post-grotesk">
              {description}
            </p>
          </div>
        </div>
        <div className="col-span-6 sm:col-span-8">
          <div className="px-8 sm:px-12 lg:px-0 m-auto">
            <Slider {...settings}>
              {sales_card &&
                sales_card.map((sales, index) => (
                  <div key={`sales-${index}`}>
                    <div className="flex flex-col items-center justify-center">
                      <img src={sales.image} className="pb-2 sm:m-0 " />
                      <p className="font-400 text-18 sm:text-20 text-center font-cambon text-primary-100 leading-7">
                        {sales.description}
                      </p>
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SalesCompanyDetails;
