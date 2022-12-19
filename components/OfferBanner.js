import React from "react";

const OfferBanner = ({ description_1, description_2 }) => {
  return (
    <div className="bg-primary">
      <h2 className="font-post-grotesk font-700 sm:text-18 text-14 text-white uppercase text-center py-[10px] px-4 ">
        {description_1}
        <span className="font-400">
          {""} {description_2}
        </span>
      </h2>
    </div>
  );
};

export default OfferBanner;
