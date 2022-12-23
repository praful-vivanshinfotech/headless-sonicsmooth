import Image from "next/image";
import React from "react";
import Accordion from "./accrodian/Accordion";
const IntroducingSonicSmooth = ({
  title,
  description,
  sub_description,
  product_image,
  product_image_alt_name,
  introduction_card_second,
  introduction_card_first,
  money_description,
  text_on_button,
  section_id,
  introduction_card_last_client_name,
}) => {
  return (
    <div
      id={section_id && section_id.trim()}
      className="bg-primary-700 md:px-0 px-4"
    >
      <div className="container mx-auto py-8 lg:py-14">
        <div>
          <p className="font-500 mb-1 font-post-grotesk text-center">
            INTRODUCING
          </p>
          <h3 className="!font-500 text-primary-100 text-28 md:!text-[40px] font-cambon mb-5 text-center">
            {title && title}
          </h3>
          <p className="text-18 font-500 font-post-grotesk max-w-[640px] mx-auto mb-7 text-center">
            {description && description}
          </p>
          <p className="text-16 font-post-grotesk max-w-[760px] mx-auto text-center">
            {sub_description && sub_description}
          </p>
          <div className="flex lg:flex-row flex-col gap-x-12 justify-center">
            <div className="flex flex-col justify-center pt-5">
              {introduction_card_first &&
                introduction_card_first.map((card, index) => (
                  <div key={`card-1-${index}`}>
                    <div className="lg:block hidden">
                      <div
                        className={`flex justify-end items-start mb-8 gap-x-4 ${
                          index % 2 ? "" : "-mr-12 "
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
                          <Image
                            width={93}
                            height={93}
                            alt="sonic smooth"
                            src={card.icon}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="lg:hidden block ">
                      <Accordion
                        className={`p-4 mb-4 bg-white ${
                          index == introduction_card_first.length - 1
                            ? "hidden"
                            : "block"
                        }`}
                        accordion_heading={
                          <div className="pb-2">{card.title}</div>
                        }
                        accordion_content={
                          <div className="flex justify-center items-center gap-x-2 ">
                            <img
                              alt=""
                              src={card.icon}
                              className="w-[66px] h-[66px]"
                            />
                            <div className="font-400 leading-5 text-gray-100 text-15">
                              {card.description}
                            </div>
                          </div>
                        }
                      />
                    </div>
                  </div>
                ))}
            </div>
            <div className="lg:block hidden">
              <div className="xl:-mb-[260px] flex flex-col items-center font-post-grotesk">
                <div className="mb-7">
                  <Image
                    width={330}
                    height={627}
                    alt={
                      product_image_alt_name
                        ? { product_image_alt_name }
                        : "sonicsmooth TODD BEAUTY"
                    }
                    src={product_image && product_image}
                  />
                </div>
                <a className="btn-primary mb-2 mx-auto" href="#">
                  {text_on_button && text_on_button}
                </a>
                <p className="text-center">{money_description}</p>
              </div>
            </div>
            <div className="flex  flex-col justify-center lg:pt-5">
              {introduction_card_second &&
                introduction_card_second.map((card, index) => (
                  <div key={`card_second-${index}`}>
                    <div className="lg:block hidden">
                      <div
                        className={`flex justify-start items-start mb-8 gap-x-4 ${
                          index % 2 ? "" : "-ml-12"
                        }`}
                      >
                        <div>
                          <img alt="" src={card.icon} />
                        </div>
                        <div>
                          <p className="text-20 font-cambon mb-2 text-primary-100 ">
                            {card.title}
                          </p>
                          <p className="text-16 text-gray-100  font-post-grotesk max-w-[265px]">
                            {card.description}
                          </p>
                          {index + 1 == introduction_card_second.length && (
                            <p className="font-500 text-primary-100 font-post-grotesk">
                              {introduction_card_last_client_name}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="lg:hidden block ">
                      <Accordion
                        className="p-4 mb-4 bg-white"
                        accordion_heading={
                          <div className="pb-2">{card.title}</div>
                        }
                        accordion_content={
                          <div className="flex justify-center items-center gap-x-2 ">
                            <img
                              alt=""
                              src={card.icon}
                              className="w-[66px] h-[66px]"
                            />
                            <div className="font-400 leading-5 text-gray-100 text-15">
                              {card.description}
                            </div>
                          </div>
                        }
                      />
                    </div>
                    <div
                      className={`${
                        index + 1 == introduction_card_second.length
                          ? "lg:hidden block"
                          : "hidden"
                      }`}
                    >
                      <div
                        className={"flex justify-start items-start  gap-x-4"}
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
                          {index + 1 == introduction_card_second.length && (
                            <p className="font-500 text-primary-100 font-post-grotesk">
                              {introduction_card_last_client_name}
                            </p>
                          )}
                        </div>
                      </div>
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
