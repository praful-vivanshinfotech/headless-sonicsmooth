import Image from "next/image";
import React from "react";

const ClientTestimonials = ({
  rating,
  sub_title,
  testimonials_card,
  title,
  section_id,
}) => {
  return (
    <div
      id={section_id && section_id.trim()}
      className="container-sm mx-auto pb-10 lg:pb-20 px-4"
    >
      <div className="text-center">
        <p className="font-post-grotesk font-500 text-[15px] lg:text-16 leading-5 text-gray-100 pb-2">
          {sub_title}
        </p>
        <h2 className=" font-cambon font-400 lg:text-40 text-30 lg:leading-[51px] pb-5 leading-9 text-primary-100">
          {title}
        </h2>
        <p className="font-post-grotesk font-500 text-16 lg:text-18 leading-6 text-center text-gray-100">
          {rating}
        </p>
      </div>
      <div className="pt-[30px] lg:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-12 gap-y-4">
          {testimonials_card.map((testimonials, index) => (
            <div
              key={`testimonials_card-${index}`}
              className="bg-primary-600 px-6 py-8 text-center"
            >
              <div>
                <Image
                  width={100}
                  height={100}
                  alt={
                    testimonials.client_image_alt_name
                      ? testimonials.client_image_alt_name
                      : " Michael Todd Beauty"
                  }
                  src={testimonials.client_image}
                  className="w-[100px] h-[100px] mx-auto"
                />

                <i
                  className="before:text-[#2003402e]  after:text-primary text-26  mx-auto"
                  data-star={testimonials.star}
                ></i>

                <p className="font-cambon font-400 text-18 lg:text-20 text-primary-100 leading-6 lg:leading-7 pb-2">
                  {testimonials.comment}
                </p>
                <p className="font-post-grotesk text-gray-100 font-400 text-[15px] sm:text-16 leading-5 lg:leading-6">
                  {testimonials.description}
                </p>
                <p className="font-500 text-[15px] sm:text-16 leading-5 text-primary-100 pt-6 lg:pb-2 font-post-grotesk">
                  {testimonials.client_name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonials;
