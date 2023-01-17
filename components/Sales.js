import React from "react";

const Sales = ({ sales_details, section_id }) => {
  return (
    <div
      id={section_id && section_id.trim()}
      className="bg-primary-200 py-[35px] md:py-[42px]"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-12 max-w-5xl m-auto">
          {sales_details.map((sales, index, arr) => (
            <div
              key={`sales-${index}`}
              className={`relative  px-2 md:px-9 sm:col-span-4
              ${index + 1 === 1 ? "col-span-3 " : ""} ${
                index + 1 === 2 ? "col-span-5 " : ""
              } ${index + 1 === 3 ? "col-span-4 " : ""} ${
                arr.length - 1 !== index ? "average-line " : ""
              } `}
            >
              <h5 className="font-400 sm:text-18 sm:text-20 pb-2 leading-5 md:leading-7 text-center text-primary-100 font-cambon uppercase">
                {sales.heading}
              </h5>
              <p className="font-400 text-14 md:text-16 text-gray-100 text-center font-post-grotesk leading-5  lg:leading-6">
                {sales.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sales;
