import React from "react";

const SalesBenefits = ({
  product_image,
  title,
  description,
  product_benefits,
  sub_description,
  text_on_button,
  money_description,
}) => {
  return (
    <div className="bg-primary-500">
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="">
          <img src={product_image} className="w-full" />
        </div>
        <div className="m-auto">
          <h2 className="font-cambon font-400 lg:text-40 text-30 lg:leading-[51px] leading-9 text-primary-100 pb-8">
            {title && title}
          </h2>
          <p className="font-500 text-16 leading-6 font-post-grotesk text-gray-100 pb-4">
            {description && description}
          </p>
          <ul>
            {product_benefits.map((product_benefits, index) => (
              <li
                key={`product_benefits${index}`}
                className="flex justify-start items-center gap-x-2 pb-2"
              >
                <img src={product_benefits.icon} className="w-5 h-5" />
                <p className="font-400 text-16 leading-5 text-gray-100">
                  {product_benefits.benefits}
                </p>
              </li>
            ))}
          </ul>
          <div>
            <p className="pt-4 pb-8 text-primary-100 font-700 text-18 leading-6">
              {sub_description && sub_description}
            </p>
            <button className="btn-primary max-w-[280px]">
              {text_on_button && text_on_button}
            </button>
            <p className="pt-4 text-black font-400 text-16 leading-5">
              {money_description && money_description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesBenefits;
