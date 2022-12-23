import Image from "next/image";
import React from "react";

const HowToUse = ({ title, step_details, section_id }) => {
  return (
    <div id={section_id && section_id.trim()} className="container mx-auto ">
      <div className="px-4">
        <div className="text-center pb-[60px]">
          <p className="font-500 leading-5 font-post-grotesk pb-2">
            How to use
          </p>
          <h2 className=" font-cambon font-400 lg:text-40 text-30 lg:leading-[51px] pb-5 leading-9 text-primary-100">
            {title}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ">
          {step_details &&
            step_details.map((step, index) => (
              <div
                key={`step-${index}`}
                className={`relative ${
                  [2, 5, 8, 11, 14].includes(index + 1)
                    ? "guide-arrow-1 guide-arrow-2"
                    : ""
                }`}
              >
                <Image
                  width={335}
                  height={360}
                  alt={
                    step.image_alt_name
                      ? step.image_alt_name
                      : "Michael Todd Beauty"
                  }
                  src={step.image}
                  className="md:mx-0 mx-auto w-full"
                />
                <div className="flex justify-start items-start gap-x-2">
                  <p className="text-[76px] font-400 font-cambon leading-[100px] text-primary-100">
                    0{index + 1}
                  </p>
                  <p className="font-pot-grotesk pt-6 font-post-grotesk font-500 text-16 leading-6 text-gray-100">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HowToUse;
