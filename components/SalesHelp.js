import Link from "next/link";
import React from "react";

const SalesHelp = ({
  title,
  description,
  mail_id,
  sub_description,
  section_id,
}) => {
  return (
    <div id={section_id && section_id.trim()} className="bg-primary-100">
      <div className="container mx-auto md:px-0 px-3">
        <div className="text-center lg:py-20 md:py-12 py-9">
          <h2 className="font-cambon font-400 lg:text-40 text-30 lg:leading-[51px] leading-9 text-primary-300 pb-5">
            {title}
          </h2>
          <p className="font-post-grotesk font-500 lg:text-18 text-16 sm:leading-7 leading-6 text-primary-300 pb-4">
            {description}
          </p>
          <Link href={`mailto:${mail_id}`}>
            <p className="font-400 font-post-grotesk text-16 sm:text-18 leading-6 lg:leading-7 text-primary-300 pb-4 hover:underline">
              {mail_id}
            </p>
          </Link>
          <p className="font-400 text-16 sm:text-18 leading-7 text-primary-300 font-post-grotesk">
            {sub_description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SalesHelp;
