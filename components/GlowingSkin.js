import React from "react";

const GlowingSkin = ({
  title,
  skin_image,
  description,
  button_text,
  guarantee_time,
}) => {
  return (
    <div className="container mx-auto md:px-0 px-4">
      <h5 className="uppercase text-center font-600 text-[15px] md:text-18 leading-5 text-gray-100 pb-6">
        Before & after
      </h5>
      <h5 className="text-28 md:text-30 leading-[35px] lg:leading-[51px] text-center text-gray-100 pb-[30px]">
        {title}
      </h5>
      <div className="text-center pb-10 m-auto max-w-[100%] xl:max-w-[75%] md:max-w-[70%]">
        <p className="text-15 md:text-18 leading-5 text-gray-100">
          {description}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-5 gap-y-3">
        {skin_image &&
          skin_image.map((skin, index) => (
            <img
              key={`skinimg-${index}`}
              src={skin.skin_image}
              className="w-full"
            />
          ))}
      </div>
      <div className="lg:mt-10 mt-[35px]">
        <div className="flex justify-center items-center">
          <button className="uppercase btn-primary px-[50px] ">
            {button_text}
          </button>
        </div>
        <p className="text-center text-18 font-400 text-gray-100 pt-4">
          {guarantee_time}
        </p>
      </div>
    </div>
  );
};

export default GlowingSkin;
