import Image from "next/image";
import React from "react";

const GuaranteeCard = ({ card, section_id }) => {
  return (
    <div id={section_id && section_id.trim()} className="container mx-auto ">
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto gap-y-12 max-w-7xl px-4">
        {card &&
          card.map((card, index, arr) => (
            <div
              key={`card-${index}`}
              className={"relative" + (index === 0 ? " lg:pr-12" : " lg:pl-12")}
            >
              <div
                className={`flex lg:flex-row flex-col justify-center items-center gap-x-10 ${
                  arr.length - 1 === index + 1 ? "warranty-line" : ""
                }`}
              >
                <Image
                  width={151}
                  height={159}
                  alt={card.title}
                  src={card.image}
                  className="w-[150px]"
                />
                <div>
                  <h2 className="lg:text-[40px] text-28 leading-10 font-cambon text-primary-100 pb-4 lg:text-start text-center">
                    {card.title}
                  </h2>
                  <h5 className="lg:text-20 text-18 leading-6 font-cambon text-primary-100 pb-2 lg:text-start text-center">
                    {card.description}
                  </h5>
                  <p className="text-15 lg:text-16 lg:text-start font-post-grotesk text-center">
                    {card.sub_description}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default GuaranteeCard;
