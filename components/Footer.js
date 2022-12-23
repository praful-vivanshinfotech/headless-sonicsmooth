import Link from "next/link";
import React from "react";

const Footer = ({ about, menu, social_icon, email, section_id }) => {
  return (
    <div
      id={section_id && section_id.trim()}
      className="container-sm mx-auto md:px-0 px-4"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-y-6 md:py-14 py-10">
        <div>
          <div className="flex md:justify-start justify-center items-center gap-x-12">
            <div>
              <h4 className="font-700 text-16 sm:text-18 leading-7 text-primary-100 pb-6 lg:pb-9 font-post-grotesk">
                About
              </h4>
              <ul className="font-400 text-16 leading-5 text-primary-100 font-post-grotesk">
                {about &&
                  about.map((item, index) => (
                    <li
                      key={`about--${index}`}
                      className="hover:underline transition-all duration-1000 pb-3 text-14 sm:text-16"
                    >
                      <Link href={item.link}>{item.title}</Link>
                    </li>
                  ))}
              </ul>
            </div>
            <div>
              <h4 className="font-700 text-16 sm:text-18 leading-7 text-primary-100 pb-6 lg:pb-9 font-post-grotesk">
                Menu
              </h4>
              <ul className="font-400 text-16 leading-5 text-primary-100 font-post-grotesk">
                {menu &&
                  menu.map((item, index) => (
                    <li
                      key={`menu--${index}`}
                      className="hover:underline transition-all duration-1000 pb-3 text-14 sm:text-16"
                    >
                      <Link href={item.link}>{item.title}</Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mx-auto">
          <h4 className="font-700 text-16 sm:text-18 text-primary-100 md:pb-9 pb-4 font-post-grotesk">
            Follow Us
          </h4>
          <div className="flex justify-center items-center gap-x-3">
            {social_icon &&
              social_icon.map((item, index) => (
                <Link
                  href={item.link}
                  legacyBehavior
                  key={`social_icon--${index}`}
                >
                  <a target={"_blank"}>
                    <img
                      alt=""
                      src={item.icon}
                      className="w-6 h-6 text-primary-100"
                    />
                  </a>
                </Link>
              ))}
          </div>
        </div>
        <div className="md:ml-auto mx-auto flex flex-col">
          <div className="md:order-1 order-2">
            <Link href="#">
              <img
                alt=""
                src="/images/svg/logo.svg "
                className="h-12 w-[275px] md:mb-8 mb-0 md:mx-0 mx-auto "
              />
            </Link>
          </div>
          <div className="md:order-2 order-1 md:mb-0 mb-6">
            <p className="font-500 text-16 sm:text-18 leading-6 text-primary-100 pb-3 md:text-start text-center font-post-grotesk">
              Questions?
            </p>
            <Link href={`mailto:${email}`}>
              <p className="font-400 font-post-grotesk text-14 sm:text-16 leading-7 text-primary-100 text-center sm:text-left ">
                <span className=" text-center">Email: </span>
                <span className="hover:underline sm:pl-2">{email}</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t-[1px] border-gray-100/10 "> </div>
    </div>
  );
};

export default Footer;
