import React from "react";

const HowToUse = ({ title, step_details }) => {
  return (
    <div className="container mx-auto ">
      <div className="pt-20">
        <div className="text-center pb-[60px]">
          <p className="font-500 leading-5 font-post-grotesk pb-2">
            How to use
          </p>
          <h2 className="uppercase font-cambon font-400 lg:text-40 text-30 lg:leading-[51px] pb-5 leading-9 text-primary-100">
            {title}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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
                <img src={step.image} className="md:mx-0 mx-auto" />
                <div className="flex justify-start items-center gap-x-2">
                  <p className="text-[76px] font-400 font-cambon leading-[100px] text-primary-100">
                    0{index + 1}
                  </p>
                  <p className="font-pot-grotesk font-500 text-16 leading-6 text-gray-100">
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
