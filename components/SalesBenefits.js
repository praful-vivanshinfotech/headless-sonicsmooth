import { ScrollToDiv } from "@/helper/Scroll";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SalesBenefits = ({
  product_image,
  product_image_alt_name,
  title,
  description,
  product_benefits,
  sub_description,
  text_on_button,
  money_description,
  section_id,
  button_link,
}) => {
  return (
    <div id={section_id && section_id.trim()} className="bg-primary-500 ">
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="">
          <Image
            width={1170}
            height={945}
            alt={
              product_image_alt_name
                ? product_image_alt_name
                : "Michael Todd Beauty"
            }
            src={product_image}
            className="w-full"
          />
        </div>
        <div className="ml-12 my-auto  !p-4 lg:p-0 max-w-[505px]">
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
                <p className="font-400 text-14 sm:text-16 leading-5 text-gray-100 font-post-grotesk">
                  {product_benefits.benefits}
                </p>
              </li>
            ))}
          </ul>
          <div>
            <p className="pt-4 pb-8 text-primary-100 font-post-grotesk font-700 text-18 leading-6">
              {sub_description && sub_description}
            </p>
            <Link href="#!" onClick={ScrollToDiv} className="">
              <button
                data-scroll-to={button_link && button_link}
                className="btn-primary max-w-[280px]"
              >
                {text_on_button && text_on_button}
              </button>
            </Link>
            <p className="pt-4 text-black font-400 text-16 leading-5 font-post-grotesk">
              {money_description && money_description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesBenefits;
