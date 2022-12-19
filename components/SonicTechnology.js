import React from "react";

const SonicTechnology = ({
  title,
  description,
  sonic_smooth_title,
  other_product_title,
  sonic_smooth_section_image,
  other_product_section_image,
  sonic_smooth_section,
  other_products_section,
}) => {
  return (
    <>
      <div className="container mx-auto pt-[50px] lg:pt-[70px] px-4 pb-10">
        <p className="font-post-grotesk text-center font-600 text-15 lg:text-18 leading-5 uppercase text-gray-100 mb-[6px]">
          SONIC TECHNOLOGY
        </p>
        <div className="md:max-w-[60%] m-auto">
          <h2 className="mb-7 text-30 leading-9 lg:leading-[51px] text-center text-primary-100 font-cambon">
            {title}
          </h2>
        </div>
        <div className="md:max-w-[45%] m-auto ">
          <p className="text-center font-500 text-15 font-post-grotesk lg:text-18 leading-6 text-gray-100 ">
            {description}
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="bg-primary-300">
          <div className="flex justify-center h-full">
            <div className="pt-0 sm:pt-20 max-w-[350px] w-full h-auto sm:h-full flex flex-[60%] justify-end !items-end">
              <img src={sonic_smooth_section_image} />
            </div>
            <div className="flex flex-[100%] justify-center items-center sm:pr-[10%] pr-4 sm:py-0 py-9">
              <div>
                <h2 className="text-primary-100 font-cambon text-24 sm:text-30 leading-8 sm:leading-9 lg:leading-[51px] mb-[30px]">
                  {sonic_smooth_title}
                </h2>
                <ul>
                  {sonic_smooth_section &&
                    sonic_smooth_section.map((item, index) => (
                      <li
                        key={`sonic-smooth${index}`}
                        className="flex justify-start items-start gap-x-5 mb-2 sm:mb-5"
                      >
                        <img
                          src={item.icon}
                          className="w-4 md:w-6 lg:w-8 h-4 md:h-6 lg:h-8"
                        />
                        <p className="font-400 text-[15px] font-post-grotesk sm:text-18 lg:text-20 leading-5 lg:leading-7 text-primary-100">
                          {item.description}
                        </p>
                      </li>
                    ))}

                  {/* <li className="flex justify-start items-center gap-x-5 mb-2 sm:mb-5">
                    <img
                      src="/images/check.png"
                      className="w-4 md:w-6 lg:w-8 h-4 md:h-6 lg:h-8"
                    />
                    <p className="font-400 text-16 sm:text-18 lg:text-20 leading-5 lg:leading-7 text-primary-100">
                      Leaves your skin soft & smooth
                    </p>
                  </li>
                  <li className="flex justify-start items-center gap-x-5 mb-2 sm:mb-5">
                    <img
                      src="/images/check.png"
                      className="w-4 md:w-6 lg:w-8 h-4 md:h-6 lg:h-8"
                    />
                    <p className="font-400 text-16 sm:text-18 lg:text-20 leading-5 lg:leading-7 text-primary-100">
                      Designed for women’s hair
                    </p>
                  </li>
                  <li className="flex justify-start items-center gap-x-5 mb-2 sm:mb-5">
                    <img
                      src="/images/check.png"
                      className="w-4 md:w-6 lg:w-8 h-4 md:h-6 lg:h-8"
                    />
                    <p className="font-400 text-16 sm:text-18 lg:text-20 leading-5 lg:leading-7 text-primary-100">
                      Gently removes dead skin & debris
                    </p>
                  </li>
                  <li className="flex justify-start items-center gap-x-5 mb-2 sm:mb-5">
                    <img
                      src="/images/check.png"
                      className="w-4 md:w-6 lg:w-8 h-4 md:h-6 lg:h-8"
                    />
                    <p className="font-400 text-16 sm:text-18 lg:text-20 leading-5 lg:leading-7 text-primary-100">
                      Sonic technology helps reduces fine lines & wrinkles
                    </p>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary-200">
          <div className="flex justify-center  h-full ">
            <div className="flex flex-[100%] justify-center items-center sm:pl-[10%] pl-6 sm:py-0 py-9">
              <div className="">
                <h2 className="text-primary-100 font-cambon  text-24 sm:text-30 leading-8 sm:leading-9 lg:leading-[51px] mb-[30px]">
                  {other_product_title}
                </h2>
                <ul>
                  {other_products_section &&
                    other_products_section.map((item, index) => (
                      <li
                        key={`other-products${index}`}
                        className="flex justify-start items-start gap-x-5 mb-2 sm:mb-5"
                      >
                        <img
                          src={item.icon}
                          className="w-4 md:w-6 lg:w-8 h-4 md:h-6 lg:h-8"
                        />
                        <p className="font-400 font-post-grotesk text-16 sm:text-18 lg:text-20 leading-5 lg:leading-7 text-primary-100">
                          {item.description}
                        </p>
                      </li>
                    ))}
                  {/*
                  <li className="flex justify-start items-center gap-x-5 mb-2 sm:mb-5">
                    <img
                      src="/images/wrong.png"
                      className="w-4 md:w-6 lg:w-8 h-4 md:h-6 lg:h-8"
                    />
                    <p className="font-400 text-16 sm:text-18 lg:text-20 leading-5 lg:leading-7 text-primary-100">
                      Cause irritation & redness
                    </p>
                  </li>
                  <li className="flex justify-start items-center gap-x-5 mb-2 sm:mb-5">
                    <img
                      src="/images/wrong.png"
                      className="w-4 md:w-6 lg:w-8 h-4 md:h-6 lg:h-8"
                    />
                    <p className="font-400 text-16 sm:text-18 lg:text-20 leading-5 lg:leading-7 text-primary-100">
                      Cause razor burn
                    </p>
                  </li>
                  <li className="flex justify-start items-center gap-x-5 mb-2 sm:mb-5">
                    <img
                      src="/images/wrong.png"
                      className="w-4 md:w-6 lg:w-8 h-4 md:h-6 lg:h-8"
                    />
                    <p className="font-400 text-16 sm:text-18 lg:text-20 leading-5 lg:leading-7 text-primary-100">
                      Easier to cut or nick your skin, causing scarring
                    </p>
                  </li>
                  <li className="flex justify-start items-center gap-x-5 mb-2 sm:mb-5">
                    <img
                      src="/images/wrong.png"
                      className="w-4 md:w-6 lg:w-8 h-4 md:h-6 lg:h-8"
                    />
                    <p className="font-400 text-16 sm:text-18 lg:text-20 leading-5 lg:leading-7 text-primary-100">
                      Can introduce small abrasions on the skin
                    </p>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="pt-0 sm:pt-20 max-w-[257px] w-full h-auto sm:h-full flex flex-[60%] justify-end items-end">
              <img src={other_product_section_image} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SonicTechnology;
