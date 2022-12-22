import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
const Header = ({ header_menu, logo }) => {
  const [toggleNavBar, setToggleNavBar] = useState(false);
  const navbarToggle = () => {
    setToggleNavBar(!toggleNavBar);
    document.body.classList.toggle("menu-open");
  };
  return (
    <div className="font-post-grotesk border-gray-200 menu-mobile py-4 border-b-[1px]">
      <div className="container lg:px-4 flex lg:flex-nowrap flex-wrap items-center justify-between mx-auto">
        <button className="lg:hidden pl-4" onClick={() => navbarToggle()}>
          <div
            id="toggle-icon"
            className={`${toggleNavBar ? " open block" : ""}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div className="mx-auto lg:mx-0">
          <Link href="/about" legacyBehavior>
            <Image
              alt="logo"
              width={222}
              height={38}
              src="/images/svg/logo.svg"
              className="w-[222px] h-[38px] lg:order-1 order-2"
            />
          </Link>
        </div>
        <div
          className={`navbar-default header hidden w-full lg:block lg:w-auto animate-fade-in-down ${
            toggleNavBar ? " open !block" : ""
          }`}
        >
          <div className="nav-list">
            <div className="overlay"></div>
            <div className="relative z-50 flex border-t border-b border-primary-100 lg:border-none flex-col w-full text-center lg:text-left lg:w-auto lg:p-4 mt-4 lg:flex-row lg:mt-0 gap-x-10">
              {header_menu &&
                header_menu.map((header, index, arr) => (
                  <div
                    className="p-4 lg:p-0 lg:border-none border-b  border-gray-200"
                    key={index}
                  >
                    {arr.length - 1 === index ? (
                      <>
                        <div className="lg:block hidden py-4 lg:py-0">
                          <Link
                            href={`#${header.link}`}
                            className="lg:ml-3 !text-16 !my-4 btn-primary w-full lg:w-auto"
                          >
                            {header.title}
                          </Link>
                        </div>

                          <Link
                            href={`#${header.link}`}
                            className="lg:hidden block !py-4 lg:ml-3 btn-primary min-w-full sm:min-w-[300px] lg:min-w-auto mx-auto"
                          >
                            {header.title}
                          </Link>

                      </>
                    ) : (
                      <Link
                        href={`#${header.link}`}
                        className="text-primary-100  font-400 text-16 uppercase"
                      >
                        {header.title}
                      </Link>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
