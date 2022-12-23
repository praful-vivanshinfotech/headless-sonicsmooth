import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
const Header = ({ header_menu }) => {
  const [toggleNavBar, setToggleNavBar] = useState(false);

  const navbarToggle = () => {
    setToggleNavBar(!toggleNavBar);
    document.body.classList.toggle("menu-open");
  };

  const scrollToTerm = (event) => {
    if (screen.width < 1024) {
      navbarToggle();
    }

    if (typeof window !== "undefined") {
      window.scrollTo({
        top: elementPosition(
          document.getElementById(event.target.dataset.scrollTo)
        ),
        behavior: "smooth",
      });
    }
  };

  const elementPosition = (obj) => {
    let currentTop = 0;
    if (obj.offsetParent) {
      do {
        currentTop += obj.offsetTop;
      } while ((obj = obj.offsetParent));
      return [currentTop - 50];
    }
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
          <Link href="/sonicsmooth" legacyBehavior>
            <Image
              alt="michael-todd-beauty-logo"
              width={222}
              height={38}
              src="/images/svg/logo.svg"
              className="w-[222px] h-[38px] lg:order-1 order-2 cursor-pointer"
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
                            href="#!"
                            onClick={scrollToTerm}
                            data-scroll-to={header?.section_id.trim()}
                            className="lg:ml-3 !text-16 !my-4 btn-primary w-full lg:w-auto"
                          >
                            {header.title}
                          </Link>
                        </div>

                        <Link
                          href="#!"
                          onClick={scrollToTerm}
                          data-scroll-to={header?.section_id.trim()}
                          className="lg:hidden block !py-4 lg:ml-3 btn-primary min-w-full sm:min-w-[300px] lg:min-w-auto mx-auto"
                        >
                          {header.title}
                        </Link>
                      </>
                    ) : (
                      <Link
                        href="#!"
                        onClick={scrollToTerm}
                        data-scroll-to={header?.section_id.trim()}
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
