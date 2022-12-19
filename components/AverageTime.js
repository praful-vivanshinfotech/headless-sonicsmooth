import React from "react";

const AverageTime = ({ averageTime }) => {
  return (
    <div className="bg-primary-200 py-[35px] md:py-[42px]">
      <div className="container mx-auto">
        <div className="flex justify-center items-start">
          {averageTime &&
            averageTime.map((averageTime, index, arr) => (
              <div
                key={`averageTime-${index}`}
                className={`pt-[10px] px-[10px] sm:px-[35px] lg:px-[74px] relative min-h-[122px] md:max-w-[400px] ${
                  arr.length - 1 !== index ? "average-line" : ""
                } `}
              >
                <h5 className="font-400 text-14 sm:text-16 md:text-20 pb-2 leading-5 md:leading-7 text-center text-primary-100 font-cambon uppercase">
                  {averageTime.data.headings}
                </h5>
                <p className="font-400 text-14 md:text-16 text-gray-100 text-center font-post-grotesk">
                  {averageTime.data.description}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AverageTime;
