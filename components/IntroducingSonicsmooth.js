import React from "react";

const IntroducingSonicSmooth = ({
  title,
  description,
  sub_description,
  product_image,
  introduction_card_second,
  introduction_card_first,
  money_description,
  text_on_button,
}) => {
  return (
    <div className="bg-primary-700">
      <div className="container mx-auto py-14">
        <div>
          <p className="font-500 mb-1 font-post-grotesk text-center">
            INTRODUCING
          </p>
          <h3 className="!font-500 text-primary-100 !text-[40px] font-cambon mb-5 text-center">
            {title && title}
          </h3>
          <p className="text-18 font-500 font-post-grotesk max-w-[640px] mx-auto mb-7 text-center">
            {description && description}
          </p>
          <p className="text-16 font-post-grotesk max-w-[760px] mx-auto text-center">
            {sub_description && sub_description}
          </p>
          <div className="flex gap-x-12 justify-center">
            <div className="flex flex-col justify-center pt-5">
              {introduction_card_first &&
                introduction_card_first.map((card, index) => (
                  <div
                    key={`card-1-${index}`}
                    className={`flex justify-end items-start mb-8 gap-x-4 ${
                      index % 2 ? "" : "-mr-12"
                    }`}
                  >
                    <div>
                      <p className="text-20 font-cambon mb-2 text-primary-100 text-right">
                        {card.title}
                      </p>
                      <p className="text-16 text-gray-100 text-right font-post-grotesk max-w-[265px]">
                        {card.description}
                      </p>
                    </div>
                    <div>
                      <img src={card.icon} alt="" />
                    </div>
                  </div>
                ))}
            </div>
            <div className="xl:-mb-[260px] flex flex-col items-center">
              <div className="mb-7">
                <img src={product_image && product_image} alt="" />
              </div>
              <a className="btn-primary mb-2 mx-auto" href="#">
                {text_on_button && text_on_button}
              </a>
              <p className="text-center">{money_description}</p>
            </div>
            <div className="flex flex-col justify-center pt-5">
              {introduction_card_second &&
                introduction_card_second.map((card, index) => (
                  <div
                    key={`card_second${index}`}
                    className={`flex justify-start items-start mb-8 gap-x-4 ${
                      index % 2 ? "" : "-ml-12"
                    }`}
                  >
                    <div>
                      <img src={card.icon} alt="" />
                    </div>
                    <div>
                      <p className="text-20 font-cambon mb-2 text-primary-100 ">
                        {card.title}
                      </p>
                      <p className="text-16 text-gray-100  font-post-grotesk max-w-[265px]">
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroducingSonicSmooth;
