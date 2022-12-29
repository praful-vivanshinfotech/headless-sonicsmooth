import { ScrollToDiv } from "@/helper/Scroll";
import Image from "next/image";
import React from "react";

const GlowingSkin = ({
  title,
  skin_image,
  description,
  button_text,
  guarantee_time,
  section_id,
  button_link,
}) => {
  return (
    <div
      id={section_id && section_id.trim()}
      className="container-sm mx-auto md:px-0 px-4 xl:mt-[190px] py-10 lg:py-20"
    >
      <h5 className="uppercase font-post-grotesk text-center font-500 text-[15px] md:text-16 leading-5 text-gray-100 pb-6 mb-1">
        Before & after
      </h5>
      <h5 className="text-28 md:text-[40px] leading-[35px] lg:leading-[51px] text-center text-primary-100 font-cambon pb-[30px]">
        {title}
      </h5>
      <div className="text-center pb-10 m-auto max-w-[100%] xl:max-w-[75%] md:max-w-[70%] font-post-grotesk">
        <p className="text-[15px] md:text-16 leading-5 text-gray-100">
          {description}
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 md:gap-x-5 gap-y-3">
        {skin_image &&
          skin_image.map((skin, index) => (
            <div className="relative" key={`skin-img-${index}`}>
              <Image
                width={380}
                height={334}
                alt={
                  skin?.skin_image_alt_name
                    ? skin?.skin_image_alt_name
                    : "Michael Todd Beauty"
                }
                src={skin.skin_image}
                className="w-full h-72 sm:h-80 object-cover"
              />
              <div className="absolute bg-primary-300 md:bg-transparent md:px-0 md:py-0 px-[5px] py-[3px]  text-gray-100 text-16 uppercase font-post-grotesk font-500 bottom-2 left-3 z-[1]">
                {skin.text}
              </div>
            </div>
          ))}
      </div>
      <div className="lg:mt-10 mt-[35px]">
        <div className="flex justify-center items-center">
          <button
            onClick={ScrollToDiv}
            data-scroll-to={button_link ? button_link?.trim() : "__next"}
            className="uppercase btn-primary px-[50px] "
          >
            {button_text}
          </button>
        </div>
        <p className="text-center text-[15px] sm:text-16 font-400 text-gray-100 pt-4 font-post-grotesk">
          {guarantee_time}
        </p>
      </div>
    </div>
  );
};

export default GlowingSkin;
