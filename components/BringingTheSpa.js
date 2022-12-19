import Link from "next/link";
import React from "react";

const BringingTheSpa = ({ title, description, video_url }) => {
  return (
    <div className="bg-primary-300">
      <div className="container">
        <div className="lg:pt-[70px] py-[35px] lg:pb-[60px] md:px-0 px-3">
          <h2 className=" text-center  font-cambon font-400 lg:text-40 text-30 lg:leading-[51px] leading-9 text-primary-100 pb-8">
            {title}
          </h2>
          <p className="font-400 lg:text-16 text-15 leading-6 text-gray-100 text-center lg:max-w-[68%] mx-auto">
            {description}
          </p>
          <video className="pt-14 mx-auto" autoPlay="autoplay" loop muted>
            <source src={video_url} type="video/mp4"></source>
          </video>
        </div>
        <div className=" border-t border-gray-100/20 "></div>
        <div className="py-[35px] lg:py-[60px]">
          <div className="pb-[30px] lg:pb-[67px]">
            <h3 className="font-500 text-center text-gray-100 lg:text-16 text-15 leading-5 font-post-grotesk pb-2">
              SEE WHAT OUR CUSTOMERS ARE SAYING!
            </h3>
            <h2 className=" text-center  font-cambon font-400 lg:text-40 text-30 lg:leading-[51px] leading-9 text-primary-100">
              More Happy Sonicsmooth Customers
            </h2>
          </div>
          <div className="grid grid-cols-12 gap-y-6 md:px-0 px-3">
            <div className="col-span-12 lg:col-span-5 max-w-[500px] m-auto">
              <div className="">
                <img src="/images/svg/five-star.svg" className="pb-2" />
                <p className="font-400 text-18 lg:text-20 text-primary-100 leading-6 pb-3">
                  I have new skin!
                </p>
                <p className="font-400 lg:text-16 text-15 leading-6 text-gray-100 pb-4">
                  “I have always exfoliated my skin but this is a whole new ball
                  of wax. With it removing the peach fuzz your skin care
                  products go in quicker and make up is flawless.”
                </p>
                <div className="flex justify-start items-center gap-x-2 border-b py-6 border-primary-100/10">
                  <p className="font-500 lg:text-16 text-15 leading-5">
                    - Jenn, oklahoma
                  </p>
                  <div className="flex justify-center items-center gap-x-1">
                    <img src="/images/verified.png" />
                    <p className="text-secondary font-700 text-15 leading-5">
                      Verified Buyer
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-2"></div>
            <div className="col-span-12 lg:col-span-5 max-w-[500px] m-auto">
              <div className="">
                <img src="/images/svg/five-star.svg" className="pb-2" />
                <p className="font-400 text-20 text-primary-100 leading-6 pb-3">
                  It Works!
                </p>
                <p className="font-400 lg:text-16 text-15 leading-6 text-gray-100 pb-4">
                  “I used this device and it really works I am so glad I bought
                  the extra heads”
                </p>
                <div className="flex justify-start items-center gap-x-2 border-b py-6 border-primary-100/10">
                  <p className="font-500 lg:text-16 text-15 leading-5">
                    - MegNYC, New York
                  </p>
                  <div className="flex justify-center items-center gap-x-1">
                    <img src="/images/verified.png" />
                    <p className="text-secondary font-700 text-15 leading-5">
                      Verified Buyer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-6 lg:pt-[60px]">
            <Link href="#">
              <div className="flex justify-center items-center gap-x-2 hover:underline">
                <p className="text-primary-100 text-18 font-500 leading-6">
                  More Reviews
                </p>
                <img src="/images/svg/right-arrow.svg" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BringingTheSpa;
