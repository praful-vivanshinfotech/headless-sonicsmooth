import Link from "next/link";
import React from "react";

const Copyright = ({ page_link, payment_card }) => {
  return (
    <div className="mt-5 mb-10">
      <div className="flex flex-wrap mb-5 justify-center items-center gap-y-3">
        {page_link &&
          page_link.map((item, index, arr) => (
            <Link target="_blank" key={`item--${index}`} href="#">
              <p
                className={`text-gray-100 opacity-[0.44] md:text-16 text-14 leading-5 md:leading-7 font-400 px-3 relative ${
                  arr.length - 1 !== index ? "straight-line" : ""
                } ${item.link && "hover:underline"}`}
              >
                {item.title}
              </p>
            </Link>
          ))}
      </div>
      <div className="pt-5 flex flex-wrap justify-center items-center gap-4">
        {payment_card &&
          payment_card.map((card, index) => (
            <img key={`card-${index}`} src={card.card_logo} />
          ))}
      </div>
    </div>
  );
};

export default Copyright;
