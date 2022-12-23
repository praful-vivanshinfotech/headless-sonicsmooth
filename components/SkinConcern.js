import React from "react";

const SkinConcern = ({
  video_url,
  title,
  description_1,
  description_2,
  description_3,
  description_4,
  description_5,
  section_id,
}) => {
  return (
    <>
      <div
        id={section_id && section_id.trim()}
        className="container mx-auto my-10 lg:my-20 md:px-0 px-4"
      >
        <div className="grid grid-cols-12 md:gap-x-10">
          <div className="lg:col-span-4 col-span-12 lg:block hidden relative pt-[90%]">
            <div className="">
              <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay="autoplay"
                loop
                muted
              >
                <source src={video_url} type="video/mp4"></source>
              </video>
            </div>
          </div>
          <div className="lg:col-span-8 col-span-12 text-gray-100">
            <h2 className="text-7 sm:text-40 leading-10 text-primary-100 pb-[40px] leading-[51px] font-cambon">
              {title}
            </h2>
            <p className="text-16  pb-5 font-post-grotesk md:max-w-[86%] leading-7">
              {description_1}
            </p>
            <div className="font-post-grotesk bg-primary-300 py-2 pr-11 pl-7 w-fit mb-5 relative md:-skew-x-[45deg] -skew-x-[10deg]">
              <p className="italic font-400 text-16  text-primary-100 md:max-w-[100%] md:skew-x-[45deg] skew-x-[10deg] leading-6">
                {description_2}
              </p>
            </div>
            <p className="text-16  mb-5 font-post-grotesk md:max-w-[86%] leading-7">
              {description_3}
            </p>
            <div className="lg:hidden block">
              <div className="relative pt-[56.25%] mt-8 mb-6">
                <video
                  className="block absolute top-0 left-0 w-full h-full"
                  autoPlay="autoplay"
                  loop
                  muted
                >
                  <source src={video_url} type="video/mp4"></source>
                </video>
              </div>
            </div>
            <div className="relative before:bg-transparent lg:before:bg-primary-400 before:w-0 lg:before:w-[5px] before:absolute before:top-0 before:left-0 before:h-full before:bottom-0 lg:before:content-['*'] font-post-grotesk lg:max-w-[80%] ">
              <p className="font-700 text-16 font-post-grotesk lg:pl-4 mb-5 leading-6">
                {description_4}
              </p>
            </div>
            <h5 className="text-primary-100 text-18 lg:text-20 leading-6 font-cambon ">
              {description_5}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkinConcern;
