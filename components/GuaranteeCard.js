import React from "react";

const GuaranteeCard = ({ card }) => {
  return (
    <div className="container mx-auto py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto gap-y-12 max-w-7xl">
        {card &&
          card.map((card, index, arr) => (
            <div key={`card-${index}`} className="lg:pr-12 relative">
              <div
                className={`flex lg:flex-row flex-col justify-center items-center gap-x-10 ${
                  arr.length - 1 === index + 1 ? "warranty-line" : ""
                }`}
              >
                <img src={card.image} className="w-[150px]" />
                <div>
                  <h2 className="lg:text-30 text-28 leading-10 text-primary-100 pb-4 lg:text-start text-center">
                    {card.title}
                  </h2>
                  <h5 className="lg:text-20 text-18 leading-6 text-primary-100 pb-2 lg:text-start text-center">
                    {card.description}
                  </h5>
                  <p className="text-15 lg:text-18 lg:text-start text-center">
                    {card.sub_description}
                  </p>
                </div>
              </div>
            </div>
          ))}

        {/* <div className="lg:pl-12 relative">
          <div className="flex lg:flex-row flex-col justify-center items-center gap-x-10 ">
            <img src="/images/warranty.png" className="w-[150px]" />
            <div>
              <h2 className="text-30 leading-10 text-primary-100 pb-4 lg:text-start text-center">
                3-Year Warranty
              </h2>
              <h5 className="lg:text-20 text-18 leading-6 text-primary-100 pb-2 lg:text-start text-center">
                Better skin for years to come
              </h5>
              <p className="text-15 lg:text-18 lg:text-start text-center">
                Use Sonicsmooth with peace of mind, <br></br> knowing your
                purchase is protected with <br></br> our industry-leading 3-year
                warranty.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default GuaranteeCard;
