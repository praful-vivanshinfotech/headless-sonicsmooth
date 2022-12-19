import React from "react";
import Accordion from "./accrodian/Accordion";

const FAQSection = ({ FAQ }) => {
  return (
    <div className="container mx-auto md:px-0 px-4 py-10 lg:py-24">
      <h2 className="pb-[30px] lg:pb-10 font-cambon text-center font-400 lg:text-40 text-30 lg:leading-[51px] leading-9 text-primary-100">
        Frequently Asked Questions
      </h2>
      {FAQ &&
        FAQ.map((faq, index) => (
          <Accordion
            key={index}
            accordion_content={faq.accordion_content}
            accordion_heading={faq.accordion_heading}
          />
        ))}
    </div>
  );
};

export default FAQSection;
